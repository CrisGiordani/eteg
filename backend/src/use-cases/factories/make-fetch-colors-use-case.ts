import { PrismaColorsRepository } from '@/repositories/prisma/prisma-colors-repository'
import { FetchColorsUseCase } from '../fetch-colors'

export function makeGetColorsUseCase() {
  const colorsRepository = new PrismaColorsRepository()
  const getColorsUseCase = new FetchColorsUseCase(colorsRepository)

  return getColorsUseCase
}
