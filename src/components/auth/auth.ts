import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { useUser } from '@components/auth/authContext';
export const onAuthStateChanged = (
  callback: (user: FirebaseAuthTypes.User | null) => void,
): (() => void) => {
  return auth().onAuthStateChanged(callback);
};
GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
});

export const signInWithGoogle = async (setUser): Promise<FirebaseAuthTypes.UserCredential | null> => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    if (userCredential.user) {
      setUser({
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                photoURL: userCredential.user.photoURL,
                email: userCredential.user.email,
            });
    }
    return userCredential;
  } catch (error) {
    console.error('SignIn with Google failed:', error);
    throw error;  // Re-throw the error to handle it in the calling code
  }
};