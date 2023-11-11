import { Animal, Prisma } from "@prisma/client";

export interface AnimalsRepository {
  findById(id: string): Promise<Animal | null>
  findAllByCity(city: string, filters?: Prisma.AnimalWhereInput): Promise<Animal[]>;
  create(data: Prisma.AnimalCreateInput): Promise<Animal>
}