import prismaClient from '../prisma';

type Request = {
  user_id: string;
};

export class GetUserProfileService {
  async execute(data: Request) {
    const { user_id } = data;

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return user;
  }
}
