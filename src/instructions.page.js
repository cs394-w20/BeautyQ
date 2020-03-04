import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Icon, TouchableOpacity } from 'react-native-elements';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';
import VanityPage from './vanity.page'
import { Button, Card, Title } from 'react-native-paper';


const InstructionsPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState(0);
    const product = VanityData[route.params.key];

    const localStyle = StyleSheet.create({   
        pressed: {
            width: "50%",
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: 0,
            borderColor: 'white',
            borderBottomColor: 'grey',
            borderBottomWidth: 2
        }
      });

    const ReadDirn = () => {
        setbuttonActive(1);
        product.raw_instructions.forEach((element) => {
            Speech.speak(element);
        });
    };

    const Tutorial = () => {
        setbuttonActive(3);
    };

    const ToggleButtons = () => {
        return (
            <Card.Actions style={{flexWrap: 'wrap', alignItems: 'flex-start'}}>
                <View
                style={{
                    borderBottomColor: '#d3d3d3',
                    borderBottomWidth: 0.5,
                    width: '100%',
                }}
                />      
                <Button
                    style={buttonActive == 0? localStyle.pressed : styles.toggleButtons}
                    mode="outlined"
                    onPress={() => setbuttonActive(0)}>
                        <Text style={styles.toggleText}> Description </Text></Button>
                <Button
                    mode="outlined" 
                    style={buttonActive == 1? localStyle.pressed : styles.toggleButtons}
                    onPress={() => setbuttonActive(1)}>
                        <Text style={styles.toggleText}>Instructions</Text></Button>
                <View
                    style={{
                        borderBottomColor: '#d3d3d3',
                        borderBottomWidth: 1,
                        width: '100%'
                    }}
                />                
            </Card.Actions>
        );
    };

    const InstructionItemHeader = () => {
        return (
            <View>
                <Card.Cover source={product.image} style={styles.productImage}></Card.Cover>
                <Title> {product.product_name} </Title>
                <Text> {product.brand_name} </Text>
            </View>
        );
    };

    if (buttonActive == 1)
        return (
            <View style={styles.container}>
                <Card style={styles.cardStyles}>
                    <Card.Content>
                        <InstructionItemHeader />
                        <ToggleButtons/>
                        <View style={styles.instructions}>
                            {
                                product.raw_instructions.map((instr,ind) => (
                                <Text style={styles.item} key={instr}>Step {ind + 1}: {instr}</Text>
                                ))
                            }
                        </View>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: 'center'}}>
                        <Icon
                            reverse
                            name='list'
                            color='black'
                            size={35}
                            onPress={() => navigation.navigate('ReadStepByStep', {'key':route.params.key})}
                        />
                        <Icon
                            reverse
                            name='play-arrow'
                            color='black'
                            size={35}
                            onPress={ReadDirn}
                        />
                    </Card.Actions>
                </Card>
                <Icon
                    reverse
                    name='chevron-left'
                    color='black'
                    size={20}
                    onPress={() => navigation.navigate('Vanity', {'navigated':true})}
                    containerStyle={styles.vanityButton}
                />
            </View>
        )

    return (
        <View style={styles.container}>
            <Card style={styles.cardStyles}>
                <Card.Content>
                    <InstructionItemHeader />
                    <ToggleButtons/>
                    <View style={styles.instructions}>
                        <Text>{ product.description }</Text>
                    </View>
                </Card.Content>
            </Card>
            <Icon
                reverse
                name='chevron-left'
                color='black'
                size={20}
                onPress={() => navigation.navigate('Vanity', {'navigated':true})}
                containerStyle={styles.vanityButton}
            />
        </View>
    )
}

export default InstructionsPage;

