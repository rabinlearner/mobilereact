import React from 'react';
import { View, Text, Button, ScrollView, FlatList } from 'react-native';
import Header from '../header/header';
import PostData from '../api/api';
import Products from '../Products/products';



const TextFiels = () => {
    return (
        <View style={{ height: "auto", width: "100%", fontWeight: "bold", borderBottomWidth: 2, borderBottomColor: 'red', paddingVertical: 5 }}>
            <Text>
                rabinawale
        </Text>
        </View>
    )
}
class HomeScreen extends React.Component {
    static navigationOptions = { header: null };
    state = {
        data: []
    }
    componentDidMount() {
        this.fetchdata();
    }
    fetchdata = () => {
        PostData().then(data => {
            this.setState({ data })
        })
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    navigation={this.props.navigation}
                    backIcon=""
                />
                <View style={{ flex: 1 }}>
                    <TextFiels />
                    <Products data={this.state.data}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        )
    }
}
export default HomeScreen; 