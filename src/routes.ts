import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClienteController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createClienteController = new CreateClienteController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate/",
  authenticateDeliverymanController.handle
);

routes.post("/client/", createClienteController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };
