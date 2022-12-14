import styled from 'styled-components/native';

interface TextProps {
    color?: string;
    size?: number;
    weight?: '400' | '500' | '600';
    opacity?: number;
}

export const Text = styled.Text<TextProps>`
    font-family: ${({ weight }) => weight ? `Qatar-${weight}` : 'Qatar-400'};
    font-size: ${({ size }) => size ? `${size}px` : '16px'};
    color: ${({ color }) => color ? color : '#333'};
    opacity: ${({ opacity }) => opacity || 1};
`
