const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = '';
const DB_PASSWORD = '';
const DB_NAME = '';

module.exports = {
    MONGODB_URI : `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-gfqrh.mongodb.net/${DB_NAME}`
};