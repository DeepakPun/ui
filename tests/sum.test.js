import { describe, expect, test } from 'vitest'
import { sum } from '../testfunctions/sum'

describe('Adds two numbers', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
  test('adds 6 + 8 to equal 14', () => {
    expect(sum(100, 800)).toBe(900)
  })
})
