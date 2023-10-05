import { Color } from '@prisma/client'
import { ColorsRepository } from '../colors-repository'

export class InMemoryColorsRepository implements ColorsRepository {
  public items: Color[] = [
    { id: 'color-01', color: 'Vermelho' },
    { id: 'color-02', color: 'Laranja' },
    { id: 'color-03', color: 'Amarelo' },
    { id: 'color-04', color: 'Verde' },
    { id: 'color-05', color: 'Azul' },
    { id: 'color-06', color: 'Ciano' },
    { id: 'color-07', color: 'Violeta' },
  ]

  async fetchColors() {
    const colors = this.items

    if (!colors) {
      return null
    }

    return colors
  }
}
