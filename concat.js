const concat = require("concat");
(async function build() {
    const files = [
        "./dist/app-singers-search/runtime.js",
        "./dist/app-singers-search/polyfills.js",
        "./dist/app-singers-search/main.js",                    
        "./dist/app-singers-search/scripts.js",                    
        "./dist/app-singers-search/973.js",                    
    ];
    await concat(files, "./dist/app-singers-search/singers-search.js");
})();