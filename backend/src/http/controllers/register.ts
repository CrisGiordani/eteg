import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from '../../use-cases/errors/user-already-exists-error'
import { makeRegisterUseCase } from '../../use-cases/factories/make-register-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.string().min(11).max(11),
    color: z.string(),
    obs: z.string(),
  })

  const { name, email, cpf, color, obs } = registerBodySchema.parse(
    request.body
  )

  try {
    const registerUseCase = makeRegisterUseCase()

    await registerUseCase.execute({
      name,
      email,
      cpf,
      color,
      obs,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ messsage: err.message })
    }

    throw err
  }

  return reply.status(201).send('Cadastro efetuado com sucesso!')
}
