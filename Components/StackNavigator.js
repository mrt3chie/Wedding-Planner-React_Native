import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


const StackNavigator = () => {
    const Stack = createStackNavigator();
  
    return (
        <NavigationContainer>
            <Stack.Navigator>
            </Stack.Navigator>
        </NavigationContainer>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({})