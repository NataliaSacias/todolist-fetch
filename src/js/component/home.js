import React from "react";
import Lista from "./Lista";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Lista />
		</div>
	);
}
