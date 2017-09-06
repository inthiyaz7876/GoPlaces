import React from 'react';
import Search from './Search';
import Grid from './Grid';
import Footer from './Footer';
import Favourites from './Favourites';


class App2 extends React.Component
{
	constructor(props)
	{

	super(props);
	this.fun=this.fun.bind(this)
	this.state={
		arr:[]
	}	
	}
	render()
	{
		return (
				<div>
				
				<Favourites  data1={this.state.arr} />
				<Grid  data1={this.state.arr} />  
				<Footer />
				</div>

				);
	}
	fun(y)
	{
       this.setState({arr:y});
       console.log(this.state.arr)
	}
}

export default App2;