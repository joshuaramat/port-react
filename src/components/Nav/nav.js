import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
	return (
			<nav>
				<ul className='flex-row'>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/resume'>Resume</Link>
					</li>
				</ul>	
			</nav>
	)
}

export default Nav;