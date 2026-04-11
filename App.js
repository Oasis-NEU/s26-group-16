import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/TabNav'
import { useState, useEffect } from 'react'
import { supabase } from './src/lib/supabase'
import AuthScreen from './src/screens/AuthScreen'

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
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}