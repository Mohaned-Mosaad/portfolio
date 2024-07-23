import { createContext, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const langContext = createContext()

function App() {

	const [lang, setLang] = useState(localStorage.getItem("lang") || "en")

	return (
		<langContext.Provider value={{lang, setLang}}>
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Home/>} />
			</Routes>
		</BrowserRouter>
		</langContext.Provider>
	)
}

export default App
