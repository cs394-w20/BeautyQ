import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
//import Tts from 'react-native-tts';


const InstructionsPage = ({ navigation }) => { 

    const Speak = () => {
        //Tts.speak('Hello, world!');
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
