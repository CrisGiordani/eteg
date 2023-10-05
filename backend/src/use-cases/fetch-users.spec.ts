import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { FetchUsersUseCase } from './fetch-users'

let userRepository: InMemoryUsersRepository
let fetchUsersUseCase: FetchUsersUseCase
describe('Fetch users use case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    fetchUsersUseCase = new FetchUsersUseCase(userRepository)
  })

  it('Should be able to fetch all users', async () => {
    await userRepository.create({
      name: 'Cristian Giordani',
      email: 'cristiangiordani@gmail.com',
      cpf: '00436390035',
      color: 'Vermelho',
      obs: 'Fullstack Developer',
    })

    const { users } = await fetchUsersUseCase.execute()

    expect(users).toHaveLength(1)
    expect(users).toEqual([
      expect.objectContaining({ name: 'Cristian Giordani' }),
    ])
  })
})
