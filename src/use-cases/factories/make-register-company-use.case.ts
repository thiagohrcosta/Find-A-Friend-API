import { PrismaCompaniesRepository } from "../../repositories/prisma/prisma-company-repository"
import { RegisterCompanyUseCase } from "../register-company"

export function MakeRegisterCompanyUserCase() {
  const companiesRepository = new PrismaCompaniesRepository()
  const registerCompanyUseCase = new RegisterCompanyUseCase(companiesRepository)

  return registerCompanyUseCase
}