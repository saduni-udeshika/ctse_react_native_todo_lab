import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import auth from "@react-native-firebase/auth"

import Home from "./Screens/Home"
import Details from "./Screens/Details"
import Login from "./Screens/Login"
import SignUp from "./Screens/SignUp"

const Stack = createStackNavigator()

export default function App() {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }
  return (
    <NavigationContainer style={StyleSheet.container}>
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
      <Stack.Navigator 
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
})
