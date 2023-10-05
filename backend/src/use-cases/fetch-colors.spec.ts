import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryColorsRepository } from '../repositories/in-memory/in-memory-colors-repository'
import { FetchColorsUseCase } from './fetch-colors'

let inMemoryColorRepository: InMemoryColorsRepository
let fetchColorsUseCase: FetchColorsUseCase
describe('Colors use case', () => {
  beforeEach(() => {
    inMemoryColorRepository = new InMemoryColorsRepository()
    fetchColorsUseCase = new FetchColorsUseCase(inMemoryColorRepository)
  })

  it('Should be able to fetch all colors', async () => {
    const { colors } = await fetchColorsUseCase.execute()

    expect(colors).toHaveLength(7)
    expect(colors).toEqual([
      expect.objectContaining({ color: 'Vermelho' }),
      expect.objectContaining({ color: 'Laranja' }),
      expect.objectContaining({ color: 'Amarelo' }),
      expect.objectContaining({ color: 'Verde' }),
      expect.objectContaining({ color: 'Azul' }),
      expect.objectContaining({ color: 'Ciano' }),
      expect.objectContaining({ color: 'Violeta' }),
    ])
  })
})
