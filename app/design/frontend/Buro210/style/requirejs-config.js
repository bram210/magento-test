var config = {
	map: {
		'*': {
			matchHeight : "js/jquery.matchHeight",
			readMore : "js/jquery.readMore",
			script : "js/script",
			customResponsive : "js/customResponsive"
		}
	},
	shim: {
		'matchHeight': {
			deps: ['jquery']
		},
		'readMore': {
			deps: ['jquery']
		},
		'script': {
			deps: ['jquery']
		},
		'customResponsive': {
			deps: ['jquery']
		}
	},
	deps: [
		"js/jquery.matchHeight",
		"js/jquery.readMore",
		"js/script",
		"js/customResponsive"
	]
};