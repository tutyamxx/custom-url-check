# check-custom-url
* 🐜 Simple NPM package to check if a string is valid and a specific community URL!
* Check if a string is a custom community URL that you want!

# Install via NPM

`$ npm i check-custom-url `

# Usage

```javascript
CheckCustomURL(url, filter);
```

# Example

```javascript
const CheckCustomURL = require("check-custom-url");

// --| The below URL is not a valid YouTube URL
CheckCustomURL("https://www.google.com", "YouTube");

// --| The below URL is a valid YouTube URL
CheckCustomURL("https://www.youtube.com/", "YouTube");
```