import { io } from '../app';
import prismaClient from '../prisma';

type Request = {
  text: string;
  user_id: string;
}

export class CreateMessageService {
  async execute(data: Request) {
    const { text, user_id } = data;

    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    io.emit('new_message', message);

    return message;
  }
}
