require('dotenv').config();

const configs = {
    API: process.env.API,
    APP_NAME: process.env.APP_NAME,
    DOMAIN: process.env.DOMAIN,
    STATE: process.env.STATE,
    FB_APP_ID: '',
};

export default configs;
