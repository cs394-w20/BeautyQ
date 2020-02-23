import React, {useState} from 'react';
import {  View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';

const InstructionsPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });
    const product = VanityData[route.params.key];

    const StepByStep = (instr) => {
        if (instr.length == 0) { return; }

        setbuttonActive({ active: 2});
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
        setbuttonActive({ active: 3 });
    };

    return (
        <View style={styles.container}>
            <Image
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
                    onPress={() => StepByStep(product.sbs_instructions)} 
                    style={buttonActive.active==2? styles.pressedButton : styles.Button}>
                    <Text style={styles.buttonText}>Step-by-step</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Tutorial} style={buttonActive.active==3? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Tutorial</Text></TouchableOpacity>
            </View>            
        </View>
    )
}

export default InstructionsPage;

