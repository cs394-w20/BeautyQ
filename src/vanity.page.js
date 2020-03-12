import React, { useState, useCallback, Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles from './styles';
import VanityData from './vanity.data';
import DraggableFlatList from "react-native-draggable-flatlist";

const VanityPage = ({ navigation, route }) => {
    const [addButtonOpen, setAddButtonOpen] = useState(false);
    const [buttonActive, setbuttonActive] = useState(0);
    const [editingVanity, setEditingVanity] = useState(false);
    const [editingRoutine, setEditingRoutine] = useState(false);
    const [currentRoutine, setCurrentRoutine] = useState([]);

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    if (route.params.navigated) {
        if (addButtonOpen) {
            setAddButtonOpen(false);
        }
        route.params.navigated = false;
    }

    const removeFromVanity = key => {
        VanityData[key].inVanity = false;
        if (currentRoutine.includes(key))
            currentRoutine.splice(currentRoutine.indexOf(key), 1)
        forceUpdate();
    }

    const addToRoutine = key => {
        if (currentRoutine.includes(key)) {
            var currRoutine = currentRoutine;
            currRoutine.splice(currRoutine.indexOf(key), 1)
            setCurrentRoutine(currRoutine)
        } else {
            var currRoutine = currentRoutine;
            currRoutine.push(key);
            setCurrentRoutine(currRoutine);
        }
        forceUpdate();
    };

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
                        <Text style={styles.toggleText}> My Vanity </Text></Button>
                <Button
                    mode="outlined" 
                    style={buttonActive == 1? localStyle.pressed : styles.toggleButtons}
                    onPress={() => setbuttonActive(1)}>
                    <Text style={styles.toggleText}> My Routine </Text></Button>                
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

    renderItem = item => {
        return (
            <View> 
                <View
                    style={{
                        flex: 1,
                        width:'90%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        margin: '5%'
                    }}
                >
                <Image 
                    style={styles.routinecover}
                    source={ VanityData[item].image }
                />
                <Title style={{
                    width:'30%',
                    margin: '5%'
                }}>
                    {VanityData[item].product_name}
                </Title>                
                </View>
                
                {item != currentRoutine[currentRoutine.length-1] &&
                    <View
                        style={{
                            borderTopColor: '#d3d3d3',
                            borderTopWidth: 1,
                            width: '90%',
                            margin: '5%',
                            marginBottom: 0
                        }}
                    />
                }
            </View>
            )
    }

    renderItemDrag = (item, drag) => {
        return (
            <TouchableOpacity
            onLongPress={drag}
            >
                <View
                    style={{
                        flex: 1,
                        width:'90%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        margin: '5%'
                    }}
                >
                <Image 
                    style={styles.routinecover}
                    source={ VanityData[item].image }
                />
                <Title style={{
                    width:'30%',
                    margin: '5%'
                }}>
                    {VanityData[item].product_name}
                </Title>                
                </View>
                
                {item != currentRoutine[currentRoutine.length-1] &&
                    <View
                        style={{
                            borderTopColor: '#d3d3d3',
                            borderTopWidth: 1,
                            width: '90%',
                            margin: '5%',
                            marginBottom: 0
                        }}
                    />
                }
            </TouchableOpacity>
            )
    }

    if (buttonActive === 1)
        return (
            <React.Fragment>
                <Card>
                    <Title style={styles.vanity_title_text}> BeautyQ </Title>
                    <ToggleButtons />
                    <Text style={styles.routine_text}>{currentRoutine.length} Products</Text>
                </Card>
                {/* <View style={{ flex: 1 }}>
                    <FlatList
                        data={currentRoutine}
                        renderItem={({item}) => renderItem(item)}
                        keyExtractor = {item => item}
                    />
                </View> */}
                <View style={{ flex: 1 }}>
                    <DraggableFlatList
                        data={currentRoutine}
                        renderItem={({item, drag}) => renderItemDrag(item, drag)}
                        keyExtractor={item => item}
                        onDragEnd={({ data }) => setCurrentRoutine(data)}
                    />
                </View>
            <Icon
                reverse
                name='play-arrow'
                size={35}
                color={ 'black'}
                containerStyle={{position:'absolute', right:15, bottom:15, display: currentRoutine.length > 0 ? 'flex' : 'none'}}
                onPress={() => {
                        navigation.navigate('ReadStepByStep', { 'items': currentRoutine })
                }}
            />
            </React.Fragment>
        );
    else 
    return (
        <React.Fragment >
            <Card>
                <Title style={styles.vanity_title_text}> BeautyQ </Title>
                <ToggleButtons />
                <Text style={styles.vanity_text}>{Object.keys(VanityData).filter(key => VanityData[key].inVanity).length} Products</Text>
            </Card>
            <ScrollView style={styles.vanity_scroll} contentContainerStyle={{flexGrow: 1}} scrollEnabled>
                <View style={styles.vanity_view}>
                    {
                        Object.keys(VanityData).map(key => {
                            if (VanityData[key].inVanity) {
                                return (
                                    <Card style={styles.card} onPress={ () => navigation.navigate('Instructions', { 'key':key })}>
                                        <Icon
                                            reverse
                                            name='remove'
                                            size={15}
                                            onPress={() => removeFromVanity(key)}
                                            containerStyle={{position:'absolute', right:5, top:0, zIndex:1, display: editingVanity ? 'flex' : 'none'}}
                                        />
                                        <Icon
                                            reverse
                                            name='check'
                                            size={15}
                                            onPress={() => addToRoutine(key)}
                                            containerStyle={{position:'absolute', right:5, top:0, zIndex:1, display: editingRoutine && currentRoutine.includes(key) ? 'flex' : 'none'}}
                                        />
                                        <Icon
                                            reverse
                                            name='add'
                                            size={15}
                                            onPress={() => addToRoutine(key)}
                                            containerStyle={{position:'absolute', right:5, top:0, zIndex:1, display: editingRoutine && !currentRoutine.includes(key) ? 'flex' : 'none'}}
                                        />
                                        <Card.Content>
                                            
                                            <Image style={styles.cardcover} source={ VanityData[key].image }/>
                                            <Text style={ styles.vanityProductName }>{ VanityData[key].name }</Text>
                                        </Card.Content>
                                    </Card>
                                )
                            }
                        })
                    }
                </View>
            </ScrollView>
        
            <Icon
                reverse
                name='add'
                size={35}
                color={addButtonOpen ? 'gray' : 'black'}
                containerStyle={{position:'absolute', right:15, bottom:15}}
                onPress={() => setAddButtonOpen(!addButtonOpen)}
            />
            <Icon
                reverse
                name='edit'
                size={30}
                containerStyle={{position:'absolute', right:115, bottom:20, display: addButtonOpen ? 'flex' : 'none'}}
                onPress={() => {setEditingVanity(!editingVanity); setEditingRoutine(false);}}
            />
            <Icon
                reverse
                name='playlist-add'
                size={30}
                containerStyle={{position:'absolute', right:90, bottom:90, display: addButtonOpen ? 'flex' : 'none'}}
                onPress={() => {setEditingRoutine(!editingRoutine); setEditingVanity(false)}}
            />
            <Icon
                reverse
                name='camera'
                size={30}
                containerStyle={{position:'absolute', right:20, bottom:115, display: addButtonOpen ? 'flex' : 'none'}}
                onPress={() => navigation.navigate('Camera')}
            />
            
        </React.Fragment>
    )
}

export default VanityPage;
