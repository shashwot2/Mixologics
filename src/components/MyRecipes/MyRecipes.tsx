import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ItemSeparator = () => (
  <View style={{ height: 20 }} />
);
const MyRecipes: React.FC = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    {
      recipeId: '1',
      name: 'Manhattan',
      base: 'Rye',
      servings: 2,
      steps: [
        {
          "stepNumber": 1,
          "description": "Gather all ingredients."
        },
        {
          "stepNumber": 2,
          "description": "Mix the rye and sweet vermouth in a mixing glass with ice.",
          "image": require('@assets/recipes/manhattan/step2.png')
        },
        {
          "stepNumber": 3,
          "description": "Stir well and strain into a chilled cocktail glass.",
          "image": require('@assets/recipes/manhattan/step3.png')
        },
        {
          "stepNumber": 4,
          "description": "Garnish with a cherry.",
        }
      ],
      category: 'Classic',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/manhattan/manhattan.png')
    },
    {
      recipeId: '2',
      name: 'Bellini',
      base: 'Prosecco',
      servings: 4,
      steps: [],
      category: 'Classic',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/bellini.png')
    },
    {
      recipeId: '3',
      name: 'Bloody Mary',
      base: 'Vermouth',
      servings: 2,
      steps: [],
      category: 'Classic',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/bloodymary.png')
    },
    {
      recipeId: '4',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      steps: [],
      category: 'Classic',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/manhattan/manhattan.png')
    },
    {
      recipeId: '5',
      name: 'Bellini',
      base: 'Vermouth',
      servings: 2,
      steps: [],
      category: 'Created',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/bellini.png')
    },
    {
      recipeId: '6',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      steps: [],
      category: 'Created',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/manhattan/manhattan.png')
    },
    {
      recipeId: '7',
      name: 'Manhattan',
      base: 'Vermouth',
      servings: 2,
      steps: [],
      category: 'Saved',
      ingredients: ["2 oz Rye", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", "1 Cherry for garnish",],
      image: require('@assets/recipes/manhattan/manhattan.png')
    },
  ]);
  const resolveAsset = (path) => {
    console.log('path:', path);

    const assetMap = {
      '@assets/recipes/manhattan/manhattan.png': require('@assets/recipes/manhattan/manhattan.png'),
      '@assets/recipes/manhattan/step2.png': require('@assets/recipes/manhattan/step2.png'),
      '@assets/recipes/manhattan/step3.png': require('@assets/recipes/manhattan/step3.png'),
      '@assets/recipes/bellini.png': require('@assets/recipes/bellini.png'),
      '@assets/recipes/bloodymary.png': require('@assets/recipes/bloodymary.png'),
    };

    const requirePattern = /^require\(['"](@assets\/[^'"]+)['"]\)$/;  // This regex should now correctly match and capture the path
    const match = path.match(requirePattern);
    console.log('Regex match:', match);

    if (match) {
      console.log('Matched path:', match[1]);
      return assetMap[match[1]];  // Using match[1] which is the captured path
    } else if (typeof path === 'string' && path.match(/^https?:\/\//)) {
      console.log('URL:', path);
      return { uri: path };
    } else if (path in assetMap) {
      console.log('Direct map access:', path);
      return assetMap[path];
    } else if (typeof path === 'string') {
      console.log('Fallback URI:', path);
      return { uri: path };
    }

    console.log('Using placeholder for path:', path);
    return require('@assets/placeholder.png'); // Fallback if nothing matches
  };

  const renderRecipe = ({ item }) => {
    const imageSource = resolveAsset(item.image);

    const stepsWithResolvedImages = item.steps.map(step => ({
      ...step,
      image: step.image ? resolveAsset(step.image) : null
    }));

    return (
      <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: { ...item, image: imageSource, steps: stepsWithResolvedImages } })}>
        <View style={styles.recipeContainer}>
          <Image style={styles.recipeCoverImg} source={imageSource} />
          <View style={styles.cocktailDetails}>
            <Text style={styles.cocktailName}>{item.name}</Text>
            <Text style={styles.cocktailBase}>Main Base: {item.base}</Text>
            <Text style={styles.cocktailServings}>Servings: {item.servings}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const AddNewRecipeButton = ({ onPress }) => (
    <TouchableOpacity style={styles.addNewRecipeButton} onPress={onPress}>
      <Text style={styles.addNewRecipeText}>+</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://192.168.1.172:3000/api/recipes');
        if (response.status === 200) {
          setRecipes(response.data);
          console.log('Recipes fetched:', response.data[0].image);
        }
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('Classic');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredRecipes = recipes.filter(recipe => {
    return (
      (recipe.category === selectedCategory) &&
      (recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.base.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
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
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.RecipeId}
        contentContainerStyle={styles.recipesContainer}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={selectedCategory === 'Created' ? () => <AddNewRecipeButton onPress={() => navigation.navigate('AddNewRecipe')} /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addNewRecipeButton: {
    height: 196,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141B25',
    marginVertical: 10,
    marginTop: 20,
  },
  addNewRecipeText: {
    fontSize: 72,
    color: '#fff',
    fontWeight: 'bold',
  },
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
