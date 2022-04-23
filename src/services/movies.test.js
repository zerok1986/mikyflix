import { checkIsResponse } from './movies'
import { expect, it, describe } from 'vitest'

describe('checkIsResponseOk', () => {
  it('should return true if response is ok', () => {
    const res = { Response: 'True' }
    expect(checkIsResponse(res)).toBe(true)
  })

  it('should return false if response is NOT', () => {
    const res = { Response: 'False' }
    expect(checkIsResponse(res)).toBe(false)
  })

  it('should return false if there is not response', () => {
    const res = {}
    expect(checkIsResponse(res)).toBe(false)
  })
})
