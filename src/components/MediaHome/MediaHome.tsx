import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';


const MediaHome: React.FC = () => {
  return (
        <ScrollView>
        <Image source={require('@assets/post_feed_media.png')}  style={{width: 400, height: 550, resizeMode: 'contain', alignSelf: 'center'}}/>
        <Image source={require('@assets/post_feed_media2.png')}  style={{width: 400, height: 550, resizeMode: 'contain', alignSelf: 'center'}}/>

         </ScrollView>
         );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    color: 'black',
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 1,
    margin: 24,
  },
  wrapperHorizontal: {
    height: 54,
    justifyContent: 'center',
    color: 'black',
    marginBottom: 12,
  },
  itemStyleHorizontal: {
    marginRight: 10,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemSelectedStyleHorizontal: {
    borderWidth: 2,
    borderColor: '#DAA520',
  },
  platformContainer: {
    marginTop: 8,
    borderTopWidth: 1,
  },
  platformContainerTitle: {
    marginTop: 8,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
});

export default MediaHome;
