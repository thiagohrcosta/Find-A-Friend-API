import { Prisma } from "@prisma/client";

import { prisma } from "../../lib/prisma";
import { CompaniesRepository } from "../companies-repository";

export class PrismaCompaniesRepository implements CompaniesRepository{
  async findById(id: string) {
    const company = await prisma.company.findUnique({
      where: {
        id
      },
    })

    return company
  }
  
  async findByName(name: string) {
    const company = await prisma.company.findFirst({
      where: {
        name
      },
    })

    return company
  }

  async findListOfCities() {
    const citiesByState = await prisma.company.groupBy({
      by: ["address_state", "address_city"],
    });
  
    const result: Record<string, string[]> = {};
  
    citiesByState.forEach((entry) => {
      const state = entry.address_state;
      const city = entry.address_city;
  
      if (!result[state]) {
        result[state] = [];
      }
  
      result[state].push(city);
    });
  
    return result;
  }
  

  async create(data: Prisma.CompanyCreateInput) {
    const company = await prisma.company.create({
      data,
    })

    return company
  }
}