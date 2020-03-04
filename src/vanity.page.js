import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles from './styles';
import VanityData from './vanity.data';

const VanityPage = ({ navigation, route }) => {
    const [addButtonOpen, setAddButtonOpen] = useState(false);
    const [editingVanity, setEditingVanity] = useState(false);

    if (route.params.navigated) {
        if (addButtonOpen) {
            setAddButtonOpen(false)
        }
    }

    const removeFromVanity = key => {
        VanityData[key].inVanity = false;
        setAddButtonOpen(false);
    }

    return (
        <React.Fragment >
            <Title style={styles.vanity_title_text}> Vanity </Title>
            <Text style={styles.vanity_text}>{Object.keys(VanityData).filter(key => VanityData[key].inVanity).length} Products</Text>
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
                size={35}
                containerStyle={{position:'absolute', right:115, bottom:40, display: addButtonOpen ? 'flex' : 'none'}}
                onPress={() => setEditingVanity(!editingVanity)}
            />
            <Icon
                reverse
                name='camera'
                size={35}
                containerStyle={{position:'absolute', right:40, bottom:115, display: addButtonOpen ? 'flex' : 'none'}}
                onPress={() => navigation.navigate('Camera')}
            />
        </React.Fragment>
    )
}

export default VanityPage;
