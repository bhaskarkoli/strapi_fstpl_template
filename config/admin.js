module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '51555e691df057a179821b817f1115d7'),
  },
});
