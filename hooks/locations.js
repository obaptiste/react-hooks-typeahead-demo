import { useState, useEffect } from "react";
import { getLocations } from "../apis/locations";

export const useLocations = searchString => {
	const [locations, setLocations] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const debounced = setTimeout(() => {
			getLocations(searchString).then(({ data }) => {
					setLocations(data);
					setLoading(false);
				})
				.catch(e => {
					setLoading(false);
				});
		}, 300);

		return () => {
			clearTimeout(debounced);
		};
	}, [searchString]);

	return { locations, isLoading };
};
