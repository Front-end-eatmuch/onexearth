import logo from "./logo.svg";
import "./App.css";
// import Homepage from "./pages/homePage/Homepage";
import RouterRenderer from "./Routes";
// import Navbar from "./components/Navbar";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import routes from "./Routes";
import Mainlayout from "./container/Mainlayout";
// import RouterRenderer from "./RouterRenderer";
// import routes from "./Routes";

function App() {
	return (
		<div>
			<Mainlayout />
		</div>
	);
}

export default App;
