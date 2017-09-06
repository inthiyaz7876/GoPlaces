import React from 'react';
import Search from './Search';
import Grid from './Grid';
import Footer from './Footer';


class App extends React.Component
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
				<Search fun1={this.fun} />
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

export default App;