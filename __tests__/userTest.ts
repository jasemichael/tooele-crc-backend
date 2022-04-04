import request from 'supertest'
import { server } from '../src/server'
describe('userTest', () => {
  describe('get users', () => {
    beforeAll(() => {

    })
    it('retreives all users', () => {
      request(server).get('/users').expect([])
    })
  })
})
