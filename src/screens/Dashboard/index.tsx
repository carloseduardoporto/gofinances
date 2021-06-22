import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlighCard } from '../../components/HighlighCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import { 
    Container,
    UserWrapper,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
  
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [{
        id: '1',
        type: 'positive',
        title: 'Desnevolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: '13/04/2020'
    },
    {
        id: '2',
        type: 'negative',
        title: 'Compra de carro',
        amount: 'R$ 8.000,00',
        category: {
            name: 'Carro',
            icon: 'coffee'
        },
        date: '25/05/2020'
    }];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/69756514?v=4'}}/>
                        <User>
                          <UserGreetings>Olá, </UserGreetings>
                          <UserName>Eduardo</UserName>
                        </User>
                    </UserInfo>
    
                    <Icon name="power" />
                </UserWrapper>
                
            </Header>
            <HighlightCards>
                <HighlighCard 
                    type="up"
                    title="Entradas" 
                    amount="17.400,00" 
                    lastTransaction="Última entrada 13 de abril"
                />
                <HighlighCard 
                    type="down"
                    title="Saídas" 
                    amount="1.259,00" 
                    lastTransaction="Última saída 3 de abril"
                />
                <HighlighCard
                    type="total" 
                    title="Total" 
                    amount="16.141,00" 
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} /> }
                />
                
                
            </Transactions>
        </Container>
    )
}

