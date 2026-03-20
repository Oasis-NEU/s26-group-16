// Component for Mini Stats in Homescreen
// A component is a reusable element that can be displayed on any screen
// We make one by creating view(s) for it and display them via calling their functions

import {View, Text, StyleSheet} from 'react-native'

export default function StatCard({icon, value, desc}) {
    return (
        <View style={styles.card}>
            <Text style={styles.pic}> {icon} </ Text>
            <Text style={styles.statCount}> {value} </ Text>
            <Text style={styles.subtitle}> {desc} </ Text>
        </ View>
    )
}

const styles = StyleSheet.create({
    // background card
    card: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 15,
        margin: 10,
        borderWidth: 4,
        borderColor: '#000000',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },
    
    // emoji/pic
    pic: {
        fontSize: 30
    },

    // stat num for any desc
    statCount: {
        color:  '#000000',
        fontWeight: 900,
        fontSize: 25,
    },

    // desc
    subtitle: {
        color:  '#000000',
        fontSize: 18,
    }
})