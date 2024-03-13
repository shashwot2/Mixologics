import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MyBar from '@components/MyBar/MyBar';
import MyRecipes from '@components/MyRecipes/MyRecipes';
import MediaHome from '@components/MediaHome/MediaHome';
import AddPost from '@components/AddPost/AddPost';
import Profile from '@components/Profile/Profile';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let uri;
          if (route.name === 'MediaHome') {
            uri = focused
              ? require('@assets/mediahome-active.png')
              : require('@assets/mediahome.png');
          } else if (route.name === 'MyRecipes') {
            uri = focused
              ? require('@assets/myrecipes-active.png')
              : require('@assets/myrecipes.png');
          } else if (route.name === 'AddPost') {
            uri = require('@assets/addpost.png');
          } else if (route.name === 'MyBar') {
            uri = focused
              ? require('@assets/mybar-active.png')
              : require('@assets/mybar.png');
          } else if (route.name === 'Profile') {
            uri = focused
              ? require('@assets/profile-active.png')
              : require('@assets/profile.png');
          }

          return <Image source={uri} style={{width: size, height: size}} />;
        },
      })}>
      <Tab.Screen name="MediaHome" component={MediaHome} />
      <Tab.Screen name="MyRecipes" component={MyRecipes} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="MyBar" component={MyBar} />
      <Tab.Screen name="Profile" component={Profile} />
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
