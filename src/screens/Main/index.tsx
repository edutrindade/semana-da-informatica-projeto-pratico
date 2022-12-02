import { useState } from 'react';
import { Header } from '../../components/Header';
import { Countries } from '../../components/Countries';

import { Container, CountriesContainer, Footer, FooterContainer, SquadContainer } from './styles';

import { countries } from '../../mocks/countries';
import { Button } from '../../components/Button';
import { Alert } from 'react-native';

export function Main() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]._id);


    return (
        <Container>
            <Header />

            <CountriesContainer>
                <Countries country={selectedCountry} />
            </CountriesContainer>

            <SquadContainer>

            </SquadContainer>

            <Footer>
                <FooterContainer>
                    <Button title="Ver outro grupo" onPress={() => Alert.alert("Você clicou no botão")} />
                </FooterContainer>
            </Footer>

        </Container>
    )
}