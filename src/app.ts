import fastify from "fastify";
import { register } from "./http/controllers/register-controller";
import { appRoutes } from "./http/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET
})

app.register(appRoutes)
