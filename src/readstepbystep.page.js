import React, { useState } from 'react';
import VanityData from './vanity.data';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Speech from 'expo-speech';

const ReadStepByStepPage = ({ navigation, route }) => {
    const [currInstruction, setCurrInstruction] = useState(0);
    const [done, setDone] = useState(false);
    const instructions = VanityData[route.params.key]['raw_instructions'];

    Speech.speak(instructions[currInstruction]);

    const NextStep = () => {
        Speech.stop();
        setCurrInstruction(currInstruction + 1);
        if (currInstruction >= instructions.length - 1) {
            console.log("here");
            setDone(true);
        }
        // Speech.speak(instructions[currInstruction + 1]);
    }

    if (!done) {
        return (
            <View>
                <Title>{instructions[currInstruction]}</Title>
                <Button onPress={NextStep}>Next Step</Button>
            </View>
        )
    } else {
        Speech.speak("You have finished all the steps! Click below to return to the instruction page.");
        return (
            <View>
                <Title>You have finished all the steps! Click below to return to the instruction page.</Title>
                <Button onPress={() => navigation.navigate('Instructions', {'key':route.params.key})}>Back to Instruction Page</Button>
            </View>
        )
    }
}

export default ReadStepByStepPage;
