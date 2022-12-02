import { useState } from 'react';
import { Header } from '../../components/Header';
import { Countries } from '../../components/Countries';

import { Container, CountriesContainer } from './styles';

import { countries } from '../../mocks/countries';

export function Main() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]._id);


    return (
        <Container>
            <Header />

            <CountriesContainer>
                <Countries country={selectedCountry} />
            </CountriesContainer>


        </Container>
    )
}