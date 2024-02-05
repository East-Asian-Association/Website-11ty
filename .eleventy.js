const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_pages/ja");

  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("svg");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en", 
    
    filters: {
      url: "locale_url",
      links: "locale_links",
    },

    errorMode: "strict", // throw an error if content is missing at /en/slug
  });

  /* Custom sorted tag-collections */

  eleventyConfig.addCollection("all", function(collectionApi) {
    return collectionApi.getAllSorted( ).filter((item) => item.data.tags != "post");
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
  eleventyConfig.addCollection("asia-studies", function(collectionApi) {
    return collectionApi.getFilteredByTag("asia-studies").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("international-students", function(collectionApi) {
    return collectionApi.getFilteredByTag("international-students").filter((item) => "sideNavOrder" in item.data).sort((a, b) => a.data.sideNavOrder - b.data.sideNavOrder);
  });
  eleventyConfig.addCollection("index", function(collectionApi) {
    return collectionApi.getAll().filter((item) => "topNavOrder" in item.data).sort((a, b) => a.data.topNavOrder - b.data.topNavOrder);
  });
};