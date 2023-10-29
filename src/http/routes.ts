import { FastifyInstance } from "fastify";
import { register } from "./controllers/register-controller";
import { authenticate } from "./controllers/authenticate-controller";
import { registerCompany } from "./controllers/register-company-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** authenticated routes  */

  app.post('/company', registerCompany)

}