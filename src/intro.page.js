import React from 'react';
import { View,  ImageBackground, Text } from 'react-native';
import {  Button, Title } from 'react-native-paper';
import styles from './styles';

const IntroPage = ({navigation}) => {
    const moveToNextPage = () => {
        setTimeout(() => {navigation.navigate('Vanity', {navigated: false})}, 3000);
    }

    moveToNextPage()

    return (
        <View>
            <ImageBackground
              source={require('../assets/images/intro.png')}
              style={styles.introBG}
            >
                <Text style={{position:'absolute', top: '50%', left: '30%', fontSize: '40%', color: '#FFFFFF', fontWeight: 'bold'}}>BeautyQ</Text>
                {/* <Button style={{top: '90%', width: '60%', marginLeft: '20%', borderBottomColor: 'white', borderBottomWidth: 1}} onPress={()=>{navigation.navigate('Vanity'), {'navigated': false}}}>
                    <Text style={{color: '#FFF'}}>Click Here to Continue</Text>
                </Button> */}
            </ImageBackground>
        </View>
    )


}

export default IntroPage