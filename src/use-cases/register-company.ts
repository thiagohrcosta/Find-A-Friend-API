import { hash } from "bcryptjs"
import { Company } from "@prisma/client"
import { CompaniesRepository } from "../repositories/companies-repository"

interface RegisterCompanyUseCaseRequest {
  name: string,
  address_street: string,
  address_number: number,
  address_complement: string,
  address_city: string,
  address_state: string, 
  address_zipcode: string,
  phone: string,
  userId: string
}

interface RegisterCompanyUseCaseResponse {
  company: Company
}

export class RegisterCompanyUseCase {
  
  constructor(private companiesRepository: CompaniesRepository) {}

  async execute({
    name,
    address_street,
    address_number,
    address_complement,
    address_city,
    address_state, 
    address_zipcode,
    phone,
    userId
  }: RegisterCompanyUseCaseRequest): Promise<RegisterCompanyUseCaseResponse> {
  
    const companyWithSameName = await this.companiesRepository.findByName(name)
  
    const company = await this.companiesRepository.create({
      name,
      address_street,
      address_number,
      address_complement,
      address_city,
      address_state, 
      address_zipcode,
      phone,
      userId
    })

    return {
      company,
    }
  }
}