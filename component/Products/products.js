import React from 'react';
import { FlatList, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const Products = (props) => {

    const { products } = props.data;
    return (
        <FlatList
            data={products}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

                <TouchableOpacity onPress={() => props.navigation.navigate("Detail", {
                    data: item
                })} style={{ padding: 5, height: 200, marginRight: 5, width: 200, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
                        <View style={{ flex: 5 }}>
                            <Image source={{ uri: item.images[0].src }} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View style={{ flex: 3, }}>
                            <Text>{item.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity >


            )}
        />
    )
}
export default Products;