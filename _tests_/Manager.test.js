// test for name, id, email, and office

const { testResult } = require('@jest/types');

const Manager = require('../lib/Manager');
const { number } = require('yargs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

// test for name, email, id, and role validity

// passed test

// const testManager = new Manager('Joe', 'jaortisi@gmail.com', 6, 'manager', 6)

// failed test

const testManager = new Manager('J', 'jaortisi@gmai.com', 6, 'employee', 'jaortisi6')

test('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})

test('has a valid email', () => {
    expect(testManager.email).toEqual(expect.stringContaining('@'))
})

test('has a role of manager', () => {
    expect(testManager.role).toBe('manager')
})

test('ID has a value', () => {
    expect(testManager.id).toEqual(expect.any(Number))
})

test('entered an office', () => {
    objectKeys = Object.keys(testManager)
    keyGH = objectKeys[4]

    expect(keyGH).toBe('office')

    expect(testManager.office).toEqual(expect.any(Number))
})