import { hash } from "bcryptjs"
import { Animal, Company } from "@prisma/client"
import { CompaniesRepository } from "../repositories/companies-repository"
import { AnimalsRepository } from "../repositories/animals-respository"

interface CreateAnimaUseCaseRequest {
  name: string,
  age: number,
  independency: string,
  description: string,
  size: string,
  energy: number,
  companyId: string
}

interface CreateAnimalUseCaseResponse {
  animal: Animal
}

export class CreateAnimalUseCase {
  
  constructor(private animalsRepository: AnimalsRepository) {}

  async execute({
    name,
    age,
    independency,
    description,
    size,
    energy,
    companyId
  }: CreateAnimaUseCaseRequest): Promise<CreateAnimalUseCaseResponse> {
  
    // const companyWithSameName = await this.animalsRepository.findByName(name)
  
    const animal = await this.animalsRepository.create({
      name,
      age,
      independency,
      description,
      size,
      energy,
      companyId
    })

    return {
      animal,
    }
  }
}