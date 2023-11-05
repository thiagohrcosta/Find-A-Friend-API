import { AnimalsRepository } from "../repositories/animals-respository";

export class FindAnimalUseCase {
  constructor(private animalsRepository: AnimalsRepository) {}

  async execute(animalId: string) {
    const animal = await this.animalsRepository.findById(animalId);
    return animal;
  }
}