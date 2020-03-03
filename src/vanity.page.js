import React from 'react';
import { ScrollView, Text, FlatList, Image, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
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
            </ScrollView>
            <Icon
                reverse
                name='camera'
                color='black'
                size={35}
                onPress={() => navigation.navigate('Camera')}
            />
        </View>
    )
}

export default VanityPage;
