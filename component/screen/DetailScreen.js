import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../header/header'
const DetailScreen = (props) => {
    navigationOptions = { header: null };
    const { navigation } = props;
    const itemId = navigation.getParam('data');
    // console.warn(itemId)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header
                backIcon="back"
                navigation={props.navigation}
                name={itemId.name}
            />
            <View style={{ flex: 5 }}>
                <Image
                    source={{ uri: itemId.images[0].src }} style={{ height: 200, width: 100 }}
                />
            </View>
            <View style={{ flex: 5 }}>
                <Text>{itemId.name}</Text>

            </View>
        </View>
    )
}
export default DetailScreen;