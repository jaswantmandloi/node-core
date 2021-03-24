const parse = require("url").parse;

const url =  "https://www.eway.ca/en/Shopping/Search/Category/7000000?categorydescription=Eco-Friendly&filter=0&pageName=HOME&callingLocation=nav-bar&category=Category%3AEco-Friendly&page=1&sortby=&filtersby=&optionsfilter=CF_ALL";

console.log(parse(url), true)
