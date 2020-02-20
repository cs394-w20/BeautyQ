import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
// import { Tts } from 'react-native-tts';
import * as Speech from 'expo-speech';


const InstructionsPage = ({ navigation }) => {
    const [buttonActive, setbuttonActive] = useState({ active: 2 });
    const localStyle = StyleSheet.create({
        pressed: {
            backgroundColor: '#b76e79',
            borderRadius: 10,
            width: '33.33%',        
            marginTop: 10,
            marginBottom: 10,
        }
      });

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
        speak(instructions[0], 0).then(() => {
            speak(instructions[1], 9000).then(() => {
                speak(instructions[2], 15000).then(() => {

                })
            })
        })
        
    };

    const ReadDirn = () => {
        setbuttonActive({ active: 1});
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
                <TouchableOpacity onPress={ReadDirn} style={buttonActive.active==1? localStyle.pressed : styles.Button}><Text style={styles.buttonText}>Read Directions</Text></TouchableOpacity>
                <TouchableOpacity onPress={Speak} style={buttonActive.active==2? localStyle.pressed : styles.Button}><Text style={styles.buttonText}>Step-by-step</Text></TouchableOpacity>
                <TouchableOpacity onPress={Tutorial} style={buttonActive.active==3? localStyle.pressed : styles.Button}><Text style={styles.buttonText}>Tutorial</Text></TouchableOpacity>
            </View>            
        </View>
    )


}

export default InstructionsPage;

