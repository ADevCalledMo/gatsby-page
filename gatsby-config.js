module.exports = {
  siteMetadata: {
    title: "A Blog From Mozes",
    author: 'Mozes Walker'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src', 
        path: `${__dirname}/src`
      }
    }
  ],
};
