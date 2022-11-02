import React from 'react';

export interface iTasksContext {
  tasks: ITask[];
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

const DEFAULT_CONTEXT: iTasksContext = {
  tasks: [],
  addTask: () => {},
};

export const TasksContext = React.createContext<iTasksContext>(DEFAULT_CONTEXT);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const addTask = (task: ITask) => {
    console.log('addTask action ', task.title);
  };

  const tasks: ITask[] = [];

  return (
    <TasksContext.Provider value={{tasks, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};
