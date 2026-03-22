// Navigation for main bottom tab

// imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import WorkoutScreen from '../screens/WorkoutsScreen'
import StatsScreen from '../screens/StatsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MoreScreen from '../screens/MoreScreen'

// in C++, it's like creating a const pointer
// you can't change what it's pointing too,
// but fields are mutable
const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            {/* "Name" lets you identify the screen you need to access later
            and components is the screen you're putting into the navigators */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Workout" component={WorkoutScreen} />
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    )
}