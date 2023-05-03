import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
// const pluginWrapper = () => {
// 	require('./statics/fullpage.scrollHorizontally.min');
// };

const Fullpage = () => (
	<ReactFullpage
		// pluginWrapper={pluginWrapper}
		//fullpage options
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className='section'>
						<p>Section 1 (welcome to fullpage.js)</p>
						<button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
					</div>
					<div className='section'>
						<p>Section 2</p>
					</div>
					<div className='section'>
						<p>Section 3</p>
					</div>
					<div className='section'>
						<p>Section 4</p>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default Fullpage;
