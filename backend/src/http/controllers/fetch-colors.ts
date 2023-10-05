import { makeGetColorsUseCase } from '@/use-cases/factories/make-fetch-colors-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchColors(
  request: FastifyRequest,
  reply: FastifyReply
) {
  let colors
  try {
    const getColorsUseCase = makeGetColorsUseCase()

    colors = await getColorsUseCase.execute()
  } catch (err) {
    throw err
  }
  return reply.status(200).send(colors)
}
