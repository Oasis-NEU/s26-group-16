// components/SearchBar.js
import { View, TextInput, StyleSheet } from 'react-native'

export default function SearchBar({ value, onChangeText, placeholder }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder || "Search workouts..."}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        borderWidth: 4,
        borderColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        shadowColor: '#000000',
        elevation: 6,
    }
})