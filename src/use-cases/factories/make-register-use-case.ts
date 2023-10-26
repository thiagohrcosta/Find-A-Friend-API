import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repostiory"
import { RegisterUseCase } from "../register"

export function MakeRegisterUserCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}