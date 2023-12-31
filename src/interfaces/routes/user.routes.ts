import { PrismaClient } from '@prisma/client';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../../repositories/user.repository';
import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

const prisma = new PrismaClient();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

const userRouter = (server: FastifyInstance, options: any, done: () => void) => {
  
    server.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
      await userController.index(req, reply);
      done();
  });

  server.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
      await userController.create(req, reply);
      reply.status(201).send(`user created`)
      done();
  });

  server.put<{ Params: { id: string } }>('/:id', async (req, reply) => {
      await userController.update(req, reply);
      reply.status(200).send(`user updated`);
      done();
  });

  server.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
      await userController.delete(req, reply);
      reply.status(200).send(`user deleted`);
      done();
  });

  server.post('/auth', async (req: FastifyRequest, reply: FastifyReply) => {
      await userController.login(req, reply);
      reply.status(201).send(`loggin accepted`)
      done();
  });
  done();

  server.post('/recoverPassword', async (req: FastifyRequest, reply: FastifyReply) => {
      await userController.recorverPassword(req, reply);
      reply.status(201).send(`Token enviado`)
      done();
  });
  done();

  server.post('/changePassword', async (req: FastifyRequest, reply: FastifyReply) => {
      await userController.changePassword(req, reply);
      reply.status(201).send(`Senha alterada`)
      done();
  });
  done();
};

export default userRouter;
