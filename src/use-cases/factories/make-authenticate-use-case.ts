import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repostiory"
import { AuthenticateUseCase } from "../authenticate"

export function MakeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  return authenticateUseCase
}