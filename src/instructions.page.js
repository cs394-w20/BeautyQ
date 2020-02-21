import React, {useState} from 'react';
import {  View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 0 });

    const speak = async (text, time) => {
        setTimeout(() => {
            Speech.pause();
        }, time);

        setTimeout(() => {
            Speech.resume();
            Speech.speak(text);
        }, time);
        return null;
    }

    const instructions = [
        "Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face", 
        "Allow to remain on for five to ten minutes",
        "Rinse thoroughly with warm water"
    ];

    const Speak = () => {
        setbuttonActive({ active: 2});
        Speech.speak(instructions[0], {onDone:() => {
            setTimeout(() => {
                Speech.speak(instructions[1], {onDone:()=> {
                    Speech.speak("I will set a five minute timer for you!")
                    setTimeout(() => {
                        Speech.speak("BEEP BEEP BEEP BEEP BEEP")
                        Speech.speak('Your five minutes are up')
                        Speech.speak(instructions[2]);
                    }, 10000)
                }});
            }, 5000);
        }})
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
                <TouchableOpacity onPress={Speak} style={buttonActive.active==2? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Step-by-step</Text></TouchableOpacity>
                <TouchableOpacity onPress={Tutorial} style={buttonActive.active==3? styles.pressedButton : styles.Button}><Text style={styles.buttonText}>Tutorial</Text></TouchableOpacity>
            </View>            
        </View>
    )


}

export default InstructionsPage;

