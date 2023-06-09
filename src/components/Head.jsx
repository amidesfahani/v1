import React from "react";
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { useLocation } from '@reach/router';

const Head = ({ title, description, image }) => {
	// const { pathname } = useLocation();

	const site = {
		siteMetadata: {
			defaultTitle: 'Amid Esfahani',
			defaultDescription: 'Full-Stack Developer',
			siteUrl: 'https://www.amid.dev',
			defaultImage: '',
			twitterUsername: 'amidesfahani'
		}
	}

	const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		// url: `${siteUrl}${pathname}`,
	};

	return (
		<HelmetProvider>
			<Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
				<html lang="en" />

				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.image} />

				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={seo.image} />
				<meta property="og:url" content={seo.url} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={twitterUsername} />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />

				<meta name="google-site-verification" content="" />
			</Helmet>
		</HelmetProvider>
	);
};

export default Head;

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
};

Head.defaultProps = {
	title: null,
	description: null,
	image: null,
};
