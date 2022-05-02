import React  from 'react'
import './Normalize.css';
import "./App.scss";
import { BrowserRouter  } from 'react-router-dom'
import Routing from "./routes/Routing";
import Header from "./components/header/Header";
import { ContextProvider } from 'contexts/Context';

const App = () => {
  return (
    <>
    <ContextProvider>
        <BrowserRouter>
            <Header />
            <main>
              <Routing />
            </main>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
