import { Animal, Prisma } from "@prisma/client";

export interface AnimalsRepository {
  findById(id: string): Promise<Animal | null>
  findAll(): Promise<Animal[]>
  create(data: Prisma.AnimalCreateInput): Promise<Animal>
}