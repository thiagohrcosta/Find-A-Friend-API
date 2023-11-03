import { PrismaAnimalsRepository } from "../../repositories/prisma/prisma-animal-repository"
import { PrismaCompaniesRepository } from "../../repositories/prisma/prisma-company-repository"
import { CreateAnimalUseCase } from "../create-animal"
import { RegisterCompanyUseCase } from "../register-company"

export function MakeCreateAnimalUseCase() {
  const animalsRepository = new PrismaAnimalsRepository()
  const createAnimalUseCase = new CreateAnimalUseCase(animalsRepository)

  return createAnimalUseCase
}