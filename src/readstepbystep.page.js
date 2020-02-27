import React, { useState, useEffect } from 'react';
import VanityData from './vanity.data';
import { View } from 'react-native';
import { Title, Button,Card } from 'react-native-paper';
import { Timer } from 'react-native-stopwatch-timer';
import * as Speech from 'expo-speech';
import styles from './styles';

const ReadStepByStepPage = ({ navigation, route }) => {
    const [currInstruction, setCurrInstruction] = useState(0);
    const [done, setDone] = useState(false);
    const [timer, setTimer] = useState(false);
    const [startTimer, setStartTimer] = useState(false);
    const instructions = VanityData[route.params.key]['sbs_instructions'];

    if (currInstruction == 0)
        Speech.speak(instructions[currInstruction].text);
    
    const NextStep = () => {
        Speech.stop();

        if (currInstruction >= instructions.length - 1) {
            setDone(true);
        } else {
            if (!timer)
                setCurrInstruction(currInstruction + 1);
            setTimer(instructions[currInstruction].hasPause);
        }
    }

    useEffect(() => {
        Speech.speak(instructions[currInstruction].text)
    }, [currInstruction])

    const TimerFinished = () => {
        setTimer(false);
        NextStep();
    }

    const StartTimer = () => {
        setStartTimer(true);
        Speech.stop();
        Speech.speak("I've set a timer for you for 10 minutes")
    }

    if (!done) {
        if (timer) {
            return (
                <Card style={styles.instructionCard}>
                    <Card.Content>
                        <Title style={styles.sbs_instruct}>{instructions[currInstruction].text}</Title>
                        <View style={{ marginLeft:'30%' }}>
                            <Timer totalDuration={10000} start={startTimer} handleFinish={TimerFinished}/>
                        </View>
                    </Card.Content>
                    <Card.Actions style={{marginLeft: '29%'}}>
                        <Button onPress={StartTimer} style={styles.nextstep} mode="contained">Start Timer</Button>
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
