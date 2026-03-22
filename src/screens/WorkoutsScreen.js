// Empty Workouts screen

import {ScrollView, View, Text, StyleSheet} from 'react-native'

export default function WorkoutScreen(){
    return (
        <ScrollView style={styles.container}>
            <Text styles={styles.desc}>workout</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ee930a'
    },
    text: {
        fontSize: 15,
        color: 'black'
    }
})