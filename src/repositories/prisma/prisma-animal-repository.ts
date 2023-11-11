import { Prisma } from "@prisma/client";

import { prisma } from "../../lib/prisma";
import { AnimalsRepository } from "../animals-respository";

export class PrismaAnimalsRepository implements AnimalsRepository{
  async findById(id: string) {
    const company = await prisma.animal.findUnique({
      where: {
        id
      },
    })

    return company
  }

  async findAllByCity(city: string, filters?: Prisma.AnimalWhereInput) {
    const companiesInCity = await prisma.company.findMany({
      where: {
        address_city: city,
      },
    });

    const companyIds = companiesInCity.map((company) => company.id);

    const animals = await prisma.animal.findMany({
      where: {
        companyId: {
          in: companyIds,
        },
        ...filters
      },
    });

    return animals;
  }
  
  async findByAge(age: number) {
    const animals = await prisma.animal.findMany({
      where: {
        age
      },
    })

    return animals
  }
  
  async create(data: Prisma.AnimalCreateInput) {
    const animal = await prisma.animal.create({
      data,
    })

    return animal
  }
}