import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-screens';
import whisky from '@assets/mybaricons/whisky.png'
import vodka from '@assets/mybaricons/vodka.png'
import photo from '@assets/photo.png'
import myrecipes from '@assets/myrecipes-active.png'
import profile from '@assets/profile.png'

const RecipeCard = ({ title, image, onDelete }) => (
  <View style={styles.recipeCardContainer}>
    <Image source={image} style={styles.recipeImage} />
    <Text style={styles.recipeTitle}>{title}</Text>
    {onDelete && (
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    )}
  </View>
);

const AddPost: React.FC = () => {
  const [creations, setCreations] = useState([
    { id: '1', title: 'Bloody Mary', image: whisky },
    { id: '2', title: 'Vodka', image: vodka }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCreations = creations.filter((creation) =>
    creation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (text:string) => {
    setSearchQuery(text);
  };
  const [selectedRecipes, setSelectedRecipes] = useState([]);


  const handleSelectRecipe = (recipe) => {
    const isRecipeSelected = selectedRecipes.some((selected) => selected.id === recipe.id);

    if (isRecipeSelected) {
      setSelectedRecipes(selectedRecipes.filter((selected) => selected.id !== recipe.id));
    } else {
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  const handleDeleteRecipe = (recipeId) => {
    setSelectedRecipes(selectedRecipes.filter((recipe) => recipe.id !== recipeId));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Back Icon</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Post</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.inputAreaText} placeholder="Add a description..." placeholderTextColor="#818B99" />
      </View>
      <View style={styles.smallRecipes}>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Image source={photo} style={styles.posticons} />
            <Text style={{ color: 'white', paddingLeft: 5 }}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image source={myrecipes} style={styles.posticons} />
            <Text style={{ color: 'white', paddingLeft: 5 }}>Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image source={profile} style={styles.posticons} />
            <Text style={{ color: 'white', paddingLeft: 5 }}>Tag</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.searchbar}
          placeholder="Search the recipe here..."
          placeholderTextColor="#818B99"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Text style={styles.sectionTitle}>Selected Recipes</Text>
      <ScrollView horizontal style={{ flexDirection: 'row' }}>
        {selectedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            onDelete={() => handleDeleteRecipe(recipe.id)} // Pass the delete function
          />
        ))}
      </ScrollView>
      <Text style={styles.yourCreations}>Your Creations</Text>
      <ScrollView horizontal style={{ flexDirection: 'row' }}>
        {filteredCreations.map((creation) => (
          <TouchableOpacity
            key={creation.id}
            onPress={() => handleSelectRecipe(creation)}
            style={[
              styles.recipeCard,
              selectedRecipes.some((selected) => selected.id === creation.id)
                ? styles.selectedRecipeCard
                : null,
            ]}
          >
            <RecipeCard title={creation.title} image={creation.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#0E1621",
  },
  inputArea: {
    padding: 10,
    height: '30%',
    backgroundColor: "#050C1C"
  },
  recipeCardContainer: {
    position:'relative',
    margin: 10,
  },
  inputAreaText: {
  },
  recipeImage: {
    width: 50,
    height: 50,
  },
  recipeTitle: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#141B25",
    width: '100%',
    padding: 10,
    paddingTop: 65,
  },
  headerText: {
    color: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  searchbar: {
    backgroundColor: "#242934",
    margin: 20,
    borderRadius: 5,
  },
  smallRecipes: {
    flex: 1,
    backgroundColor: "#141B25",
    padding: 10,

  },
  yourCreations: {
    color: "#818B99",
  },
  posticons: {
    width: 30,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedRecipeCard: {
    borderColor: 'white',
    borderWidth: 0.5,
  },
  
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  recipeCard: {
    marginRight: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 0, 
    right: 0,
    backgroundColor: 'white',
    borderRadius: 7.5, 
    width: 15,
    height: 15, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteButtonText: {
    color: 'black',
    fontSize: 8,
    fontWeight: 'bold', 
  },
};

export default AddPost;
