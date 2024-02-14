import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {onAuthStateChanged, signInWithGoogle} from './src/components/auth/auth';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
const App: React.FC = () => {
  useEffect(() => {
    const subscriber = onAuthStateChanged(user => {
      if (user) {
        console.log('The user is signed in');
      } else {
        console.log('Nope');
      }
    });
    return subscriber;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to the Firebase Test App</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => signInWithGoogle()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
