import React, { useState } from 'react';
import { FlatList, TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ItemSeparator = () => (
  <View style={{ height: 20 }} /> 
);
const MyRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      name: 'Manhattan',
      base: 'Rye',
      servings: 2,
      category: 'Classic',
      image: require('@assets/recipes/manhattan.png')
    },
    {
      id: '2',
      name: 'Bellini',
      base: 'Prosecco',
      servings: 4,
      category: 'Classic',
      image: require('@assets/recipes/bellini.png')
    },
    {
      id: '3',
      name: 'Bloody Mary',
      base: 'Vermouth',
      servings: 2,
      category: 'Classic',
      image: require('@assets/recipes/bloodymary.png')
    },
    {
      id: '4',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      category: 'Classic',
      image: require('@assets/recipes/manhattan.png')
    },
    {
      id: '5',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      category: 'Classic',
      image: require('@assets/recipes/manhattan.png')
    },
    {
      id: '6',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      category: 'Created',
      image: require('@assets/recipes/manhattan.png')
    },
    {
      id: '7',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      category: 'Saved',
      image: require('@assets/recipes/manhattan.png')
    },
  ]);
  const renderRecipe = ({ item }) => (
    <View style={styles.recipeContainer}>
      <Image style={styles.recipeCoverImg} source={item.image} />
      <View style={styles.cocktailDetails}>
        <Text style={styles.cocktailName}>{item.name}</Text>
        <Text style={styles.cocktailBase}>Main Base: {item.base}</Text>
        <Text style={styles.cocktailServings}>Servings: {item.servings}</Text>
      </View>
    </View>
  );

  const [selectedCategory, setSelectedCategory] = useState('Classic');
  const filteredRecipes = recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.filterbuttons}>
          <TouchableOpacity onPress={() => setSelectedCategory('Classic')}>
            <Text style={[styles.headerText, selectedCategory === 'Classic' && styles.activeHeaderText]}>Classic</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('Saved')}>
            <Text style={[styles.headerText, selectedCategory === 'Saved' && styles.activeHeaderText]}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('Created')}>
            <Text style={[styles.headerText, selectedCategory === 'Created' && styles.activeHeaderText]}>Created</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchbar}
          placeholder="Search"
          placeholderTextColor="#818B99"
        />
      </View>
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.recipesContainer}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050C1C',
  },
  activeHeaderText: {
    color: '#FFD700',
  },

  header: {
    backgroundColor: '#141B25',
    width: '100%',
    paddingVertical: 5,
  },
  filterbuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    paddingTop: 65,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white'
  },
  searchbar: {
    backgroundColor: "#242934",
    margin: 20,
    height: 40,
    paddingLeft: 10,
    color: '#818B99',
  },
  recipesContainer: {
    flexGrow: 1,
    backgroundColor: '#050C1C',
    paddingHorizontal: 10,
    paddingTop: 20,
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
    overflow: 'hidden',
    height: 196,
    borderRadius: 8,
  },
  recipeCoverImg: {
    width: '100%',
    height: '100%',
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
