module.exports = {
    siteMetadata: {
        title: `Newport Motors`,
        description: `Used cars and trucks.`,
        author: `DealerClick Software / @roarinlion`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `newport-motors`,
                short_name: `nm-cars`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-offline`,
    ],
}
