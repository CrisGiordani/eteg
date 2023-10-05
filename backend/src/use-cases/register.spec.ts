import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterUseCase } from './register'

let inMemoryUserRepository: InMemoryUsersRepository
let registerUseCase: RegisterUseCase
describe('Register use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUsersRepository()
    registerUseCase = new RegisterUseCase(inMemoryUserRepository)
  })

  it('Should be able to register', async () => {
    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      cpf: '00011122234',
      color: 'vermelha',
      obs: 'Teste..',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should not able to register with an email already used', async () => {
    const email = 'johndoe2@example.com'

    await registerUseCase.execute({
      name: 'John Doe 1',
      email,
      cpf: '00011122234',
      color: 'vermelha',
      obs: 'Teste..',
    })

    await expect(() =>
      registerUseCase.execute({
        name: 'John Doe 2',
        email,
        cpf: '11122233345',
        color: 'azul',
        obs: 'Teste..',
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
