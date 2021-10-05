const customURL = require("../index.js");

// --| As an example we are going to check for valid YouTube URL's
const validYoutubeLinks = [
    "https://www.youtube.com/",
    "www.youtube.com",
    "youtube.com",
    "https://www.youtube.com/watch?v=w3jLJU7DT5E"
];

const invalidYoutubeLinks = [
    "https://www.npmjs.com/",
    "www.googl.co.uk",
    "http://google.com",
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "google.com"
];

test("Check for valid custom YouTube links", () => {
    validYoutubeLinks.forEach((url) => {
        expect(customURL(url, "YouTube")).toBe(true);
    });
});

test("Check for valid custom YouTube links case insensitive", () => {
    validYoutubeLinks.forEach((url) => {
        expect(customURL(url, "youTUBE")).toBe(true);
        expect(customURL(url, "YoutubE")).toBe(true);
        expect(customURL(url, "YOUTUBE")).toBe(true);
    });
});

test("Check for invalid custom YouTube links", () => {
    invalidYoutubeLinks.forEach((url) => {
        expect(customURL(url, "YouTube")).toBe(false);
    });
});

test("Check for invalid custom YouTube links case insensitive", () => {
    invalidYoutubeLinks.forEach((url) => {
        expect(customURL(url, "YouTube")).toBe(false);
        expect(customURL(url, "YoutubE")).toBe(false);
        expect(customURL(url, "YOUTUBE")).toBe(false);
    });
});

test("Should throw an error if filter param is empty", () => {
    expect(() => { customURL("https://www.youtube.com/", "") }).toThrowError("@filter parameter cannot be empty!");
    expect(() => { customURL("https://www.youtube.com/") }).toThrowError("@filter parameter cannot be empty!");
});
