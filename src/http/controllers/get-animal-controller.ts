import { FastifyReply, FastifyRequest } from "fastify";
import { MakeFindAnimalUseCase } from "../../use-cases/factories/make-find-animal-use-case";

export async function getAnimal(request:  FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const { id } = request.params;

  const findAnimalUseCase = MakeFindAnimalUseCase();

  try {
    const animal = await findAnimalUseCase.execute(id);

    if (animal) {
      reply.code(200).send(animal);
    } else {
      reply.code(404).send({ error: "Animal not found" });
    }
  } catch (error) {
    reply.code(500).send({ error: "Internal server error" });
  }
}
