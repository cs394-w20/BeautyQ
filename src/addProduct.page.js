import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from './styles';
import { Icon, TouchableOpacity } from 'react-native-elements';
import * as Speech from 'expo-speech';
import VanityData from './vanity.data';
import { Button, Card, Title } from 'react-native-paper';

const AddProductPage = ({ navigation, route }) => {
    const [buttonActive, setbuttonActive] = useState(0);
    const product = VanityData[route.params.key];

    var ButtonText = "";

    if (product.inVanity) {
        ButtonText = "Navigate To Item Instructions"
    } else {
        ButtonText = "Add to vanity"
    }

    const buttonNavigate = () => {
        if (product.inVanity) {
            navigation.navigate('Instructions', { 'key':route.params.key })
        } else {
            VanityData[route.params.key].inVanity = true
            navigation.navigate('Vanity', {'navigated': true})
        }
    }

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
                    <Card.Actions>
                        <Button style={{ marginLeft: '5%', width: '90%'}} mode="contained" onPress={() => {buttonNavigate()}}>{ButtonText}</Button>
                    </Card.Actions>
                </Card>
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
                <Card.Actions>
                    <Button style={{ marginLeft: '5%', width: '90%'}} mode="contained" onPress={() => {buttonNavigate()}}>{ButtonText}</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default AddProductPage;

