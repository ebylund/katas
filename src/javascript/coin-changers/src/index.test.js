const getChange = require('./index.js')
const { expect } = require('chai')

describe('coin stuff', () => {

  // it('should return 1 penny when 1 cent is the input', () => {
  //   const change = getChange(1)
  //   expect(change.penny).to.eql(1)
  // })

  // it('should return 2 pennies and 1 nickel', () => {
  //   const change = getChange(7)
  //   expect(change.penny).to.eql(2)
  //   expect(change.nickel).to.eql(1)
  // })

  // it('should return 3 pennies, 1 nickel and 1 dime', () => {
  //   const change = getChange(18)
  //   expect(change.penny).to.eql(3)
  //   expect(change.nickel).to.eql(1)
  //   expect(change.dime).to.eql(1)
  // })

  // it('should return 3 pennies and 1 quarter', () => {
  //   const change = getChange(28)
  //   expect(change.penny).to.eql(3)
  //   expect(change.quarter).to.eql(1)
  // })

  it('should return 3 pennies and 1 quarter', () => {
    const change = getChange(52)
    // expect(change.penny).to.eql(3)
    // expect(change.quarter).to.eql(1)
    expect(change.half).to.eql(1)
  })

})
