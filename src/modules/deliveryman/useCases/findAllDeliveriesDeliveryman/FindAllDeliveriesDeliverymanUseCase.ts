import { prismaClient } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id: string) {
    const deliveries = await prismaClient.deliveryman.findMany({
      where: { id },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}
