import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-screens';
import whisky from '@assets/mybaricons/whisky.png'
import vodka from '@assets/mybaricons/vodka.png'
import photo from '@assets/photo.png'
import myrecipes from '@assets/myrecipes-active.png'
import profile from '@assets/profile.png'
const RecipeCard = ({ title, image }) => (
  <View style={styles.recipeCardContainer}>
    <Image source={ image } style={styles.recipeImage} />
    <Text style={styles.recipeTitle}>{title}</Text>
  </View>
);

const AddPost: React.FC = () => {
  const [creations, setCreations] = useState([
    { id: '1', title: 'Bloody Mary', image: whisky },
    { id: '2', title: 'Vodka', image: vodka}
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCreations = creations.filter((creation) =>
    creation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
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
          <TouchableOpacity>
            <Image source={photo} />
            <Text style={{color:'white'}}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={myrecipes} style={{width:30,length:30}}/>
            <Text style={{color:'white'}}>Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={profile} style={{width:30,length:30}}/>
            <Text style={{color:'white'}}>Tag</Text>
          </TouchableOpacity>
        </View>

        <TextInput
        style={styles.searchbar}
        placeholder="Search the recipe here..."
        placeholderTextColor="#818B99"
        value={searchQuery}
        onChangeText={handleSearch} 
      />
        <ScrollView horizontal>
        </ScrollView>
        <Text style={styles.yourCreations}>Your Creations</Text>
        <ScrollView horizontal style={{ flexDirection: 'row' }}>
        {filteredCreations.map((creation) => (
          <RecipeCard key={creation.id} title={creation.title} image={creation.image} />
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
    height: '45%',
    backgroundColor: "#050C1C"
  },
  recipeCardContainer: {
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
  yourCreations:{
    color: "#818B99",
  }
};

export default AddPost;
