module.exports = {
	development: {
		db: 'mongodb://localhost/passport-tut',
		app: {
			name: 'Passport Authentication Tutorial'
		},
		facebook: {
			clientID: "184289738613146",
			clientSecret: "fe3c945605b1a00345f2d0b7d0f0a4ef",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		},

		google: {
			clientID: "235211751008-ttmaq82ot8ut04f96rttq9gcdfo5q4it.apps.googleusercontent.com",
			clientSecret: "KLmzrt7rpHhv8luXnnbl9xjL",
			callbackURL: "http://localhost:3000/auth/google/callback"
		}
	},
  	production: {
    	db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		app: {
			name: 'Passport Authentication Tutorial'
		},
		facebook: {
			clientID: "",
			clientSecret: "",
			callbackURL: ""
		},
		google: {
			clientID: '',
			clientSecret: '',
			callbackURL: ''
		}
 	}
}
