module.exports = function(eleventyConfig) {
  // 画像などをそのままコピーする設定（どこにあってもOKな書き方に変更）
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.css");

  return {
    dir: {
      input: ".",
      output: "_site",
      // ここを直下の _includes に変更
      includes: "_includes" 
    }
  };
};