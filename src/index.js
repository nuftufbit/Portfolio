import React from 'react';
import ReactDOM from 'react-dom/client';
//import FluidGrid from 'react-fluid-grid'
import Header from './header.js'
import Element from './element'
import "./style.css"

const myPage = <div>
  <Header/>
  <div class="fluid_container">
  <fluidgrid>
  <Element projekti="testi"
  image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  text="thinggngngn"
  link="https://unity.com"/>
  <Element projekti="testi 2"
  image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bG92ZSUyMHBpY3xlbnwwfHx8fDE2ODA2MTc2ODM&ixlib=rb-4.0.3&q=80&w=1080"
  text="som"
  link="https://unity.com"/>
  </fluidgrid>
  </div>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);