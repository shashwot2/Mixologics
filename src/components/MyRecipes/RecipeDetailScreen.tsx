import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.image}/>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.description}>Base: {recipe.base}</Text>
      <Text style={styles.description}>Servings: {recipe.servings}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  }
});

export default RecipeDetailScreen;
