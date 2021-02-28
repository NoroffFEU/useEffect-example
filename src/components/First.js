import { useState, useEffect } from "react";

function First() {
	const [greeting, setGreeting] = useState("Hello");

	useEffect(
		function () {
			console.log("useEffect called on render");
			setGreeting("Goodbye");

			return function () {
				console.log("useEffect called when cleaning up");
			};
		},
		[greeting]
	);

	return <div className="App">First component: {greeting}</div>;
}

export default First;
