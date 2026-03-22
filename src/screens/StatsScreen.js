// Empty Stats screen

import {ScrollView, View, Text, StyleSheet} from 'react-native'

export default function StatsScreen(){
    return (
        <ScrollView style={styles.container}>
            <Text styles={styles.desc}>stats</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0763f8'
    },
    text: {
        fontSize: 15,
        color: 'black'
    }
})