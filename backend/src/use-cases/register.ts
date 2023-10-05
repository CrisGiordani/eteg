import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  name: string
  email: string
  cpf: string
  color: string
  obs: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    cpf,
    color,
    obs,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)
    const userWithSameCpf = await this.usersRepository.findByCpf(cpf)

    if (userWithSameEmail || userWithSameCpf) {
      throw new UserAlreadyExistsError()
    }
    try {
      const user = await this.usersRepository.create({
        name,
        email,
        cpf,
        color,
        obs,
      })

      return {
        user,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
