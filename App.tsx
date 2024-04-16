import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import {onAuthStateChanged} from '@auth/auth';
import {UserProvider} from '@auth/authContext';
import HomeScreen from '@components/HomeScreen/HomeScreen';
import LoginScreen from '@components/LoginScreen/LoginScreen';
import {Text, View} from 'react-native';
const Stack = createStackNavigator();
const App: React.FC = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscriber = onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
    </SafeAreaView>
  );
};

export default App;
