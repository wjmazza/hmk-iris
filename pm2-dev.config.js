module.exports = {
  apps: [{
    name: 'IRiS',
    script: 'app.js',
    exec_mode: 'fork',
    instances: 1,
    watch: [
      'app.js',
      'controllers'
    ],
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
