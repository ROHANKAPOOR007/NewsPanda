import './App.css';
import NavBar from './Components/NavBar';
import React, { Component } from 'react'
import News from './Components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <>

        <div>
          <Router>

            <NavBar/>

            <Routes>
              <Route exect path="/" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "general"
                  key = "general"
                />

              }/>

              <Route exect path="/business" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "business"
                  key = "business"
                />

              }/>

              <Route exect path="/entertainment" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "entertainment"
                  key = "entertainment"
                />

              }/>

              <Route exect path="/health" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "health"
                  key = "health"
                />

              }/>

              <Route exect path="/science" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "science"
                  key = "science"
                />

              }/>

              <Route exect path="/technology" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "technology"
                  key = "technology"
                />

              }/>

              <Route exect path="/sports" element={

                <News 
                  pageSize = {6} 
                  country = "in" 
                  category = "sports"
                  key = "sports"
                />

              }/>
              
          </Routes>

          </Router>
        </div>

      </>
    )
  }
}
