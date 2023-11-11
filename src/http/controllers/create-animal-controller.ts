import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateAnimalUseCase } from "../../use-cases/factories/make-create-animal-use-case";

export async function createAnimal (request: FastifyRequest, reply: FastifyReply) {
  const createAnimalSchema = z.object({
    name: z.string(),
    age: z.number(),
    independency: z.string(),
    description: z.string(),
    size: z.string(),
    energy: z.number(),
    photo: z.string(),
    companyId: z.string()
  })

  const { name, age, independency, description, size, energy, photo, companyId } = createAnimalSchema.parse(request.body)
  
  try {
    const registerUseCase = MakeCreateAnimalUseCase()

    console.log(request.body)

    await registerUseCase.execute({
      name,
      age,
      independency,
      description,
      size,
      energy,
      photo,
      companyId
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()


}
