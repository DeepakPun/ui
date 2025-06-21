import { describe, expect, test } from 'vitest'
import { sum } from '../testfunctions/sum'

describe('Adds two numbers', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
  test('adds 6 + 8 to equal 14', () => {
    expect(sum(6, 8)).toBe(14)
  })
  test('adds 11 + 16 to equal 27', () => {
    expect(sum(11, 16)).toBe(27)
  })
  test('adds 20 + 30 to equal 50', () => {
    expect(sum(20, 30)).toBe(50)
  })
  test('adds 1 + 1 to equal 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
