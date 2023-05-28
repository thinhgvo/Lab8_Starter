// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone Number Tests
test('Is phone number valid: true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Is phone number valid: true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Is phone number valid: false', () => {
    expect(functions.isPhoneNumber('!@#$%^&*(')).toBe(false);
});

test('Is phone number valid: false', () => {
    expect(functions.isPhoneNumber('abcdefghij')).toBe(false);
});

// Email Tests
test('Is the email valid: true', () => {
    expect(functions.isEmail('johndoe@gmail.com')).toBe(true);
});

test('Is the email valid: false', () => {
    expect(functions.isEmail('johndoe@ucsd.edu')).toBe(true);
});

test('Is the email valid: true', () => {
    expect(functions.isEmail('JOHNDOE@YAHOO.com.vn')).toBe(false);
});

test('Is the email valid: false', () => {
    expect(functions.isEmail('johndoe@ucsd@edu')).toBe(false);
});

// Password Tests
test('Is the password strong: true', () => {
    expect(functions.isStrongPassword('a123_456')).toBe(true);
});

test('Is the password strong: true', () => {
    expect(functions.isStrongPassword('ThisIsFine1')).toBe(true);
});

test('Is the password strong: false', () => {
    expect(functions.isStrongPassword('ABC.DEF')).toBe(false);
});

test('Is the password strong: false', () => {
    expect(functions.isStrongPassword('abcdef1234567890')).toBe(false);
});

// Date Tests
test('Is the date valid: true', () => {
    expect(functions.isDate('12/22/1999')).toBe(true);
});

test('Is the date valid: true', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});

test('Is the date valid: false', () => {
    expect(functions.isDate('12-22-1999')).toBe(false);
});

test('Is the date valid: false', () => {
    expect(functions.isDate('ab/cd/efgh')).toBe(false);
});

// Hex Colors Tests
test('Is this hex code valid: true', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('Is this hex code valid: true', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Is this hex code valid: false', () => {
    expect(functions.isHexColor('#Z12345')).toBe(false);
});

test('Is this hex code valid: false', () => {
    expect(functions.isHexColor('@000000')).toBe(false);
});