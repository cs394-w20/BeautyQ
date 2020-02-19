import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { Tts } from 'react-native-tts';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => { 
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const Speak = () => {
        Speech.speak("Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face");
        
        setTimeout(() => {
            Speech.pause();
        }, 9000);

        setTimeout(() => {
            Speech.resume();
            Speech.speak("Allow to remain on for five to ten minutes");

        }, 9000);

        setTimeout(() => {
            Speech.pause();
        }, 19000);

        setTimeout(() => {
            Speech.resume();
            Speech.speak("Rinse thoroughly with warm water");

        }, 25000);
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

