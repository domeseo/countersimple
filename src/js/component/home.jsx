import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//include images into your bundle
import SecondCounter from "./SecondCounter";

//create your first component
const Home = () => {
	return (
		<>
			<SecondCounter />
		</>
	);
};

export default Home;
