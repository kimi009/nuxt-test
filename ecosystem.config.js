module.exports = {
  apps: [
    {
      name: 'NuxtTest',
      script: './server/index.js',
      time: true,
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
// 发布生产环境的时候需要考虑是否有安装新的第三方插件，
// 如果有安装第三方插件，执行顺序是 prod_mode1  prod_mode3
// 如果没有安装第三方插件，提交代码后编译就可以部署，因此执行顺序是 prod_mode2  prod_mode3
