import { FastifyInstance } from "fastify";
import { register } from "./controllers/register-controller";
import { authenticate } from "./controllers/authenticate-controller";
import { registerCompany } from "./controllers/register-company-controller";
import { verifyJwt } from "./middlewares/verify-jwt";
import { createAnimal } from "./controllers/create-animal-controller";
import { getAnimal } from "./controllers/get-animal-controller";
import { getAnimalsByCity } from "./controllers/get-animals-by-city-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // app.get('/animals', )
  app.get('/animals/:city', getAnimalsByCity)
  app.get('/animal/:id', getAnimal )

  /** authenticated routes  */

  app.post('/company', {onRequest : [verifyJwt]}, registerCompany)
  app.post('/:company/animal', { onRequest: [verifyJwt]}, createAnimal)

}