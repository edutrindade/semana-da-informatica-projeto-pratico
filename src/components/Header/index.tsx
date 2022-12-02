import { Text } from '../Text';

import { Container, Content, AsideLeft, AsideRight } from './styles';

interface HeaderProps {
    selectedGroup: string;
};


export function Header({ selectedGroup }: HeaderProps) {

    return (
        <Container>
            <Content>
                <AsideLeft>
                    <Text size={14}>Bem-vindo(a) à</Text>
                    <Text size={20} weight="600" style={{ lineHeight: 28 }}>COPA DO MUNDO</Text>
                </AsideLeft>

                <AsideRight>
                    <Text color="#6B0524" >Grupo {selectedGroup}</Text>
                </AsideRight>
            </Content>
        </Container>
    )
}