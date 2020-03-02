import React, {useState} from 'react';
import {  View, Text, Fragment } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';
import { Button, Card, Title, ToggleButton } from 'react-native-paper';

const InstructionsPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });
    const [descriptionToggle, setDescriptionToggle] = useState( true );
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

    const ToggleButtons = () => {
        return (
            <Card.Actions>
                <Button 
                    disabled={descriptionToggle} 
                    style={{width: "58%", marginLeft: '-8%', height: "50px"}}
                    mode="contained"
                    onPress={() => setDescriptionToggle(true)}>
                    Description</Button>
                <Button 
                    disabled={!descriptionToggle} 
                    mode="contained" 
                    style={{float: 'right', marginLeft: '0px', width: "58%", height: "50px"}}
                    onPress={() => setDescriptionToggle(false)}>
                        Instructions</Button>
            </Card.Actions>
        );
    };

    const InstructionItemHeader = () => {
        return (
            <View>
                <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                <Title> {product.product_name} </Title>
                <Text> {product.brand_name} </Text>
            </View>
        );
    };

    if (!descriptionToggle)
        return (
            <View style={styles.container}>
                <Card style={styles.cardStyles}>
                    <Card.Content>
                        <InstructionItemHeader />
                        <ToggleButtons/>
                        <View style={styles.instructions}>
                            {
                                product.raw_instructions.map((instr,ind) => (
                                <Text style={styles.item} key={instr}>Step {ind + 1}: {instr}</Text>
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

    return (
        <View style={styles.container}>
            <Card style={styles.cardStyles}>
                <Card.Content>
                    <InstructionItemHeader />
                    <ToggleButtons/>
                    <View style={styles.instructions}>
                        <Text>{ product.description }</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

export default InstructionsPage;

