import React from "react";
import { Line } from "./index.jsx";

class App extends React.Component {
	componentDidMount() {
		console.log("updated");
	}
	render() {
		return <Line x0={100} y0={150} x1={450} y1={550} progress={70} borderWidth={6} />;
	}
}

export default App;
