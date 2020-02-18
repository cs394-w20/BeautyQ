import 'react-native-gesture-handler';
import React from 'react';
import CameraPage from './src/camera.page';
import InstructionsPage from './src/instructions.page';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Camera" 
                        component={ CameraPage } 
                        options={{ title:'BeautyQ' }}
                    />
                    <Stack.Screen 
                        name="Instructions" 
                        component={ InstructionsPage }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};
