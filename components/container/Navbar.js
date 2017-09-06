import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';



class Navbar extends React.Component{
	render()
	{
		return(
				
		 <AppBar  title='Go Places'>

		 
          
		 <Link to='/Favourites'><RaisedButton label="favourites"  onClick={this.fav} default={true} style ={{height:50,height:40,marginTop:12,marginRight :5}} /></Link>
		 <Link to='/Home'><RaisedButton label="Home" default={true} style ={{height:50,height:40,marginTop:12} }  /></Link> 

		 	
    	</AppBar>

	     
			);
	}
	

}
export default Navbar;



