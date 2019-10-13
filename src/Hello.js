/*import React from 'react';
import './Hello.css';
function Hello() {
return (
	<div className='f1 tc'>
	<h1>Hello world</h1>
	<p>{this.props.headerProp}</p>
	</div>
		);
}*/
import React, {Component} from 'react';
import './Hello.css';

/*class Hello extends Component {
   render() {
      return (
      	<div className="f1 tc">
      	<h1>Hello World</h1>
      	<p>{this.props.headerProp}</p>
      	</div>
         );
   }
}*/
const Hello=(props)=>
{
	   return (
      	<div className="f1 tc">
      	<h1>Hello World</h1>
      	<p>{props.headerProp}</p>
      	</div>
         );

}
export default Hello;