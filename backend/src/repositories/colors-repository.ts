import { Color } from '@prisma/client'

export interface ColorsRepository {
  fetchColors(): Promise<Color[] | null>
}
