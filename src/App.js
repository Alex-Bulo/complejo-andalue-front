
import { BrowserRouter, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import './App.css';
import { AvailProvider } from './context/AvailContext';
import Footer from './GeneralFolder/FooterFolder/Footer/Footer';
import Header from './GeneralFolder/HeaderFolder/Header/Header';
import Home from './HomeFolder/Home';
// import Test from './HomeFolder/Test';
import Products from './ProductsFolder/Products';
import Location from './LocationFolder/Location';
import Contact from './ContactFolder/Contact';
import ProtectedRoute from './protectedRoutes/ProtectedRoute';
import Profile from './UserFolder/Profile';
import ProfileContainer from './UserFolder/ProfileContainer.js/ProfileContainer';
import { useInfo } from './context/InfoContext';


function App() {
  // const a = useLocation()
  var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname
  console.log(newURL);
  const {preference} = useAuth()
  const {info} = useInfo()
  return (
    info &&
        <AvailProvider>
          <BrowserRouter>
            <div className={`App ${preference.theme}`}>
                <Header/>
              
                  <Switch>
                  {/* <Route exact path='/test1' >
                      <Test/>
                    </Route> */}
                    
                    <Route exact path='/' >
                      <h4>HOLA MUNDO</h4>
                      <Home/>
                    </Route>

                    <Route path='/casas/:id?' >
                      <Products/>
                    </Route>


                    <Route exact path='/ubicacion' >
                      <Location/>
                    </Route>

                    <Route exact path='/contacto' >
                      <Contact/>
                    </Route>


                    <Route exact path='/profile' >
                      <Redirect to={{pathname:'/'}}/>
                    </Route>
      
                    <Route exact path='/profile/:id/:code' >
                      <ProtectedRoute 
                        component={ProfileContainer}
                        />

                    </Route>
                    <Route path='/profile/:id' >
                      <ProtectedRoute 
                        component={Profile}
                        />                    
                    </Route>
                    
                    <Route path='/proximamente' >
                      <h4>proximamente</h4>
                    </Route>
                    
                    <Route path='*' >
                      <h4>mi 404</h4>
                    </Route>
                    
                  </Switch> 

              <Footer/>
              
            </div>
          </BrowserRouter>
        </AvailProvider>
    
    
  );
}

export default App;
