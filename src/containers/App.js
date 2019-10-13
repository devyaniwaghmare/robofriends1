import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll';


/* state */
class App extends Component
{
	constructor()
	{
		super();
		this.state={
			robots:[],
			serachField: ''
		}
		
	}
	/* here we set searchFeild to what we enter in serach box*/
	componentDidMount()
	{
	   //here i fetching data from API and covert that fechted file to .json format
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(reponse=>
		{
			return reponse.json();
		})
		// here we set robots to users that we fetch from the APIs
		.then(users=>
		{
            this.setState({robots:users});
		})
		
		
	}
	onSearchChange=(event)=>
	{
		this.setState({serachField:event.target.value})
		
	}

	render() {
		/* here we comparing searchfild with robots name if they are equal then only displays that card*/

		const filterRobot=this.state.robots.filter(robots=>
		{
			return robots.name.toLowerCase().includes(this.state.serachField.toLowerCase());
		})
		//waiting till load
		if(this.state.robots.length===0)
		{
            return <h2>Loading......</h2>;
		}
		else
		{
	         return(
		      <div className='tc'>
		      <h1 className="f1" data-text="ROBOFRIENDS">ROBOFRIENDS</h1>
		      <SearchBox searchChange={this.onSearchChange}/>
		      <Scroll>
		       <CardList robots={filterRobot}/>
		       </Scroll>
		       </div>
		      );
		}
		
	}

}
export default App;