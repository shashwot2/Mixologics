import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyBar from '@components/MyBar/MyBar';
import MyRecipes from '@components/MyRecipes/MyRecipes';
import MediaHome from '@components/MediaHome/MediaHome';
import AddPost from '@components/AddPost/AddPost';
import Profile from '@components/Profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetailScreen from '@components/MyRecipes/RecipeDetailScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const RecipesStack = createStackNavigator();
function MyRecipesStack() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="MyRecipesList"
        component={MyRecipes}
        options={{ headerShown: false }}
      />
      <RecipesStack.Screen
        name="RecipeDetails"
        component={RecipeDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </RecipesStack.Navigator>
  );
}
function getTabBarVisibility(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;

  const hideOnScreens = ['RecipeDetails', 'AddPost'];
  return hideOnScreens.includes(routeName) ? 'none' : 'flex';
}

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
          return <Image source={uri} style={{ width: size, height: size }} />;
        },
        tabBarStyle: {
          backgroundColor: '#141B25',
          borderTopWidth: 0,
          display: getTabBarVisibility(route),
        },
      })}>
      <Tab.Screen
        name="MediaHome"
        component={MediaHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyRecipes"
        component={MyRecipesStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyBar"
        component={MyBar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
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
});

export default HomeScreen;
