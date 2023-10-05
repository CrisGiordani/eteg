import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/users-repository'

interface FetchUsersUseCaseResponse {
  users: User[] | null
}

export class FetchUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<FetchUsersUseCaseResponse> {
    try {
      const users = await this.usersRepository.findMany()

      return {
        users,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
