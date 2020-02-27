import React from 'react';
import { ScrollView, View, FlatList, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation }) => {
    return (
        <View style={{padding: 10, flex: 1,}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {
                    Object.keys(VanityData).map(key => (
                        <Card style={styles.card} onPress={ () => navigation.navigate('Instructions', { 'key':key })}>
                            <Card.Content>
                                <Image style={styles.cardcover} source={ VanityData[key].image }/>
                                <Title style={ styles.vanityProductName }>{ VanityData[key].name }</Title>
                            </Card.Content>
                        </Card>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default VanityPage;
