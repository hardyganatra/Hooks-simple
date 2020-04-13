import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ResourseList({ Resourse }) {
	const [resourses, setResourse] = useState([]);
	useEffect(() => {
		fetchResourse(Resourse);
	}, [Resourse]);
	const fetchResourse = (Resourse) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/${Resourse}`)
			.then((res) => {
				setResourse(res.data);
			});
	};
	return <div>{resourses.length}</div>;
}
