import { Router } from "express";

import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClienteController";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateUser/AuthenticateClientController";

const routes = Router();

const createClienteController = new CreateClienteController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client/", createClienteController.handle);
routes.post("/authenticate/", authenticateClientController.handle);

export { routes };
