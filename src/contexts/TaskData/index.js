import React, { useState, createContext } from 'react';

export const TaskDataContext = createContext();

export const TaskDataProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  return (
    <TaskDataContext.Provider value={[taskData, setTaskData]}>
      {children}
    </TaskDataContext.Provider>
  );
};