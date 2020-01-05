// next.config.js
const withSass = require('@zeit/next-sass');
const config={
    serverRuntimeConfig: {
        // Will only be available on the server side
        //mySecret: 'secret',
        //secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: { // Will be available on both server and client
        API_DOMAIN: process.env.API_DOMAIN
    }
};
module.exports = withSass(config);
