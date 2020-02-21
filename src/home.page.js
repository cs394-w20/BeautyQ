import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Image style = {styles.homeLogo} source={require('../assets/images/logo.png')}/>
            <TouchableOpacity 
                style={ styles.homeButton }
                onPress={ () => navigation.navigate('Camera') }>
                <Text style={ styles.homeButtonText }>Add New Product</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.homeButton }>
                <Text style={ styles.homeButtonText }>View Saved Products</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomePage;