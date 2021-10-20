import { httpServer, io } from './app';

httpServer.listen(3333, () =>
  console.log('🚀 Server is running on http://localhost:3333')
);

io.on('connection', socket => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});
