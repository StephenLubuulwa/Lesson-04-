// Styling

import * as React from 'react';
import './box-styles.css';

const smallBox = (
	<div
		className='box--small'
		style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}
	>
		small lightblue box
	</div>
);
const mediumBox = (
	<div
		className='box--medium'
		style={{ backgroundColor: 'pink', fontStyle: 'italic' }}
	>
		medium pink box
	</div>
);
const largeBox = (
	<div
		className='box--large'
		style={{ backgroundColor: 'orange', fontStyle: 'italic' }}
	>
		large orange box
	</div>
);

const Box = props => <div className='box'>{props.children}</div>;

function App() {
	return (
		<Box className='box'>
			{smallBox}
			{mediumBox}
			{largeBox}
		</Box>
	);
}

export default App;
