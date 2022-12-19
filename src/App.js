import React, { useState, useRef, useCallback } from "react"
import Header from "./components/Header"
import Cardgrid from "./components/Cardgrid"
import DarkMode from "./components/DarkMode"
import useFetchData from "./hooks/useFetchData"

export default function App() {
	const [query, setQuery] = useState("")
	const [page, setPage] = useState(1)
	const [data, loading, error, hasMore] = useFetchData(query, page)

	const observer = useRef()
	const lastCardRef = useCallback(cardNode => {
		if (loading) return
		if (observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore && error === null) {
			  setPage(prevPage => prevPage + 1)
			}
		  })
		  if (cardNode) observer.current.observe(cardNode)
	}, [loading, hasMore, error])

	function handleSearch(searchQuery) {
		setQuery(searchQuery)
	}

	return (
		<div>
			<Header handleSearch={handleSearch} />
			<DarkMode />
			{data && <Cardgrid data={data} ref={lastCardRef} />}
			{loading && <p style={{textAlign: "center"}}>Loading...</p>}
			{error && <p style={{textAlign: "center"}}>{error.message}</p>}
    	</div>
  	)
}
