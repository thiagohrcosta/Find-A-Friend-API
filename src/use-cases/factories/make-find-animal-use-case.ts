import { PrismaAnimalsRepository } from "../../repositories/prisma/prisma-animal-repository";
import { FindAnimalUseCase } from "../find-animal";

export function MakeFindAnimalUseCase() {
  const animalsRepository = new PrismaAnimalsRepository();
  const findAnimalUseCase = new FindAnimalUseCase(animalsRepository);

  return findAnimalUseCase;
}
