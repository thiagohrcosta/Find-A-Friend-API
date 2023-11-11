import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaCompaniesRepository } from "../../repositories/prisma/prisma-company-repository";

export async function getCompaniesByCities(request: FastifyRequest, reply: FastifyReply) {
  const companiesRepository = new PrismaCompaniesRepository();

  try {
    const statesWithCities = await companiesRepository.findListOfCities();

    if (Object.keys(statesWithCities).length > 0) {
      reply.code(200).send(statesWithCities);
    } else {
      reply.code(404).send({ error: "No companies found in any state" });
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: "Internal server error" });
  }
}
