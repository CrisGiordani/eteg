import { makeFetchUsersUseCase } from '@/use-cases/factories/make-fetch-users-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchUsers(request: FastifyRequest, reply: FastifyReply) {
  let users
  try {
    const fetchUsersUseCase = makeFetchUsersUseCase()

    users = await fetchUsersUseCase.execute()
  } catch (err) {
    throw err
  }

  return reply.status(200).send(users)
}
