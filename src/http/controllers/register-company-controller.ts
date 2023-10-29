import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { MakeRegisterCompanyUserCase } from "../../use-cases/factories/make-register-company-use.case"
// import { RegisterUseCase } from "../../use-cases/register"
// import { MakeRegisterUserCase } from "../../use-cases/factories/make-register-use-case"

export async function registerCompany (request: FastifyRequest, reply: FastifyReply) {
  const registerCompanyBodySchema = z.object({
    name: z.string(),
    address_street: z.string(),
    address_number: z.number(),
    address_complement: z.string(),
    address_city: z.string(),
    address_state: z.string(),
    address_zipcode: z.string(),
    phone: z.string(),
    userId: z.string()
  })

  const { 
    name, 
    address_street,
    address_number,
    address_complement,
    address_city,
    address_state,
    address_zipcode,
    phone,
    userId
  } = registerCompanyBodySchema.parse(request.body)

  try {
    const registerUseCase = MakeRegisterCompanyUserCase()

    await registerUseCase.execute({
      name, 
      address_street,
      address_number,
      address_complement,
      address_city,
      address_state,
      address_zipcode,
      phone,
      userId
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}