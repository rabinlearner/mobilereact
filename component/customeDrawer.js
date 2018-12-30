import React from 'react'
import { View, Text, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation'
const customeDrawer = () => {
    return (
        Platform.OS === 'ios' ?
            <SafeAreaView style={styles.container}>
                <Text style={styles.paragraph}>
                    This is top text.
        </Text>
                <Text style={styles.paragraph}>
                    This is bottom text.
        </Text>
            </SafeAreaView>
            :
            <View>
                <Text>this is the iso screen</Text>
            </View>
    )
}

export default customeDrawer
