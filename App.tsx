import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from '@auth/auth';
import { UserProvider, useUser } from '@auth/authContext';
import HomeScreen from '@components/HomeScreen/HomeScreen';
import LoginScreen from '@components/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { user } = useUser();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContent />
      </SafeAreaView>
    </UserProvider>
  );
};

const AppContent = () => {
  const { setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return subscriber;
  }, []);

  if (loading) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" /></View>;
  }

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
