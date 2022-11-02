import React from 'react';

export interface iTasksContext {
  task: ITask[];
  addTask(task: ITask): void;
}

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}

interface IProps {
  children: React.ReactElement;
}

export const TasksContext = React.createContext<iTasksContext>(defaultValue: iTasksContext);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const addTask = (task: ITask) => {
    console.log('addTask action ', task.title);
  };

  const tasks: ITask[] = [{id: '1', title: 'Comprar pão', done: false}];

  return (
    <TasksContext.Provider value={{tasks, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};
