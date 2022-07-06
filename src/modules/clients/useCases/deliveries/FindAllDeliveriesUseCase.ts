import { prismaClient } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(id: string) {
    const deliveries = await prismaClient.clients.findMany({
      where: { id },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}
