import React  from 'react'
import './Normalize.css';
import "./App.scss";
import { BrowserRouter  } from 'react-router-dom'
import Routing from "./routes/Routing";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main>
            <Routing />
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;
