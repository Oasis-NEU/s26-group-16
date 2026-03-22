// Empty More Screen

import {ScrollView, View, Text, StyleSheet} from 'react-native'

export default function MoreScreen(){
    return (
        <ScrollView style={styles.container}>
            <Text styles={styles.desc}>more</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e116'
    },
    text: {
        fontSize: 15,
        color: 'black'
    }
})