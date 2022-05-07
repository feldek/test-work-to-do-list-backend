import { Sequelize } from 'sequelize/types';

import { init as initTasksEntity } from './entities/TasksEntity';

export class InitEntities {
  static init(sequelize: Sequelize) {
    initTasksEntity(sequelize);
    // relations
  }
}
