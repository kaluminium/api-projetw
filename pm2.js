module.exports = {
    apps: [
        {
            name: 'app',
            script: 'src/app.js',
            env: {
                NODE_ENV: 'production',
            },
            env_file: '.env',
        },
    ],
};
