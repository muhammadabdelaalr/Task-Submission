export const baseUrlGlobal: string = 'http://localhost:3000/';
export const baseUrl: string = baseUrlGlobal;

export enum Account {
  postLogin = 'users',
}

export enum Tasks {
  getTasks = 'tasks',
  postTask = 'tasks',
  putTask = 'tasks',
  deleteTask = 'tasks',
}

export enum status {
  getStatus = 'status',
}
