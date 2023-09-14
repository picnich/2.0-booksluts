const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

const eleventySass = require("eleventy-sass");
const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.on("eleventy.before", async () => {
        await esbuild.build({
            entryPoints: ["./src/assets/scripts/main.js", "./src/assets/styles/index.scss", "./src/admin/js/cms.js"],
            outdir: "public/bundle",
            // outfile: "public/bundle.js",
            minify: process.env.ELEVENTY_ENV === "production",
            bundle: true,
            sourcemap: process.env.ELEVENTY_ENV !== "production",
            loader: { '.woff2': 'file', '.otf': 'file', '.ttf': 'file' },
            plugins: [sassPlugin()]
        });
    });

    eleventyConfig.addWatchTarget("./src/assets/styles/");
    eleventyConfig.addWatchTarget("./src/assets/scripts/");
    
    // eleventyConfig.addPlugin(eleventySass);

    // eleventyConfig.setPugOptions({ debug: true });

    eleventyConfig.addPassthroughCopy("./src/assets")
    // eleventyConfig.addPassthroughCopy("./src/assets/styles/index.scss")
    // eleventyConfig.addPassthroughCopy("./src/assets/scripts")
    eleventyConfig.addPassthroughCopy("./src/admin");
    
    // config.addPassthroughCopy('./src/_includes/js/');


    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED)
    })

    // eleventyConfig.addTransform("transform-name", async function(content) {
    //     console.log( "input path: ", this.inputPath, this.page.inputPath );
    //     console.log( "output path: ", this.outputPath, this.page.outputPath );
    
    //     // Eleventy 2.0+ has full access to Eleventy’s `page` variable
    //     // console.log( this.page.inputPath );
    //     // console.log( this.page.outputPath );
    
    //     return content; // no change done.
    //   });
    

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}