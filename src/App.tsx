import React, { useState, useEffect } from 'react';
import {kaleidoscopeAppContext} from './context/city-context';
import { Api, KaleidoscopeData } from './api/graphql-kaleidoscope';
import LandingPage from './components/LandingPage';

function App() {

  const [data, setData] = useState<KaleidoscopeData | object>({})

  const getKaleidoscopeData = async() =>{
    const data =  await Api.getKaleidoscopeData();
    setData(data)
  }

  useEffect(() => { 
      getKaleidoscopeData();
    return () => {
      
    }
  }, [])


  return (
    <kaleidoscopeAppContext.Provider value={{
      KaleidoscopeData: data 
    }}>
      <LandingPage />
    </kaleidoscopeAppContext.Provider>
  );
}

export default App;
