import React, { useState } from 'react';
import VanityData from './vanity.data';
import { View } from 'react-native';
import { Title, Button,Card } from 'react-native-paper';
import * as Speech from 'expo-speech';
import styles from './styles';

const ReadStepByStepPage = ({ navigation, route }) => {
    const [currInstruction, setCurrInstruction] = useState(0);
    const [done, setDone] = useState(false);
    const [timer, setTimer] = useState(false);
    const instructions = VanityData[route.params.key]['sbs_instructions'];
    if(!done)
        Speech.speak(instructions[currInstruction].text);
    const NextStep = () => {
        Speech.stop();
        
        

        if (currInstruction >= instructions.length - 1) {
            console.log("here");
            setDone(true);
        }
        else if (instructions[currInstruction +1 ].hasPause && timer != true) {
            setCurrInstruction(currInstruction + 1);
            setTimer(true);
        } else {
            setCurrInstruction(currInstruction + 1);
        }
        // Speech.speak(instructions[currInstruction + 1]);
    }

    const createTimer = () => {
        Speech.stop();
        Speech.speak("I've set a timer for you for 10 minutes")

        setTimeout(() => {
            Speech.speak("beep beep beep", {
                onDone: () => { setTimer(false); NextStep();},
                })
            // console.log("timed out...");
            // NextStep();
        }, 10000);
    }

    if (!done) {
        if (timer) {
            return (
                <Card style={styles.instructionCard}>
                    <Card.Content>
                        <Title style={styles.sbs_instruct}>{instructions[currInstruction].text}</Title>
                    </Card.Content>
                    <Card.Actions style={{marginLeft: '29%'}}>
                        <Button onPress={createTimer} style={styles.nextstep} mode="contained">Set Timer</Button>
                    </Card.Actions>
                </Card>
            )
        }
        return (
            <Card style={styles.instructionCard}>
                <Card.Content>
                    <Title style={styles.sbs_instruct}>{instructions[currInstruction].text}</Title>
                </Card.Content>
                <Card.Actions style={{marginLeft: '29%'}}>
                    <Button onPress={NextStep} style={styles.nextstep} mode="contained">Next Step</Button>
                </Card.Actions>
            </Card>
            // <View>
            //     <Title style={styles.sbs_instruct}>{instructions[currInstruction]}</Title>
            //     <Button onPress={NextStep} style={styles.nextstep} mode="contained">Next Step</Button>
            // </View>
        )
    } else {
        Speech.speak("You have finished all the steps! Click below to return to the instruction page.");
        return (
            <Card style={styles.instructionCard}>
                <Card.Content>
                    <Title>You have finished all the steps! Click below to return to the instruction page.</Title>
                </Card.Content>
                <Card.Actions style={{marginLeft: '10%'}}>
                    <Button 
                        onPress={() => navigation.navigate('Instructions', {'key':route.params.key})}
                        style={{width:'90%', padding: 10,}}
                        mode="contained">
                            Back to Instruction Page
                    </Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default ReadStepByStepPage;
