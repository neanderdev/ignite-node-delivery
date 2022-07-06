import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prismaClient.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "9a693b63e5d4d00ce3e63eba5e1ebf72", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
