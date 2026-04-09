// import function from homescreen
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/TabNav'
import { useState, useEffect } from 'react'
import { supabase } from './src/lib/supabase'
import AuthScreen from './src/screens/AuthScreen'

// main function/entry point to start app's frontend
// will be called on expo's servers
export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    // Container for main navigation (i.e the bottom tab)
    <NavigationContainer>
      {/* Shows authentication screen on first login */}
      {session ? <TabNavigator /> : <AuthScreen />}
    </NavigationContainer>
  )
}