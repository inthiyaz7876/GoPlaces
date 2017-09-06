import React from 'react';
import ReactDom from 'react-dom';
import App from './container/App';
import Favourites from './container/Favourites';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './container/Navbar';
import App2 from './container/App2';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';	


 					class Index extends React.Component{
 						render(){
 							return(
 									<MuiThemeProvider>
 									<div>
 									<Navbar />
										{this.props.children}
										</div>
 								</MuiThemeProvider>

 							);
 						}
 					}
ReactDom.render(
              <Router history={browserHistory}>
                <Route path="/" component={Index} >   
                <IndexRoute component={App} />
                <Route path="/Home" component={App}/> 
                <Route path="/Favourites" component={App2}/>  
                </Route>         
              </Router> , document.getElementById('root'));




    
 