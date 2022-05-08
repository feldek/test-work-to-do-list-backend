import { statusTasks } from '../constants';

export interface ITasks {
  id: string;
  userName: string;
  email: string;
  description: string;
  edited?: boolean | null;
  status?: statusTasks;
}
