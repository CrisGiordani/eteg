import { FastifyInstance } from 'fastify'
import { fetchColors } from './controllers/fetch-colors'
import { fetchUsers } from './controllers/fetch-users'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.get('/users', fetchUsers)
  app.get('/colors', fetchColors)
}
