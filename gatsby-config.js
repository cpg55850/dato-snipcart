require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		siteName: 'Kewl Sockz',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-datocms`,
			options: { apiToken: process.env.DATO_API_TOKEN },
		},
		{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.GATSBY_SNIPCART_APIKEY,
				autopop: true,
			},
		},
	],
};
