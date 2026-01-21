const customUrl = require('../index.js');

// --| As an example we are going to check for valid YouTube URL's
const validYoutubeLinks = [
    'https://www.youtube.com/',
    'www.youtube.com',
    'youtube.com',
    'https://www.youtube.com/watch?v=w3jLJU7DT5E',

    // --| youtu.be support
    'https://youtu.be/w3jLJU7DT5E',
    'http://youtu.be/w3jLJU7DT5E',
    'youtu.be/w3jLJU7DT5E',
    'https://youtu.be/w3jLJU7DT5E?t=42'
];

const invalidYoutubeLinks = [
    'https://www.npmjs.com/',
    'www.googl.co.uk',
    'http://google.com',
    'https://www.google.com',
    'http://www.google.com',
    'www.google.com',
    'google.com',

    // --| invalid youtu.be variations
    'https://youtu.be',
    'https://youtu.be/',
    'https://youtu.be.fake/w3jLJU7DT5E',
    'https://notyoutu.be/w3jLJU7DT5E'
];

test('Check for valid custom YouTube links', () => {
    validYoutubeLinks.forEach((url) => {
        expect(customUrl(url, 'YouTube')).toBe(true);
    });
});

test('Check for valid custom YouTube links case insensitive', () => {
    validYoutubeLinks.forEach((url) => {
        expect(customUrl(url, 'youTUBE')).toBe(true);
        expect(customUrl(url, 'YoutubE')).toBe(true);
        expect(customUrl(url, 'YOUTUBE')).toBe(true);
    });
});

test('Check for invalid custom YouTube links', () => {
    invalidYoutubeLinks.forEach((url) => {
        expect(customUrl(url, 'YouTube')).toBe(false);
    });
});

test('Check for invalid custom YouTube links case insensitive', () => {
    invalidYoutubeLinks.forEach((url) => {
        expect(customUrl(url, 'YouTube')).toBe(false);
        expect(customUrl(url, 'YoutubE')).toBe(false);
        expect(customUrl(url, 'YOUTUBE')).toBe(false);
    });
});

test('Should throw an error if url param is empty or not specified', () => {
    expect(() => { customUrl('') }).toThrow('@url parameter cannot be empty!');
    expect(() => { customUrl() }).toThrow('@url parameter cannot be empty!');
});

test('Should throw an error if filter param is empty or not specified', () => {
    expect(() => { customUrl('https://www.youtube.com/', '') }).toThrow('@filter parameter cannot be empty!');
    expect(() => { customUrl('https://www.youtube.com/') }).toThrow('@filter parameter cannot be empty!');
});

test('Should throw an error if url param is not a string', () => {
    expect(() => { customUrl(1234) }).toThrow('@url parameter must be a string!');
    expect(() => { customUrl(-123.54) }).toThrow('@url parameter must be a string!');
});

test('Should throw an error if filter param is not a string', () => {
    expect(() => { customUrl('https://www.youtube.com/', 1234) }).toThrow('@filter parameter must be a string!');
    expect(() => { customUrl('https://www.youtube.com/', -123.54) }).toThrow('@filter parameter must be a string!');
});
