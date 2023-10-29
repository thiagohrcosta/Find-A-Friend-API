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
  
  async create(data: Prisma.CompanyCreateInput) {
    const company = await prisma.company.create({
      data,
    })

    return company
  }
}