import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;

    justify-content: flex-end;
    align-items: center;

    padding-bottom: 19px;
    
`;
export const Form = styled.View`
    flex: 1;
    justify-content: space-between;

    width: 100%;
    padding: 24px;
`;

export const Fields = styled.View``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.shapes};
`;

export const TransactionTypes = styled.View`
    justify-content: space-between;
    flex-direction: row;

    margin-top: 8px;
    margin-bottom: 16px;
`;


