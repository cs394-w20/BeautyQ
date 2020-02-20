import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text style={ styles.homeLogo }>BeautyQ</Text>
            
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