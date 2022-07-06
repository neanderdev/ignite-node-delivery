import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "9b693b63e5d4d00ce3e63eba5e1ebf72", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
