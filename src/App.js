import React from "react";
import Meals from './components/Meals';
import Header from "./components/Header";

const App = () => {
 return (
    <>
    <Header />
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;
