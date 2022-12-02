import { Container, Country, Flag } from './styles';
import { Text } from '../Text';
import { countries } from "../../mocks/countries";

interface CountriesProps {
    country: string;
    selectedGroup: string;
};

export function Countries({ country, selectedGroup }: CountriesProps) {

    return (
        <Container>
            {countries.map(item => (
                <Country key={item._id}>
                    <Flag source={item.flag} />
                    <Text size={14} weight="600" opacity={country === item._id ? 1 : 0.5}>{item.name}</Text>
                </Country>
            ))}
        </Container>
    )
}