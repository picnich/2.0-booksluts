const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

const eleventySass = require("eleventy-sass");
const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.on("eleventy.before", async () => {
        await esbuild.build({
            entryPoints: ["./src/assets/scripts/main.js", "./src/assets/styles/index.scss"],
            outdir: "public/bundle",
            // outfile: "public/bundle.js",
            minify: process.env.ELEVENTY_ENV === "production",
            sourcemap: process.env.ELEVENTY_ENV !== "production",
            plugins: [sassPlugin()]
        });
    });

    eleventyConfig.addWatchTarget("./src/assets/styles/");
    eleventyConfig.addWatchTarget("./src/assets/scripts/");
    
    // eleventyConfig.addPlugin(eleventySass);

    // eleventyConfig.setPugOptions({ debug: true });

    eleventyConfig.addPassthroughCopy("./src/assets/")
    // eleventyConfig.addPassthroughCopy("./src/assets/styles/index.scss")
    // eleventyConfig.addPassthroughCopy("./src/assets/scripts")
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