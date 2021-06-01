const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "My personal website",
    author: "Author of website",
    description: "Website gatsby starter, with tailwind, and php contact form.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Website gatsby starter, responsive, with tailwind, fontawesome, and php contact form.",
        short_name: "Website gatsby starter, with tailwind, and php contact form.",
        start_url: "/",
        background_color: theme.colors.primary[100],
        theme_color: theme.colors.primary[50],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    "gatsby-plugin-fontawesome-css"
    
  ],
}
