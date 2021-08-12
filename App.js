import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Src/Pages/Login'
import Sign from './Src/Pages/Signup'
import AddParking from './Src/Pages/Addparking'
import Customer from './Src/Pages/CustomerDashboard'
import Owner from './Src/Pages/ownerDashboard'
import ShowParking from './Src/Pages/Showparking'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="AddParking" component={AddParking} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="Owner" component={Owner} />
        <Stack.Screen name="ShowParking" component={ShowParking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}