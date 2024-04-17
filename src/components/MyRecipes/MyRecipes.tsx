import GradientText from '@components/utils/LinearGradient';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Config from 'react-native-config';


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
    const baseUrl = "https://pub-6d9459f727474eb0a721f2528d5ae857.r2.dev/";
    if (typeof path !== 'string') {
      path = String(path);
    }
    if (typeof path === 'string' && path.startsWith('uploads/')) {
      return { uri: `${baseUrl}${encodeURIComponent(path)}` };  // Create a full URL for the image
    }

    const assetMap = {
      '@assets/recipes/manhattan/manhattan.png': require('@assets/recipes/manhattan/manhattan.png'),
      '@assets/recipes/manhattan/step2.png': require('@assets/recipes/manhattan/step2.png'),
      '@assets/recipes/manhattan/step3.png': require('@assets/recipes/manhattan/step3.png'),
      '@assets/recipes/bellini.png': require('@assets/recipes/bellini.png'),
      '@assets/recipes/bloodymary.png': require('@assets/recipes/bloodymary.png'),
    };

    const requirePattern = /^require\(['"](@assets\/[^'"]+)['"]\)$/;
    const match = path.match(requirePattern);
    if (match) {
      return assetMap[match[1]];  // Using match[1] which is the captured path
    } else if (typeof path === 'string' && path.match(/^https?:\/\//)) {
      return { uri: path };
    } else if (path in assetMap) {
      return assetMap[path];
    } else if (typeof path === 'string') {
      return path;
    }

    return require('@assets/placeholder.png'); // Fallback if nothing matches
  };
  const handleDelete = (recipeId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this recipe?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            axios.delete(`http://${Config.ip}:3000/api/recipes/${recipeId}`)
              .then(response => {
                console.log('Recipe deleted:', response);
                setRecipes(currentRecipes => currentRecipes.filter(recipe => recipe.recipeId !== recipeId));
              })
              .catch(error => {
                console.error('Failed to delete the recipe:', error);
                Alert.alert('Error', 'Failed to delete the recipe.');
              });
          }
        }
      ]
    );
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
          {item.category === 'Created' && (
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.recipeId)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          )}
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
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`http://${Config.ip}:3000/api/recipes`);
      if (response.status === 200) {
        setRecipes(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
    }
  };
  //For when the user goes it the first time
  useEffect(() => {
    fetchRecipes();
  }, []);
  // for navigation through to children pages
  useFocusEffect(
    useCallback(() => {
      fetchRecipes();
      return () => { };
    }, [])
  );
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
        <View style={styles.filterButtons}>
          <TouchableOpacity onPress={() => setSelectedCategory('Classic')}>
            {selectedCategory === 'Classic' ? (
              <GradientText style={{ marginTop: 5, fontFamily: 'Roboto', fontSize: 16 }}>Classic</GradientText>
            ) : (
              <Text style={styles.headerText} >Classic</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('Saved')}>
            {selectedCategory === 'Saved' ? (
              <GradientText style={{ marginTop: 5, fontFamily: 'Roboto', fontSize: 16 }}>Saved</GradientText>
            ) : (
              <Text style={[styles.headerText,]}>Saved</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('Created')}>
            {selectedCategory === 'Created' ? (
              <GradientText style={{ marginTop: 5, fontFamily: 'Roboto', fontSize: 16 }}>Created</GradientText>
            ) : (
              <Text style={[styles.headerText,]}>Created</Text>
            )}
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
  deleteButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 15,
    zIndex: 2,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
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
  header: {
    backgroundColor: '#141B25',
    width: '100%',
    paddingVertical: 20,
  },
  filterbuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    paddingVertical: 25,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white'
  },
  searchbar: {
    backgroundColor: "#242934",
    marginHorizontal: 20,
    marginBottom: 10,
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
