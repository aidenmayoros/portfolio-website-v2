import React from 'react';
const Navbar = () => {
	return (
		<header className={'navbar'}>
			<div className='logo'>
				{<img src={`${process.env.PUBLIC_URL}/assets/images/logo-large.png`} className='d-inline-block align-top' alt="Aiden's website logo" />}
			</div>
			<nav className='navigation'>
				<button type='button'>
					<span>About</span>
				</button>
				<button type='button'>
					<span>Work</span>
				</button>
				<button type='button'>
					<span>Contact</span>
				</button>
			</nav>
		</header>
	);
};
export default Navbar;
