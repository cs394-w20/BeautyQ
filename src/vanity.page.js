import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation }) => {
    return (
        <React.Fragment>
            <Text style={styles.vanity_text}>{Object.keys(VanityData).length} Products</Text>
            <ScrollView style={styles.vanity_scroll} contentContainerStyle={{flexGrow: 1}} scrollEnabled>
                <View style={styles.vanity_view}>
                    {
                        Object.keys(VanityData).map(key => (
                            <Card style={styles.card} onPress={ () => navigation.navigate('Instructions', { 'key':key })}>
                                <Card.Content>
                                    <Image style={styles.cardcover} source={ VanityData[key].image }/>
                                    <Text style={ styles.vanityProductName }>{ VanityData[key].name }</Text>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </View>
            </ScrollView>
            <Icon
                reverse
                name='camera'
                size={35}
                containerStyle={{position:'absolute', right:15, bottom:15}}
                onPress={() => navigation.navigate('Camera')}
            />
        </React.Fragment>
    )
}

export default VanityPage;
