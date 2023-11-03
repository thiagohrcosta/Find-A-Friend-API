import { FastifyInstance } from "fastify";
import { register } from "./controllers/register-controller";
import { authenticate } from "./controllers/authenticate-controller";
import { registerCompany } from "./controllers/register-company-controller";
import { verifyJwt } from "./middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** authenticated routes  */

  app.post('/company', {onRequest : [verifyJwt]}, registerCompany)

}