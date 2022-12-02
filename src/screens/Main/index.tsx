import { useState } from 'react';
import { Header } from '../../components/Header';
import { Countries } from '../../components/Countries';

import { Container, CountriesContainer, Footer, FooterContainer, SquadContainer } from './styles';

import { countries } from '../../mocks/countries';
import { Button } from '../../components/Button';
import { Alert } from 'react-native';
import { Squad } from '../../components/Squad';

export function Main() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]._id);
    const [selectedGroup, setSelectedGroup] = useState('G');

    return (
        <Container>
            <Header selectedGroup={selectedGroup} />

            <CountriesContainer>
                <Countries country={selectedCountry} selectedGroup={selectedGroup} />
            </CountriesContainer>

            <SquadContainer>
                <Squad selectedCountry={selectedCountry} selectedGroup={selectedGroup} />
            </SquadContainer>

            <Footer>
                <FooterContainer>
                    <Button title="Ver outro grupo" onPress={() => Alert.alert("Você clicou no botão")} />
                </FooterContainer>
            </Footer>

        </Container>
    )
}