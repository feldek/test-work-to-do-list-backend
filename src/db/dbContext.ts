import { Sequelize } from 'sequelize';
import { settingsProvider } from '../utils';
import { InitEntities } from './initEntities';

class DbContext {
  public sequelize: Sequelize;
  private sslConfig =
    process.env.NODE_ENV === 'production'
      ? {
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      : undefined;

  constructor() {
    const settings = settingsProvider.getDatabaseSettings();
    this.sequelize = new Sequelize(settings.database, settings.username, settings.password, {
      host: settings.host,
      port: settings.port,
      dialect: settings.dialect,
      ...this.sslConfig,
    });
    InitEntities.init(this.sequelize);
  }

  public async connect(): Promise<void> {
    await this.sequelize.authenticate();
  }

  public async disconnect(): Promise<void> {
    await this.sequelize.close();
  }
}

export const dbContext = new DbContext();
