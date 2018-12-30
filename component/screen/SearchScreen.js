import React from 'react';

import { View, Text, TextInput, FlatList } from 'react-native';
import { UserSearch } from '../api/api';
class SearchScreen extends React.Component {
    state = {
        userInputText: "",
        // listitem: false,
        searchResult: []
    }
    componentDidMount() {
        this.changeText();
    }
    changeText = (userInputText) => {
        this.setState({ userInputText })
        UserSearch(this.state.userInputText).then((result) => {
            this.setState({ searchResult: result.autocompleteResult })
        })
    }
    render() {
        console.warn(this.state.searchResult)
        return (
            <View>
                <TextInput
                    style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingHorizontal: 5 }}
                    onChangeText={(text) => this.changeText(text)}
                />
                <FlatList
                    data={this.state.searchResult}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.ProductName}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
export default SearchScreen;