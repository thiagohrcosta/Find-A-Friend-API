
![Find A friend API](https://res.cloudinary.com/dloadb2bx/image/upload/v1698285034/Capa_gu3hka.png)


![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)

## Overview

The Find a Friend API is a Node.js and TypeScript-based project developed as part of the Rocketseat NodeJS course. Its primary goal is to provide a robust RESTful API with full CRUD operations, user authentication via JWT, and containerization using Docker.  

### Key Technologies

-  **NodeJS**: The project leverages Node.js for building a high-performance, event-driven server.

-  **Typescript**: TypeScript is used to enhance code reliability and maintainability.

-  **Prisma**: Prisma is employed for type-safe and efficient database interactions, eliminating the need for raw SQL.

-  **Docker**: Docker containerization streamlines deployment and ensures consistent runtime environments.

-  **Fastify**: Fastify serves as the web framework to deliver a lightweight, high-speed API.

## Functionality

The API serves two main user groups:

1.  **Company Portal**: Organizations and animal shelters can securely log in and add information about animals available for adoption to the database. This facilitates the process of connecting animals with potential owners.

2.  **User Portal**: Individuals interested in adopting a pet can create user accounts and search for animals available for adoption in their vicinity.

## Docker Compose Configuration

To deploy the Find a Friend API, you can utilize Docker Compose with the following configuration:

  

    version: '3'
    
    services:
    
    find-friend-api:
    
    image: bitnami/postgresql
    
    ports:
    
    - 5432:5432
    
    environment:
    
    - POSTGRESQL_USERNAME=docker
    
    - POSTGRESQL_PASSWORD=docker
    
    - POSTGRESQL_DATABASE=findfriendapi

This configuration sets up a PostgreSQL database container for your API.

## Environment Configuration

For environment configuration, you can create a `.env.example` file. Below is an example of the file's content:

    NODE_ENV=dev
    
    JWT_SECRET=*********
    
    DATABASE_URL="postgresql://user:password@localhost:5432/findfriendapi?schema=public"  

### Fastify JWT

- [Fastify JWT documentation](https://github.com/fastify/fastify-jwt)

### Application Rules

[X] It should be possible to register a pet.<br>

[ ] It should be possible to list all pets available for adoption in a city. <br>

[ ] It should be possible to filter pets by their characteristics. <br>

[ ] It should be possible to view details of a pet for adoption. <br>

[X] It should be possible to register as an organization (ORG). <br>

[X] It should be possible to log in as an organization (ORG). <br>

### Business Rules

[ ] To list pets, it is mandatory to provide the city. <br>

[X] An organization (ORG) needs to have an address and a WhatsApp number. <br>

[ ] A pet must be linked to an organization (ORG). <br>

[ ] The user who wants to adopt will contact the organization (ORG) via WhatsApp. <br>

[ ] All filters, apart from the city, are optional. <br>

[ ] For an organization (ORG) to access the application as an admin, they need to be logged in. <br>

## How to run this project

Prisma
npx prisma generate
npx prisma migrate dev