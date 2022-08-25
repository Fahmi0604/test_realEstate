import React, {useState, createContext} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [location, setlocation] = useState('Jakarta Utara');
  const [type, settype] = useState('Home');
  const [status, setstatus] = useState('Rent');

  return (
    <DataContext.Provider
      value={{
        location,
        setlocation,
        type,
        settype,
        status,
        setstatus,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
