import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get("window");

class Header extends React.Component {
    state = {
        search: false,
        text: ''
    }
    openSearch = () => {
        this.setState({ search: !this.state.search })
    }
    render() {

        return (
            <View style={styles.header} >
                {
                    this.props.backIcon === "" ?
                        this.state.search ?
                            <View style={{ flex: 1 }} >
                                <Icon name="arrow-back" size={30} color="#900" onPress={() => this.setState({ search: !this.state.search })} />
                            </View>
                            :
                            <View style={{ flex: 1 }} >
                                <Icon name="menu" size={30} color="#900" onPress={() => this.props.navigation.toggleDrawer()} />
                            </View>
                        :
                        <View style={{ flex: 1 }} >
                            <Icon name="arrow-back" size={30} color="#900" onPress={() => this.props.navigation.goBack()} />
                        </View>

                }
                {
                    this.state.search ?
                        <TouchableOpacity style={{ flex: 5 }}
                            onPress={() => this.props.navigation.navigate("Search")}>
                            <Text>Search</Text>
                        </TouchableOpacity>
                        :
                        this.props.backIcon === "" ?
                            <View style={{ flex: 5 }} >
                                <Text>Home</Text>
                            </View>
                            :
                            <View style={{ flex: 5 }} >
                                <Text>{this.props.name}</Text>
                            </View>

                }

                <View style={{ flex: 1 }} >
                    <Icon name="search" size={30} color="#900" onPress={this.openSearch} />
                </View>

                <View style={{ flex: 1 }} >
                    <Icon name="shopping-cart" size={30} color="#900" />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF4500',
        paddingHorizontal: 6,
        height: height / 9.8,
    }
})
export default Header;