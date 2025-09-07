import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: '$2b$10$kB9icWe.prJrLHUHS2OTvOopKwltMhUEAzs5WK/a7ajOQPwkj1WrK', // Asegúrate de que este hash de la contraseña sea correcto
      rol: 'admin',
      nombre: 'Administrador',
      direccion: 'Calle Falsa 123',
      telefono: '3001234567',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log('Usuario administrador creado!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
