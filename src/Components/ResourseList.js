import React from "react";
import useResourses from "./useResourseFunction";

export default function ResourseList({ Resourse }) {
	const Res = useResourses(Resourse);
	return (
		<ul>
			{Res.map((d) => {
				return <li key={d.id}>{d.title}</li>;
			})}
		</ul>
	);
}
