import { FlatList } from "react-native";
import { Text } from "../Text";
import { countries } from "../../mocks/countries";

import { Player, PlayerImage, PlayerInfo } from './styles';

interface SquadProps {
    selectedCountry: string;
    selectedGroup: string;
};

export function Squad({ selectedCountry, selectedGroup }: SquadProps) {
    const country = countries.find((country) => country._id === selectedCountry && country.group === selectedGroup);

    return (
        <FlatList
            data={country?.players}
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={item => item._id}
            renderItem={({ item: player }) => (
                <Player>
                    <PlayerImage source={player?.image} />
                    <PlayerInfo>
                        <Text weight="500" style={{ lineHeight: 18 }}>{player?.name}</Text>
                        <Text size={14} color="#666" >{player?.age} anos</Text>
                        <Text size={14} color="#666">{player?.team}</Text>
                    </PlayerInfo>
                    <Text style={{ marginRight: 24 }} weight="500">{player?.position}</Text>
                </Player>
            )}
        />
    )
}