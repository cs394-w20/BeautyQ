import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation }) => {
    console.log(Object.keys(VanityData).length)
    return (
        <React.Fragment>
            <Text style={{color:'#9fa0a4'}}>{Object.keys(VanityData).length} Products</Text>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} scrollEnabled>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',marginLeft:'2.5%'}}>
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
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

export default VanityPage;
