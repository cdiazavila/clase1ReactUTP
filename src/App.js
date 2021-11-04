import React, { Fragment,useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
function App() {
 const [datos, setdatos] = useState('')
 console.log(datos)
  return (
    <Fragment>
      <Header datos={datos}/>
      <Login setdatos={setdatos}/>
      <Footer/>


    </Fragment>


  );
}

export default App;
