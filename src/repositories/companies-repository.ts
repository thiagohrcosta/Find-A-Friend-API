import { Company, Prisma } from "@prisma/client";

export interface CompaniesRepository {
  findById(id: string): Promise<Company | null>
  findByName(name: string): Promise<Company | null>
  // findByCity(city: string): Promise<Company | null>
  findListOfCities(): Promise<Record<string, string[]>>;
  create(data: Prisma.CompanyCreateInput): Promise<Company>
}