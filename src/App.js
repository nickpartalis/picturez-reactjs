import React, { useState } from "react"
import Header from "./components/Header"
import Cardgrid from "./components/Cardgrid"
// import Footer from "./components/Footer"
import useFetchData from "./hooks/useFetchData"

export default function App() {
	const [query, setQuery] = useState("")
	const [page, setPage] = useState(1)
	const [data, loading, error] = useFetchData(query, page)

	function handleSearch(searchQuery) {
		setQuery(searchQuery)
	}

	return (
		<div>
			<Header handleSearch={handleSearch} />
			{data && <Cardgrid data={data} />}
			{loading && <p style={{textAlign: "center"}}>Loading...</p>}
			{error && <p style={{textAlign: "center"}}>{error.message}</p>}
			{/* <Footer /> */}
    	</div>
  	)
}
