import sequelize from './sequelize'

async function main() {
  await sequelize.authenticate()
  console.log('Database connection successful!')
}

main()