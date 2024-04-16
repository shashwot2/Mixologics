import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {signInWithGoogle} from '@auth/auth';
import { useUser } from '@components/auth/authContext';

const LoginScreen: React.FC = () => {
  const { setUser } = useUser();
  const handleGoogleSignIn = () => {
    signInWithGoogle(setUser)
      .then((userCredential) => {
        if (!userCredential) {
          Alert.alert('Sign In Failed', 'No user data received.');
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
        Alert.alert('Login Error', 'Failed to sign in with Google.');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to Mixologics!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignIn}
        />
      </View>
    </SafeAreaView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default LoginScreen;
