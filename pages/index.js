import React, { useState, useCallback } from "react";
import Location from "../components/Location";

import { Form, Button } from "./styles";

const Home = () => {
	const [origin, setOrigin] = useState({});
	const [destination, setDestination] = useState({});

	const handleSubmit = useCallback(e => {
			e.preventDefault();
			alert(`You Selected: ${(origin || {}).name}, ${(destination || {}).name}`);
		},
		[origin, destination]
	);

	return (
		<Form onSubmit={handleSubmit}>
			<Location value={origin} onChange={setOrigin} placeholder="Origin" />
			<Location value={destination} onChange={setDestination} placeholder="Destination" />
			<Button>Submit</Button>
		</Form>
	);
};

export default Home;
