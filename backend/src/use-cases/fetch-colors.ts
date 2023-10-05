import { Color } from '@prisma/client'
import { ColorsRepository } from '../repositories/colors-repository'

interface FetchColorsUseCaseResponse {
  colors: Color[] | null
}

export class FetchColorsUseCase {
  constructor(private colorsRepository: ColorsRepository) {}

  async execute(): Promise<FetchColorsUseCaseResponse> {
    try {
      const colors = await this.colorsRepository.fetchColors()

      return {
        colors,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
