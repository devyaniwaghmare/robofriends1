import React from 'react';
const SearchBox=({searchChange})=>
{
	return(
		<div className='pa2'>
		<input className='pa3 ba b-green bg-lightest-blue'
		type="serach" 
		placeholder="Serach Robots...."
		onChange={searchChange}//onChange event occurs when value of element chnaged
		/>
		
		</div>);
}
export default SearchBox;
