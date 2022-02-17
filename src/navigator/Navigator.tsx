import React from 'react'
import Home from '../screens/Home';
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Tabs = createNativeStackNavigator()


export default function Navigator() {
  return (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home}/>
    </Tabs.Navigator>
  )
}
