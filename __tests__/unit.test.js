// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test true isPhoneNumber 1', () => {
  expect(isPhoneNumber('(714)986-4996')).toBe(true);
});
test('test true isPhoneNumber 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('test false isPhoneNumber 1', () => {
  expect(isPhoneNumber('123-986-4hj6')).toBe(false);
});
test('test false isPhoneNumber 2', () => {
  expect(isPhoneNumber('(714)abd-4996')).toBe(false);
});

test('test true isEmail 1', () => {
  expect(isEmail('elyoo@ucsd.edu')).toBe(true);
});
test('test true isEmail 2', () => {
  expect(isEmail('pineapple@yahoo.com')).toBe(true);
});
test('test false isEmail 1', () => {
  expect(isEmail('abcd@ucsd.uc.edu')).toBe(false);
});
test('test false isEmail 2', () => {
  expect(isEmail('abcd@efgh@ucsd.edu')).toBe(false);
});

test('test true isStrongPassword 1', () => {
  expect(isStrongPassword('A123')).toBe(true);
});
test('test true isStrongPassword 2', () => {
  expect(isStrongPassword('A123cdef_h12345')).toBe(true);
});
test('test false isStrongPassword 1', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});
test('test false isStrongPassword 2', () => {
  expect(isStrongPassword('A13')).toBe(false);
});

test('test true isDate 1', () => {
  expect(isDate('1/2/2026')).toBe(true);
});
test('test true isDate 2', () => {
  expect(isDate('17/38/2026')).toBe(true);
});
test('test false isDate 1', () => {
  expect(isDate('1/2/26')).toBe(false);
});
test('test false isDate 2', () => {
  expect(isDate('12/345/2026')).toBe(false);
});

test('test true isHexColor 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('test true isHexColor 2', () => {
  expect(isHexColor('#A2C')).toBe(true);
});
test('test false isHexColor 1', () => {
  expect(isHexColor('FF')).toBe(false);
});
test('test false isHexColor 2', () => {
  expect(isHexColor('#FCFF')).toBe(false);
});