// import function from homescreen
import HomeScreen from './src/screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './src/navigation/TabNav'

// main function/entry point to start app's frontend
// will be called on expo's servers
export default function App() {
  return (
    // Container for main navigation (i.e the bottom tab)
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}