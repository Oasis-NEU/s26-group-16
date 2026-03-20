// Home screen (In progress)

import {View, ScrollView, StyleSheet, Text} from 'react-native'
import HeroCard from '../components/HeroCard'
import StatCard from '../components/StatCard'
import BadgeCard from '../components/BadgeCard'

// export default allows function to be imported to other files
// function to display the home screen/page
export default function HomeScreen() {
    return (
        <ScrollView style = {styles.container}>
            {/* Greetings */}
            <HeroCard />
            
            {/* Mini-stats */}
            <View style={styles.grid}>
                <View style={styles.row}>
                    <StatCard icon="🔥" value={7} desc="Day Streak" />
                    <StatCard icon="🏆" value={12} desc="Workouts" />
                </View>
                <View style={styles.row}>
                    <StatCard icon="⭐" value={850} desc="XP Points" />
                    <StatCard icon="⚡" value={5} desc="Achievements" />
                </View>
            </View>

            {/* Badges */}
            <Text style={styles.sectionTitle}> Top Badges </Text>
            
                <View style={styles.badgeRow}>
                    <BadgeCard icon="🏆" name="Glorious Protein King" color="#ef0808" />
                    <BadgeCard icon="🔥" name="You're Hot!" color="#faa404" />
                    <BadgeCard icon="67" name="67" color="hsl(119, 91%, 50%)" />
                </ View>

            {/* Challenges (TODO) */}
            
            
        </ScrollView>
    )
}

// styles is class we made to hold different styling for various views
const styles = StyleSheet.create({ // stylsheet.create better for performance
    // fields/styles for views
    // refer to the function above to see how these are used
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    grid: {
        marginHorizontal: 5,
    },
    
    row: {
        flexDirection: 'row',
    },

    sectionTitle: {
        fontSize: 25,
        fontWeight: 500,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    },
    
    badgeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})