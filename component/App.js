import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Route from './route/route';
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="red"
                barStyle="light-content"
            />
            <Route />
        </View>
    )
}
export default App;