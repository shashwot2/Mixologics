import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet, Alert, Button, ImageBackground } from 'react-native';
import { signInWithGoogle } from '@auth/auth';
import { useUser } from '@components/auth/authContext';
import GradientText from '@components/utils/LinearGradient';

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
      <ImageBackground
        source={require('@assets/logo.png')}
        style={styles.container}
        resizeMode="stretch"
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Sign in to continue</Text>
          <Button
            title='Sign in with google'
            style={{ width: 192, height: 48, color: '#141B25' }}
            onPress={handleGoogleSignIn}
          >Sign in with google</Button>
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default LoginScreen;
