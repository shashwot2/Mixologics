import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const MyRecipes: React.FC = () => {
  return (
    <View style={styles.recipesContainer}>
      <View style={styles.screenSection}>
        <View style={styles.recipeContainer}>
          <Image style={styles.recipeCoverImg} source={require('@assets/manhattan.png')}/>
          <View style={styles.cocktailDetails}>
            <Text style={styles.cocktailName}>Manhattan</Text>
            <Text style={styles.cocktailBase}>Main Base: Vermouth</Text>
            <Text style={styles.cocktailServings}>Servings: 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipesContainer: {
    height: '100%',
    backgroundColor: '#050C1C'
  },
  screenSection: {
    padding: 24,
  },
  text: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'center'
  },
  recipeContainer: {
    width: 'calc(100% - 48px)',
    height: 196,
    borderRadius: 8,
    overflow: 'hidden',
    border: 'none',
  },
  recipeCoverImg: {
    width: '100%',
    height: '100%',
    margin: 0,
    resizeMode: 'cover',
  },
  cocktailDetails: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  cocktailName: {
    width: '100%',
    height: 104,
    paddingTop: 24,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 8,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 32,
    lineHeight: 72,
  },
  cocktailBase: {
    width: '100%',
    height: 40,
    paddingLeft: 16,
    paddingRight: 8,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 40,
  },
  cocktailServings: {
    width: '100%',
    height: 52,
    paddingLeft: 16,
    paddingBottom: 20,
    paddingRight: 8,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 32,
  },
});

export default MyRecipes;
