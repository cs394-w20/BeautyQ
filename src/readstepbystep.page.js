import React, { useState, useEffect } from 'react';
import VanityData from './vanity.data';
import { View, Text } from 'react-native';
import { Title, Button,Card } from 'react-native-paper';
import { Timer } from 'react-native-stopwatch-timer';
import * as Speech from 'expo-speech';
import styles from './styles';
import { Icon } from 'react-native-elements';

const ReadStepByStepPage = ({ navigation, route }) => {
    const [currInstruction, setCurrInstruction] = useState(0);
    const [done, setDone] = useState(false);
    const [timer, setTimer] = useState(false);
    const [startTimer, setStartTimer] = useState(false);
    const [timerComplete, setTimerComplete] = useState(false);
    if (!route.params.key) {
        route.params.key = route.params.items[0]
    }
    const instructions = VanityData[route.params.key]['sbs_instructions'];
    const product = VanityData[route.params.key]
    
    const NextStep = () => {
        Speech.stop();

        if (currInstruction >= instructions.length - 1) {
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
        setTimerComplete(true);
    }

    const StartTimer = () => {
        setStartTimer(true);
        Speech.stop();
        Speech.speak("I've set a timer for you for 10 minutes")
    }

    const moveToNextProduct = () => {
        console.log('back'); 
        Speech.stop(); 
        setCurrInstruction(0);
        setDone(false);
        setTimer(false);
        setStartTimer(false);
        navigation.navigate('ReadStepByStep', {'items': route.params.items, 'key': route.params.items[route.params.items.indexOf(route.params.key) + 1]})
    };

    if (!done) {
        if (timer) {
            return (
                <View style={styles.container}>
                    <Card style={styles.instructionCard}>
                        <Card.Content>
                            <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                            <Title> {product.product_name} </Title>
                            <Text> {product.brand_name} </Text>
                            <Text style={styles.sbs_instruct}>Step {currInstruction + 1}: {instructions[currInstruction].text}</Text>
                            <View style={styles.timer}>
                                <Timer totalDuration={60000} start={startTimer} handleFinish={TimerFinished}/>
                            </View>
                        </Card.Content>
                        <Card.Actions style={styles.timerCard}>
                            <Icon
                                reverse
                                name='play-arrow'
                                size={35}
                                onPress={() => StartTimer()}
                                containerStyle={{display: startTimer && !timerComplete ? 'none' : 'flex'}}
                            />
                            <Icon
                                reverse
                                name='pause'
                                size={35}
                                onPress={() => setStartTimer(false)}
                                containerStyle={{display: startTimer && !timerComplete ? 'flex' : 'none'}}
                            />
                            <Icon
                                reverse
                                name='skip-next'
                                size={35}
                                onPress={() => {TimerFinished(); NextStep()}}
                                containerStyle={{display: timerComplete ? 'none' : 'flex'}}
                            />
                            <Button 
                                onPress={() => {moveToNextProduct()}}
                                style={{ width:'100%', padding: 1, display: timerComplete ? 'flex' : 'none' }}
                                mode="contained">
                                    Navigate to Next Product
                            </Button>
                        </Card.Actions>
                    </Card>
                    <Icon
                    reverse
                    name='chevron-left'
                    color='black'
                    size={20}
                    onPress={() => {console.log('stop');Speech.stop();navigation.navigate('Instructions', {'items': route.params.items, 'key':route.params.key})}}
                    containerStyle={styles.vanityButton}
                    />
                </View>
            )
        }
        return (
            <View style={styles.container}> 
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
                <Icon
                reverse
                name='chevron-left'
                color='black'
                size={20}
                onPress={() => {console.log('stop');Speech.stop();navigation.navigate('Instructions', {'items': route.params.items, 'key':route.params.key})}}
                containerStyle={styles.vanityButton}
                />
            </View>
        )
    } else if (route.params.items.indexOf(route.params.key) >= route.params.items.length - 1) {
        Speech.speak("You have finished all the steps! Click below to return to the instruction page.");
        return (
            <View style={styles.container}>
                <Card style={styles.instructionCard}>
                    <Card.Content>
                        <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                        <Title> {product.product_name} </Title>
                        <Text> {product.brand_name} </Text>
                        <Text style={styles.sbs_instruct}>You have finished all the steps! Click below to return to the instruction page.</Text>
                    </Card.Content>
                    <Card.Actions style={{marginLeft: '10%'}}>
                        <Button 
                            onPress={() => {console.log('back'); Speech.stop(); navigation.navigate('Instructions', {'items': route.params.items, 'key':route.params.key})}}
                            style={{ width:'100%', padding: 1 }}
                            mode="contained">
                                Back to Instruction Page
                        </Button>
                    </Card.Actions>
                </Card>
                <Icon
                reverse
                name='chevron-left'
                color='black'
                size={20}
                onPress={() => {console.log('stop');Speech.stop();navigation.navigate('Instructions', {'items': route.params.items, 'key':route.params.key})}}
                containerStyle={styles.vanityButton}
                />
            </View>
        )
    } else {
        Speech.speak("You have finished all the steps! Click below to navigate to the next product.");
        return (
            <View style={styles.container}>
                <Card style={styles.instructionCard}>
                    <Card.Content>
                        <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                        <Title> {product.product_name} </Title>
                        <Text> {product.brand_name} </Text>
                        <Text style={styles.sbs_instruct}>You have finished all the steps! Click below to navigate to the next product.</Text>
                    </Card.Content>
                    <Card.Actions style={{marginLeft: '10%'}}>
                        <Button 
                            onPress={() => {moveToNextProduct()}}
                            style={{ width:'100%', padding: 1 }}
                            mode="contained">
                                Navigate to Next Product
                        </Button>
                    </Card.Actions>
                </Card>
                <Icon
                reverse
                name='chevron-left'
                color='black'
                size={20}
                onPress={() => {moveToNextProduct()}}
                containerStyle={styles.vanityButton}
                />
            </View>
        )
    }
}

export default ReadStepByStepPage;
