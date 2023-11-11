import { FastifyReply, FastifyRequest } from "fastify";
import { MakeFindAnimalsUseCase } from "../../use-cases/factories/make-find-animals-use-case";

export async function getAnimalsByCity(request: FastifyRequest<{ Params: { city: string } }>, reply: FastifyReply) {
  const { city } = request.params;

  const findAnimalsUseCase = MakeFindAnimalsUseCase();

  try {
    const { animals } = await findAnimalsUseCase.execute({ city });

    if (animals && animals.length > 0) {
      reply.code(200).send(animals);
    } else {
      reply.code(404).send({ error: "No animals found in the specified city" });
    }
  } catch (error) {
    reply.code(500).send({ error: "Internal server error" });
  }
}
