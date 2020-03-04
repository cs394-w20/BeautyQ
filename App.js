import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import IntroPage from './src/intro.page';
import HomePage from './src/home.page';
import CameraPage from './src/camera.page';
import VanityPage from './src/vanity.page';
import InstructionsPage from './src/instructions.page';
import ReadStepByStepPage from './src/readstepbystep.page';
import AddProductPage from './src/addProduct.page';

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000000',
        accent: '#c0c0c0',
    },
};

export default class App extends React.Component {
    render() {
        return (
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={'Intro'}>
                        <Stack.Screen 
                            name="Intro"
                            component= { IntroPage }
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={ HomePage }
                            options={{ title:'' }}
                        />
                        <Stack.Screen
                            name="Vanity"
                            component={ VanityPage }
                            options={{ headerShown: false}}
                        />
                        <Stack.Screen 
                            name="Camera" 
                            component={ CameraPage } 
                            options={{ title:'BeautyQ' }}
                        />
                        <Stack.Screen 
                            name="Instructions" 
                            component={ InstructionsPage }
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ReadStepByStep"
                            component={ ReadStepByStepPage }
                        />
                        <Stack.Screen
                            name="AddProduct"
                            component= { AddProductPage }
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        );
    };
};
