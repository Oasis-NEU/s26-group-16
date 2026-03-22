// Component for the header greetings in Home Screen
// A component is a reusable element that can be displayed on any screen
// We make one by creating view(s) for it and display them via calling their functions

import { View, Text, StyleSheet } from 'react-native'

// Greeting view for Home screen
export default function HeroCard() {
    return (
        // different from scroll view—static
        <View style={styles.card}>
            <Text style={styles.title}> Hey Champion! </Text>
            <Text style={styles.subtitle}> Ready To Crush Your Goals Today!</Text>
        </View>
    )
}

// class style for styling certain views
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f71717',
        borderRadius: 24,
        padding: 24,
        margin: 15,
        marginTop: 70,
        borderWidth: 4,
        borderColor: '#000000',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },

    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '900',
        marginBottom: 8,    
    },

    subtitle: {
        color: 'white',
        fontSize: 18,
    }
})