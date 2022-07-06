import { Router } from "express";

import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClienteController";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateUser/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClienteController = new CreateClienteController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/authenticate/", authenticateClientController.handle);

routes.post("/client/", createClienteController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };
