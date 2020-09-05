const customURL = require("../index.js");

// --| As an example we are going to check for valid YouTube URL's
const ValidYoutubeLinks =
[
    "https://www.youtube.com/",
    "www.youtube.com",
    "youtube.com",
    "https://www.youtube.com/watch?v=w3jLJU7DT5E"
];

const InvalidYoutubeLinks =
[
    "https://www.npmjs.com/",
    "www.googl.co.uk",
    "http://google.com",
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "google.com"
];

test("Check for valid custom YouTube links", () =>
{
    ValidYoutubeLinks.forEach((url) =>
    {
        expect(customURL(url, "YouTube")).toBe(true);
    });
});

test("Check for valid custom YouTube links case insensitive", () =>
{
    ValidYoutubeLinks.forEach((url) =>
    {
        expect(customURL(url, "youTUBE")).toBe(true);
        expect(customURL(url, "YoutubE")).toBe(true);
        expect(customURL(url, "YOUTUBE")).toBe(true);
    });
});

test("Check for invalid custom YouTube links", () =>
{
    InvalidYoutubeLinks.forEach((url) =>
    {
        expect(customURL(url, "YouTube")).toBe(false);
    });
});

test("Check for invalid custom YouTube links case insensitive", () =>
{
    InvalidYoutubeLinks.forEach((url) =>
    {
        expect(customURL(url, "YouTube")).toBe(false);
        expect(customURL(url, "YoutubE")).toBe(false);
        expect(customURL(url, "YOUTUBE")).toBe(false);
    });
});