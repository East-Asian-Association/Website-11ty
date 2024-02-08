const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

  // Ignore theese files/directories when generating output
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_pages/ja");
 
  // Copy theese files/directories to output 
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("svg");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  
  // Allows the website to be served to a sub directory.
  // Define the option --pathprefix xxx when building and 
  // use the htmlBaseUrl filter in liquid to transform urls 
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  
  // Adds support for localized links with liquid filters
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en", 
    
    filters: {
      url: "locale_url",
      links: "locale_links",
    },

    errorMode: "strict", // throw an error if content is missing at /en/slug
  });
  
  // Custom sorted tag-collections 

  eleventyConfig.addCollection("all", function(collectionApi) {
    return collectionApi.getAllSorted().filter((item) => item.data.tags != "post");
  });
  eleventyConfig.addCollection("index", function(collectionApi) {
    return collectionApi.getAll().filter((item) => "topNavOrder" in item.data).sort((a, b) => a.data.topNavOrder - b.data.topNavOrder);
  });
  eleventyConfig.addCollection("about", function(collectionApi) {
    return collectionApi.getFilteredByTag("about").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("sponsors", function(collectionApi) {
    return collectionApi.getFilteredByTag("sponsors").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("events", function(collectionApi) {
    return collectionApi.getFilteredByTag("events").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("asian-studies", function(collectionApi) {
    return collectionApi.getFilteredByTag("asian-studies").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("international-students", function(collectionApi) {
    return collectionApi.getFilteredByTag("international-students").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
};
