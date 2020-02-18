import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import styles from './styles';

const CameraPage = ({ navigation }) => {
    var hasCameraPermission = null;

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          hasCameraPermission = (status === 'granted');
        })();
      }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        navigation.navigate('Instructions');
    };

    if (hasCameraPermission === null) {
        return <View />;
    } else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
    }

    return (
        <React.Fragment>
            <BarCodeScanner
                onBarCodeScanned={ handleBarCodeScanned }
                style={ styles.preview }
            />
        </React.Fragment>
    );
};

export default CameraPage;