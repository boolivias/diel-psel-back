import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
const basename = path.basename(__filename);
const db: { [x: string]: any } = {};

const sequelize = new Sequelize('sqlite::memory:')

fs
  .readdirSync(__dirname)
  .filter((file: any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = new model.default(sequelize);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate().then(async () => {
  console.log('Connection has been established successfully.');
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
}).catch((err: any) => {
  console.log('Unable to connect to the database:', err);
});

export default db;
