import React from "react"
import { Link } from "react-router-dom"

//Used in App.js, appears on all pages
const Nav = () => {
	return (
		<div className="navBar">
			{/* <Link className= "nav" to="/"> */}
				<div>Home</div>
			{/* </Link> */}
            {/* <Link className= "nav" to="/about"> */}
				<div>TicTacToe</div>
			{/* </Link> */}
			{/* <Link className= "nav" to="/about"> */}
				<div>About</div>
			{/* </Link> */}
		</div>
	)
}

export default Nav