export const SALT_ROUNDS = 10;
//constant which is used for hashing passwords, you can give it any value you want

export const SECRET = 'plusUltraMERN123!';
//this secret for JWT should be usually a environment variable, but for now it will stay like this
//Secret is used to encode given data for the token, in this case that will be id and email

export const ROLES = {
    QA : 'QA',
    DEVELOPER : 'Developer'
};