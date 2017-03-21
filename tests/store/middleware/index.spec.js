/**
 * Created by tycho on 20/03/2017.
 */
import middleware, { middlewares } from 'store/middleware'

describe('(Store) Middleware', () => {
  it('Should be a function', () => {
    expect(typeof middleware).to.equal('function')
  })

  describe('Middlewares', () => {
    it('Should be a function', () => {
      expect(typeof middlewares).to.equal('function')
    })

    it('Should return a object', () => {
      expect(typeof middlewares()).to.equal('object')
    })
  })
})
