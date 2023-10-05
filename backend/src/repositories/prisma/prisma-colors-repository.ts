import { prisma } from '@/lib/prisma'
import { ColorsRepository } from '../colors-repository'

export class PrismaColorsRepository implements ColorsRepository {
  async fetchColors() {
    const colors = await prisma.color.findMany()

    return colors
  }
}
