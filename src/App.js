import React from "react"
import Header from "./components/Header"
import Cardgrid from "./components/Cardgrid"
// import Footer from "./components/Footer"

import data from "./dummy_data"

export default function App() {
	return (
		<div>
			<Header />
			<Cardgrid data={data.results} />
			{/* <Footer /> */}
    	</div>
  	)
}
