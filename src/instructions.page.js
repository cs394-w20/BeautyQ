import React, {useState} from 'react';
import {  View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });

    const instructions = [
        "Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face", 
        "Allow to remain on for five to ten minutes",
        "Rinse thoroughly with warm water"
    ];

    const SBSInstructions = [
        {
            'text': "Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face",
            'pause': 5000
        },
        {
            'text': "Allow to remain on for five to ten minutes",
            'pause': 500
        },
        {
            'text': "I will set a five minute timer for you",
            'pause': 10000
        },
        {
            'text': "beep beep beep beep, your five minutes are up",
            'pause': 500
        },
        {
            'text': "Rinse thoroughly with warm water",
            'pause': 5000
        }
    ]

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
        instructions.forEach((element) => {
            Speech.speak(element);
        });
    };

    const Tutorial = () => {
        setbuttonActive({ active: 3});
    };

    return (
        <View style={styles.container}>
            <Image
            style={styles.productImage}
            source={require('../assets/images/shopping.png')}
            />
            <Text style={styles.instructionsPage}>
                Instructions for PETER THOMAS ROTH 24K Gold Mask Pure Luxury Lift & Firm Mask 
            </Text>
            <View style={styles.instructions}>
                <Text style={styles.item}>{instructions[0]}</Text>
                <Text style={styles.item}>{instructions[1]}</Text>
                <Text style={styles.item}>{instructions[2]}</Text>
            </View>            
            <View style={styles.buttons}>
                <TouchableOpacity onPress={ReadDirn} style={buttonActive.active==1? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Read Directions</Text></TouchableOpacity>
                {/* <TouchableOpacity onPress={() => StepByStep(SBSInstructions)} style={buttonActive.active==2? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Step-by-step</Text></TouchableOpacity> */}
                <TouchableOpacity onPress={ReadDirn} style={buttonActive.active==2? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Step-by-step</Text></TouchableOpacity>
                <TouchableOpacity onPress={Tutorial} style={buttonActive.active==3? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Tutorial</Text></TouchableOpacity>
            </View>            
        </View>
    )


}

export default InstructionsPage;

