// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number
test('checks 23891 as a phone number', () => {
  expect(isPhoneNumber(23891)).toBe(false);
});
test('checks 1 as a phone number', () => {
  expect(isPhoneNumber(1)).toBe(false);
});
test('checks 123-456-7849 as a phone number', () => {
  expect(isPhoneNumber(123-456-7849 )).toBe(false);
});
test('checks 819-185-1219 as a phone number', () => {
  expect(isPhoneNumber(819-185-1219)).toBe(false);
});

// email
test('checks bob as an email', () => {
  expect(isEmail('bob')).toBe(false);
});
test('checks bill@.com as an email', () => {
  expect(isEmail('bill@.com')).toBe(false);
});
test('checks john@gmail.com as an email', () => {
  expect(isEmail('john@gmail.com')).toBe(true);
});
test('checks johndoe@gmail.com as an email', () => {
  expect(isEmail('johndoe@gmail.com')).toBe(true);
});

// strong password
test('checks bob as a password', () => {
  expect(isStrongPassword('bob')).toBe(false);
});
test('checks thisislongerthan15characters as a password', () => {
  expect(isStrongPassword('thisislongerthan15characters')).toBe(false);
});
test('strongpassword', () => {
  expect(isStrongPassword('strongpassword')).toBe(true);
});
test('checks supersecure as a password', () => {
  expect(isStrongPassword('supersecure')).toBe(true);
});

// date
test('is 1/1/2024 valid date', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('is 01/01/2024 valid date', () => {
  expect(isDate('01/01/2024')).toBe(true);
});

test('is 1/1/24 valid date', () => {
  expect(isDate('1/1/24')).toBe(false);
});

test('is 01/01/24 valid date', () => {
  expect(isDate('01/01/24')).toBe(false);
});

// hex color
test('is #FFFFFF valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('is #aaa valid hex color', () => {
  expect(isHexColor('#aaa')).toBe(true);
});

test('is #fffff valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('is #a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});