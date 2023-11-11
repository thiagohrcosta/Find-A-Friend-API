import { PrismaAnimalsRepository } from "../../repositories/prisma/prisma-animal-repository";
import { FindUAnimalsUseCase } from "../find-animals-by-city";

export function MakeFindAnimalsUseCase() {
  const animalsRepository = new PrismaAnimalsRepository();
  const findAnimalsUseCase = new FindUAnimalsUseCase(animalsRepository);

  return findAnimalsUseCase;
}