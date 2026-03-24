// Empty Profile Screen

import { ScrollView, View, Text, StyleSheet } from 'react-native'
import WorkoutCard from '../components/WorkoutCard'


export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text styles={styles.desc}>profile</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5acc19'
    },
    text: {
        fontSize: 15,
        color: 'black'
    }
})