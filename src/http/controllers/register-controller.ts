import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { RegisterUseCase } from "../../use-cases/register"
import { MakeRegisterUserCase } from "../../use-cases/factories/make-register-use-case"

export async function register (request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = MakeRegisterUserCase()

    await registerUseCase.execute({
      name,
      email,
      password
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}