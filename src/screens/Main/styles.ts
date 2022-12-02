import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
    flex: 1;
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    background-color: #fff;
`;

export const CountriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;