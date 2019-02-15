import React, { useState } from 'react';

import { useLocations } from '../../hooks/locations';
import { Container, Input, Options, Option } from './styles';

const Location = ({ value, onChange, placeholder }) => {
	const [searchString, setSearchString] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const { locations, isLoading } = useLocations(searchString);

	return <Container>
		<Input
			value={(value || {}).name || searchString}
			onChange={(e) => setSearchString(e.target.value)}
			onFocus={() => setShowOptions(true)}
			onBlur={() => setTimeout(() => setShowOptions(false), 200)}
			placeholder={placeholder}
		/>
		{isLoading && <span>Loading...</span>}
		{showOptions && <Options>{locations.map((item, id) => (
			<Option key={id} onClick={() => onChange(item)}>{item.name}</Option>
		))}</Options>}
	</Container>
}

export default Location;