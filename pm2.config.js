module.exports = {
  apps: [{
    name: 'IRiS',
    script: 'app.js',
    exec_mode: 'cluster',
    instances: 0,
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
