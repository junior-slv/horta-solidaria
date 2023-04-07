import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

export default sequelize