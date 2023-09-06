const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    // eleventyConfig.setPugOptions({ debug: true });

    eleventyConfig.addPassthroughCopy("./src/style.scss")
    eleventyConfig.addPassthroughCopy("./src/index.js");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}