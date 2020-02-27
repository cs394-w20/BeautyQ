import React, {useState} from 'react';
import {  View, Text } from 'react-native';
import styles from './styles';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';
import { Button, Card, Title } from 'react-native-paper';

const InstructionsPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });
    const product = VanityData[route.params.key];
    var currInstruction = 0;

    const StepByStep = (instr) => {
        if (instr.length == 0) { return; }

        setbuttonActive({ active:2 });
        Speech.speak(instr[0]['text'], {
            onDone: () => {
                Speech.pause();
                setTimeout(() => StepByStep(instr.slice(1, instr.length)), instr[0]['pause']);
            }
        })
    };

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
                <Card.Actions style={{paddingLeft: '20%'}}>
                    <Button 
                        onPress={() => navigation.navigate('ReadStepByStep', {'key':route.params.key})} 
                        style={styles.nextstep}
                        mode="contained">
                            Begin Step By Step
                        </Button>
                </Card.Actions>
            </Card>

            {/* <Image
                style={styles.productImage}
                source={product.image}
            />
            <Text style={styles.instructionsPage}>
                { product.name }
            </Text>
            <View style={styles.instructions}>
                {
                    product.raw_instructions.map(instr => (
                        <Text style={styles.item}>{instr}</Text>
                    ))
                }
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={ReadDirn} style={buttonActive.active==1? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Read Directions</Text></TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ReadStepByStep', {'key':route.params.key})} 
                    style={buttonActive.active==2? styles.pressedButton : styles.Button}>
                    <Text style={styles.buttonText}>Step-by-step</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Tutorial} style={buttonActive.active==3? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Tutorial</Text></TouchableOpacity>
            </View>             */}
        </View>
    )
}

export default InstructionsPage;

