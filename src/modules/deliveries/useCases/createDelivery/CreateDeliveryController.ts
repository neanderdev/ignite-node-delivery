import { Request, Response } from "express";

import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const { item_name } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.status(201).json(result);
  }
}
