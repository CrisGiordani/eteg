import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>
  findByCpf(cpf: string): Promise<User | null>
  findMany(): Promise<User[] | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
