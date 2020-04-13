import React, { useState } from "react";
import ResourseList from "./ResourseList";

export default function App() {
	const [Resourse, setResourse] = useState("posts");
	return (
		<>
			<button
				onClick={() => {
					setResourse("posts");
				}}
			>
				POST
			</button>
			<button
				onClick={() => {
					setResourse("todos");
				}}
			>
				TODOS
			</button>
			<ResourseList Resourse={Resourse}></ResourseList>
		</>
	);
}
