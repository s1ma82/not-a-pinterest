module.exports = {
	images: {
		domains: ["images.unsplash.com"],
	},
	env: {
		UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
		UNSPLASH_SECRET_KEY: process.env.UNSPLASH_SECRET_KEY,
		PORT: process.env.PORT,
		SITE_URL: process.env.SITE_URL,
		API_PATHS: {
			pinGenerate: process.env.PIN_GENERATE_API,
			randomPhotos: process.env.RANDOM_PHOTOS_API,
		},
	},
};
