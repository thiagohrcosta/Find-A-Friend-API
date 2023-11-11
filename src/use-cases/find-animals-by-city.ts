import { AnimalsRepository } from "../repositories/animals-respository";
import { Animal, Prisma } from "@prisma/client";
import { CityNotFoundError } from "./errors/city-not-found-error";

interface FindAnimalsByCityUseCaseRequest {
  city: string;
  filters?: Prisma.AnimalWhereInput; 
}

interface FindAnimalsByCityUseCaseResponse {
  animals: Animal[];
}

export class FindUAnimalsUseCase {
  constructor(private animalsRepository: AnimalsRepository) {}

  async execute({ city, filters }: FindAnimalsByCityUseCaseRequest): Promise<FindAnimalsByCityUseCaseResponse> {
    if (!city) {
      throw new CityNotFoundError();
    }

    const animalsList = await this.animalsRepository.findAllByCity(city, filters);

    return {
      animals: animalsList,
    };
  }
}
