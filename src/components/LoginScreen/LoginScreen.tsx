import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {signInWithGoogle} from '@auth/auth'; // Adjust the path as necessary

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to the App!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <GoogleSigninButton
          style={{width: 192, height: 48}} // You can adjust the size as needed
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
        />
        {/* You can add more sign-in options here */}
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
