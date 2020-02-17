import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import Instructions from './instructions.component';


export default class CameraPage extends React.Component {
    camera = null;
    state = {
        captures: [],
        // setting flash to be turned off by default
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        // start the back camera by default
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
        cameraOpen: true,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    setCameraOpen = (cameraOpen) => this.setState({cameraOpen});

    handleShortCapture = async () => {
        console.log("Photo Taken");
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
        this.setCameraOpen(false);
    };


    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    barCodeScan = async () => {
        return null;
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures, cameraOpen } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }
        if(!cameraOpen){
            return <Instructions />
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>

                {captures.length > 0 && <Gallery captures={captures}/>}

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};
