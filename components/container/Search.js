import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
let encoding = 'utf8';

let obj={};
class Search extends React.Component
{
	constructor(props)
	{
		super(props);
		this.search = this.search.bind(this);
		this.state = {data : null}
	}
	render(){

		return(

			<div>
			<TextField  ref='s1' hintText="Ex:Benglore,chennai" floatingLabelText="EnterCity" style={{width: '45%',marginRight:24}} />
			<TextField ref='s2' hintText="Ex:Hospital,Resturant" floatingLabelText="Enter Type" style={{ width: '45%',marginRight:8}} />
			<button onClick={this.search}>Search</button>
			</div>
			);

	}

	search()
	{
		let a = this.refs.s1.getValue();
		let b =this.refs.s2.getValue();
		let v3 =a+'&keyword='+b;
		let ur='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716,77.5946&radius=100&type='+v3+'&key=AIzaSyDpD7dgxQkHeOQizuHKAbBpFyeDnf0q734';

		
		axios.get(ur).then((response) => {
			this.setState({
				data  : response.data
			});
			let output= this.state.data.results;
			let answer =[]; 

			output.map(function(x)
			{
				obj={'photo': x.icon , 'name': x.name}
				answer.push(obj);
			});
				
		
    				this.props.fun1(answer);				
		})
		.catch( (error) => {
			console.log(error);
		});  

	}

}

export default Search;