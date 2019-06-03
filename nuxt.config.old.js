import pkg from './package';

export default {
	mode: 'spa',

	/*
  ** Headers of the page
  */
	head: {
		title: 'Remlex Technologies',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },

	/*
  ** Global CSS
  */
	css: [
		'~/assets/css/bootstrap.css',
		'~/assets/css/bootstrap-responsive.css',
		'~/assets/css/fancybox/jquery.fancybox.css',
		'~/assets/css/jcarousel.css',
		// '~/assets/css/flexslider.css',
		'~/assets/css/style.css',
		'~/assets/skins/default.css'
	],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],

	/*
  ** Nuxt.js modules
  */
	modules: [],

	script: [
		{
			src: 'js/jquery.js'
		},
		{
			src: 'js/jquery.easing.1.3.js'
		},
		{
			src: 'js/bootstrap.js'
		},
		{
			src: 'js/jcarousel/jquery.jcarousel.min.js'
		},
		{
			src: 'js/jquery.fancybox.pack.js'
		},
		{
			src: 'js/jquery.fancybox-media.js'
		},
		{
			src: 'js/google-code-prettify/prettify.js'
		},
		{
			src: 'js/portfolio/jquery.quicksand.js'
		},
		{
			src: 'js/portfolio/setting.js'
		},
		{
			src: 'js/jquery.flexslider.js'
		},
		{
			src: 'js/jquery.nivo.slider.js'
		},
		{
			src: 'js/modernizr.custom.js'
		},
		{
			src: 'js/jquery.ba-cond.min.js'
		},
		{
			src: 'js/jquery.slitslider.js'
		},
		{
			src: 'js/animate.js'
		},
		{
			src: 'js/custom.js'
		}
	],

	/*
  ** Build configuration
  */
	build: {
		vendor: [
			'js/jquery.js',
			'js/jquery.easing.1.3.js',
			'js/bootstrap.js',
			'js/jcarousel/jquery.jcarousel.min.js',
			'js/jquery.fancybox.pack.js',
			'js/google-code-prettify/prettify.js',
			'js/portfolio/jquery.quicksand.js',
			'js/portfolio/setting.js',
			'js/jquery.flexslider.js',
			'js/jquery.nivo.slider.js',
			'js/modernizr.custom.js',
			'js/jquery.ba-cond.min.js',
			'js/jquery.slitslider.js',
			'js/animate.js',
			'js/custom.js'
		],
		extend(config, ctx) {}
	}
};
