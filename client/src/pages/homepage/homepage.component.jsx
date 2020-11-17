import React from 'react';

import {
    HomepageContainer,
    Select,
    Option,
    Button
} from './homepage.styles';

const HomePage = () => {
    return (
        <HomepageContainer>
            <Select>
                <Option value="mazowieckie">Mazowieckie</Option>
                <Option value="lubelskie">Lubelskie</Option>
            </Select>
            <Button>Zacznij Rozmowę</Button>
        </HomepageContainer>
    );
}

export default HomePage;