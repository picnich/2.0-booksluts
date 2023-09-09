const eleventySass = require("eleventy-sass");
const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);

    // eleventyConfig.setPugOptions({ debug: true });

    eleventyConfig.addPassthroughCopy("./src/style.scss")
    eleventyConfig.addPassthroughCopy("./src/assets/")
    eleventyConfig.addPassthroughCopy("./src/admin");
    
    // config.addPassthroughCopy('./src/_includes/js/');


    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED)
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}