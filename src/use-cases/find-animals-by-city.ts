import { AnimalsRepository } from "../repositories/animals-respository";
import { Animal } from "@prisma/client";
import { CityNotFoundError } from "./errors/city-not-found-error";

interface FindAnimalsByCityUseCaseRequest {
  city: string;
}

interface FindAnimalsByCityUseCaseResponse {
  animals: Animal[];
}

export class FindUAnimalsUseCase {
  constructor(private animalsRepository: AnimalsRepository) {}

  async execute({ city }: FindAnimalsByCityUseCaseRequest): Promise<FindAnimalsByCityUseCaseResponse> {
    if (!city) {
      throw new CityNotFoundError();
    }

    const animalsList = await this.animalsRepository.findAllByCity(city);

    return {
      animals: animalsList,
    };
  }
}
