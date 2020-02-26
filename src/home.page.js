import React from 'react';
import { View,  Image } from 'react-native';
import {  Button } from 'react-native-paper';
import styles from './styles';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Image style = {styles.homeLogo} source={require('../assets/images/logo.png')}/>
            <Button style = {styles.homeButton} onPress={ () => navigation.navigate('Camera') } mode="contained">
                Add New Product
            </Button>

            <Button style = {styles.homeButton} onPress={ () => navigation.navigate('Vanity') } mode="contained">
                View Saved Products
            </Button>
        </View>
    )
}

export default HomePage;