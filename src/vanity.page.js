import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation }) => {
    return (
        <View>
            {
                Object.keys(VanityData).map(key => (
                    <Card onPress={ () => navigation.navigate('Instructions', { 'key':key })}>
                        <Card.Content>
                            <Card.Cover source={ VanityData[key].image }/>
                            <Title style={ styles.vanityProductName }>{ VanityData[key].name }</Title>
                        </Card.Content>
                    </Card>
                ))
            }
        </View>
    )
}

export default VanityPage;
