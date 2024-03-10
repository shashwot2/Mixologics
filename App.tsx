import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {onAuthStateChanged} from '@auth/auth';
const Stack = createStackNavigator();

import HomeScreen from './src/components/HomeScreen/HomeScreen';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import {Text, View} from 'react-native';
const App: React.FC = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscriber = onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
      <NavigationContainer>
      <Stack.Navigator>
      {user ? (
      	<Stack.Screen name="Home" component={HomeScreen} />
	) : (
	<Stack.Screen name="Login" component={LoginScreen} />
	)}
            </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
