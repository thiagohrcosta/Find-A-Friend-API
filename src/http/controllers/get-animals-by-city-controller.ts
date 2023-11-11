import { FastifyReply, FastifyRequest } from "fastify";
import { MakeFindAnimalsUseCase } from "../../use-cases/factories/make-find-animals-use-case";

interface AnimalFilters {
  age?: number;
  independency?: string;
  size?: string;
  energy?: number;
}

export async function getAnimalsByCity(request: FastifyRequest<{ Params: { city: string },  Querystring: any }>, reply: FastifyReply) {
  const { city } = request.params;
  const { age, independency, size, energy } = request.query;

  const findAnimalsUseCase = MakeFindAnimalsUseCase();

  try {
    console.log(age)
    const parsedFilters: AnimalFilters = {};

    if (age !== undefined) {
      parsedFilters.age = parseInt(age as string, 10);
    }

    if (independency !== undefined) {
      parsedFilters.independency = independency as string;
    }

    if (size !== undefined) {
      parsedFilters.size = size as string;
    }

    if (energy !== undefined) {
      parsedFilters.energy = parseInt(energy as string, 10);
    }

    const { animals } = await findAnimalsUseCase.execute({ city, filters: parsedFilters });

    if (animals && animals.length > 0) {
      reply.code(200).send(animals);
    } else {
      reply.code(404).send({ error: "No animals found in the specified city" });
    }
  } catch (error) {
    reply.code(500).send({ error: "Internal server error" });
  }
}
