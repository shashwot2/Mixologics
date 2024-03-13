import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const categories = ['Spirits', 'Mixers', 'Fruits', 'Herbs', 'Flavoring'];
const MyBar: React.FC = () => {
const [activeCategory, setActiveCategory] = useState('Spirits');
const dummyData = {
   "Spirits": [
    {
      "id": "001",
      "name": "Vodka",
      "category": "plain",
      "icon": "@assets/mybaricons/vodka.png"
    },
    {
      "id": "002",
      "name": "Champagne",
      "category": "sparkling",
      "icon": "@assets/mybaricons/champagne.png"
    },
    {
      "id": "003",
      "name": "Whisky",
      "category": "scotch",
      "icon": "@assets/mybaricons/whisky.png"
    }
  ],
  "Mixers": [
  {
  "id":"001",
  "name":"Coke",
  "category":"soda",
  "icon":"@assets/mybaricons/coke.png"}],
  "Fruits": [],
  "Herbs": [],
  "Flavorings": [],
  };
  const activeItems = dummyData[activeCategory];
// Function to resolve the correct image
const resolveIcon = (iconPath) => {
  const iconName = iconPath.split('/').pop();
  
  const iconMap = {
    'vodka.png': require('@assets/mybaricons/vodka.png'),
    'champagne.png': require('@assets/mybaricons/champagne.png'),
    'whisky.png': require('@assets/mybaricons/whisky.png'),
    'coke.png': require('@assets/mybaricons/coke.jpg'),
  };
  return iconMap[iconName];
};
  return (
  <View style={styles.container}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabsContainer}>
      {categories.map(category => {
        const isActive = activeCategory === category;
        return (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            style={[
              styles.tab,
              activeCategory === category && styles.activeTab,
            ]}>
            {isActive ? (
              <LinearGradient
                colors={['#FF34D3', '#0094FF']}
                style={styles.gradient}>
                <Text style={styles.tabText}>{category}</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.tabText}>{category}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
<FlatList
  data={activeItems}
  keyExtractor={item => item.id}
  contentContainerStyle={{ flexGrow:1, justifyContent:'flex-start' }}
  style={styles.flatlist}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={resolveIcon(item.icon)} style={styles.icon} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  )}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#0A0A0A',
},
flatList: {
},
  tabsContainer: {
    backgroundColor: '#1A1A1A',
  },
  tab: {
    height: 30,
    marginRight: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Match this to the tab's borderRadius
    paddingHorizontal: 16,
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});
export default MyBar;
