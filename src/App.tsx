import React from 'react';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import {Layout,Typography,Space, } from 'antd';
import {NavBar,HomePage,Exchanges,CryptoCurrencies,CryptoDetail,News} from './components'
const App =()=>{
   return (
   <div className="app">
       <div className="navbar">
        <NavBar/>
       </div>
       < div className="main">
         <Layout>
            <div className="routes">
              <Routes>
                  <Route  path ="/">
                      <HomePage/>
                  </Route>
                  <Route  path ="/exchanges">
                      <Exchanges/>
                  </Route>
                  <Route  path ="/cryptocurrencies">
                      <CryptoCurrencies/>
                  </Route>
                  <Route  path ="/crypto/:coinid">
                      <CryptoDetail/>
                  </Route>
                  <Route  path ="/news">
                      <News/>
                  </Route>
              </Routes>
            </div>
         </Layout>
       </div>
       <div className="footer">

       </div>
   </div>
   );
}
export default App;
