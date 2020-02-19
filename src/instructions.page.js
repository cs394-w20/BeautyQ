import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
// import { Tts } from 'react-native-tts';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => { 

    const Speak = () => {
        Speech.speak("Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face");
        Speech.speak("Allow to remain on for five to ten minutes");
        Speech.speak("Rinse thoroughly with warm water");

        console.log('Speaking');
    };
    return (
        <View>
            <Text style={styles.instructionsPage}>
                Instructions for PETER THOMAS ROTH 24K Gold Mask Pure Luxury Lift & Firm Mask 
            </Text>
            <Text style={styles.item}>Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face</Text>
            <Text style={styles.item}>Allow to remain on for five to ten minutes</Text>
            <Text style={styles.item}>Rinse thoroughly with warm water</Text>
            <Button onPress={Speak} title='Read It!'></Button>
        </View>
    )
}

export default InstructionsPage;

