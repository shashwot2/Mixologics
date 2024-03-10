import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MyBar from '@components/MyBar/MyBar'; // The screen you want to show
import Icon from 'react-native-vector-icons/Ionicons'; // If you want icons

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyBar"
        component={MyBar}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="wine" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
