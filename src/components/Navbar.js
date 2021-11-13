import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<nav class="navigator">
				<h4 class="title">Vijay Tembugade</h4>
				<div class="div-nav">
					<Link class="link" to="/" >About</Link>
					<Link class="link" to="/">Projects</Link>
					<Link class="link" to="/">Blogs</Link>
					<Link class="link" to="/">Contact</Link>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
