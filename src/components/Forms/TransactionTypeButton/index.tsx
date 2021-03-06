import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Icon,
    Title,
} from './styles';

const icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle"
}

interface TransactionButtonProps extends RectButtonProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export function TransactionTypeButton({ title, type, isActive,  ...rest}: TransactionButtonProps) {
    return (
        <Container 
            isActive={isActive}
            type={type}
            {...rest} 
        >
            <Icon
                name={icons[type]}
                type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    );
}