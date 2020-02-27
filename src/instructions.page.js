import React, {useState} from 'react';
import {  View, Text } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';
import { Button, Card, Title } from 'react-native-paper';

const InstructionsPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });
    const product = VanityData[route.params.key];

    const ReadDirn = () => {
        setbuttonActive({ active: 1});
        product.raw_instructions.forEach((element) => {
            Speech.speak(element);
        });
    };

    const Tutorial = () => {
        setbuttonActive({ active:3 });
    };

    return (
        <View style={styles.container}>
            <Card style={styles.cardStyles}>
                <Card.Content>
                    <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                    <Title> {product.product_name} </Title>
                    <Text> {product.brand_name} </Text>
                    <View style={styles.instructions}>
                        {
                            product.raw_instructions.map(instr => (
                                <Text style={styles.item} key={instr}>{instr}</Text>
                            ))
                        }
                    </View>
                </Card.Content>
                <Card.Actions style={{ justifyContent: 'center'}}>
                    <Icon
                        reverse
                        name='list'
                        color='black'
                        size={35}
                        onPress={() => navigation.navigate('ReadStepByStep', {'key':route.params.key})}
                    />
                     <Icon
                        reverse
                        name='play-arrow'
                        color='black'
                        size={35}
                        onPress={ReadDirn}
                    />
                </Card.Actions>
            </Card>
        </View>
    )
}

export default InstructionsPage;

