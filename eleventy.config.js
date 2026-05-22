import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('_site');

	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/css/');
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/m-bulletins/');
	eleventyConfig.addPassthroughCopy('src/m-pdf/');

	eleventyConfig.addPlugin(HtmlBasePlugin);

};

export const config = {
	// dataTemplateEngine: 'njk', // in original course, needed?
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',

	pathPrefix: "gandycoc",

};
