import React, { useState, useEffect } from 'react';
import VanityData from './vanity.data';
import { View, Text } from 'react-native';
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
    const product = VanityData[route.params.key]

    if (currInstruction == 0)
        Speech.speak(instructions[currInstruction].text);
    
    const NextStep = () => {
        Speech.stop();

        if (currInstruction >= instructions.length - 1) {
            console.log("here");
            setDone(true);
        }
        else if (instructions[currInstruction + 1].hasPause && timer != true) {
            setCurrInstruction(currInstruction + 1);
            setTimer(true);
        } else {
            setCurrInstruction(currInstruction + 1);
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
                        <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                        <Title> {product.product_name} </Title>
                        <Text> {product.brand_name} </Text>
                        <Text style={styles.sbs_instruct}>Step {currInstruction + 1}: {instructions[currInstruction].text}</Text>
                        <View style={styles.timer}>
                            <Timer totalDuration={10000} start={startTimer} handleFinish={TimerFinished}/>
                        </View>
                    </Card.Content>
                    <Card.Actions style={styles.timerCard}>
                        <Button onPress={StartTimer} style={styles.nextstep} mode="contained">Start Timer</Button>
                    </Card.Actions>
                </Card>
            )
        }
        return (
            <Card style={styles.instructionCard}>
                <Card.Content>
                    <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                    <Title> {product.product_name} </Title>
                    <Text> {product.brand_name} </Text>
                    <Text style={styles.sbs_instruct}>Step {currInstruction + 1}: {instructions[currInstruction].text}</Text>
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
                    <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                    <Title> {product.product_name} </Title>
                    <Text> {product.brand_name} </Text>
                    <Text style={styles.sbs_instruct}>You have finished all the steps! Click below to return to the instruction page.</Text>
                </Card.Content>
                <Card.Actions style={{marginLeft: '10%'}}>
                    <Button 
                        onPress={() => navigation.navigate('Instructions', {'key':route.params.key})}
                        style={{ width:'100%', padding: 1 }}
                        mode="contained">
                            Back to Instruction Page
                    </Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default ReadStepByStepPage;
