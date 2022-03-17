import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/container/Home";
import Register from '../src/components/Auth/Register'
import Login from "./components/Auth/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register/>} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
