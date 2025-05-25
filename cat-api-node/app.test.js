import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from './app.js'

describe('Cat Facts API', () => {
  describe('GET /', () => {
    it('should return in a JSON format', async () => {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('fact')
      expect(typeof response.body.fact).toBe('string')
    })

    it('shoudl return one of the defined facts', async () => {
      const catFacts = [
        'Cats sleep for 70% of their lives.',
        'A group of cats is called a clowder.',
        'Cats have five toes on their front paws, but only four on the back.',
        'A house cat can run up to 30 mph.',
        'The oldest cat lived to be 38 years old!',
      ]

      const response = await request(app).get('/')

      expect(catFacts).toContain(response.body.fact)
    })
  })
})
