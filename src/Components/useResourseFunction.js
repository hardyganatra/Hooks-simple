import { useState, useEffect } from "react";
import axios from "axios";

const useResourses = (Resourse) => {
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
	return resourses;
};
export default useResourses;
