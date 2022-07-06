import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveriesDeliveryman/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

import { ensureAuthenticateClient } from "./modules/middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./modules/middlewares/ensureAuthenticateDeliveryman";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.post(
  "/deliveryman/authenticate/",
  authenticateDeliverymanController.handle
);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.post(
  "/delivery/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get(
  "/delivery/available/",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);
routes.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
