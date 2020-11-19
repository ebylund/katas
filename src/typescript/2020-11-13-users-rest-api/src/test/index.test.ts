import { expect } from 'chai'
import { main } from '..'

describe('Describe', () => {
  it('should return a string', () => {
    expect(main()).to.eq('Santa Vaca')
  })
})
