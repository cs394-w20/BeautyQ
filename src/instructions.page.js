import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { Tts } from 'react-native-tts';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => { 

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
        speak(instructions[0], 0).then(() => {
            speak(instructions[1], 9000).then(() => {
                speak(instructions[2], 15000).then(() => {

                })
            })
        })
        
    };
    return (
        <View style={styles.container}>
            <Text style={styles.instructionsPage}>
                Instructions for PETER THOMAS ROTH 24K Gold Mask Pure Luxury Lift & Firm Mask 
            </Text>
            <Text style={styles.item}>Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face</Text>
            <Text style={styles.item}>Allow to remain on for five to ten minutes</Text>
            <Text style={styles.item}>Rinse thoroughly with warm water</Text>
            <TouchableOpacity onPress={Speak} style={styles.button}><Text style={styles.buttonText}> Read It! </Text></TouchableOpacity>
        </View>
    )


}

export default InstructionsPage;

