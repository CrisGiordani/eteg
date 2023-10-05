import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function runSeed() {
  console.log('-----------------------------------------')
  console.log('Seeding initial colors...')
  await prisma.color.createMany({
    data: [
      { color: 'Vermelho' },
      { color: 'Laranja' },
      { color: 'Amarelo' },
      { color: 'Verde' },
      { color: 'Azul' },
      { color: 'Ciano' },
      { color: 'Violeta' },
    ],
  })

  console.log('Colors seeded successfully!')
  console.log('-----------------------------------------')
  console.log('Seeding initial users...')
  await prisma.user.create({
    data: {
      name: 'Cristian Giordani',
      email: 'cristiangiordani@gmail.com',
      cpf: '00436390035',
      color: 'Vermelho',
      obs: 'Fullstack Developer',
    },
  })

  console.log('Users seeded successfully!')
  console.log('-----------------------------------------')
}

runSeed()
