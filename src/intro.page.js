import React from 'react';
import { View,  ImageBackground, Text } from 'react-native';
import {  Button } from 'react-native-paper';
import styles from './styles';

const IntroPage = ({navigation}) => {
    return (
        <View>
            <ImageBackground
              source={require('../assets/images/intro.png')}
              style={styles.introBG}
            >
                <Text style={styles.introText}>Self care shouldn't be hard</Text>
                <Button style={styles.introButton} mode='flat' color='#ffffff' onPress={() => navigation.navigate('Home')}>Get Started</Button>
            </ImageBackground>
        </View>
    )
}

export default IntroPage