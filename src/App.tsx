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
                  <Route   path ="/" element={<HomePage/>}/>
                  <Route  path ="/exchanges" element={<Exchanges/>}/>
                  <Route  path ="/cryptocurrencies" element={ <CryptoCurrencies/>}/>
                  <Route  path ="/crypto/:coinid"  element={ <CryptoDetail/>}/>
                  <Route  path ="/news"  element={ <News/>}/>
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
