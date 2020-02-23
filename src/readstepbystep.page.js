import React, { useState } from 'react';
import VanityData from './vanity.data';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Speech from 'expo-speech';

const ReadStepByStepPage = ({ navigation, route }) => {
    const [currInstruction, setCurrInstruction] = useState(0);
    const instructions = VanityData[route.params.key]['raw_instructions'];

    Speech.speak(instructions[currInstruction]);

    const NextStep = () => {
        Speech.stop();
        setCurrInstruction(currInstruction + 1);
        if (currInstruction == instructions.length) {
            console.log('youre done');
        }
        Speech.speak(instructions[currInstruction]);
    }

    return (
        <View>
            <Title>{instructions[currInstruction]}</Title>
            <Button onPress={NextStep}>Next Step</Button>
        </View>
    )
}

export default ReadStepByStepPage;
