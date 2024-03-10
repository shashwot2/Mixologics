import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const categories = ['Spirits', 'Mixers', 'Fruits', 'Herbs', 'Flavoring'];

const MyBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabsContainer}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => setActiveCategory(category)}
          style={[styles.tab, activeCategory === category && styles.activeTab]}>
          <Text style={styles.tabText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default MyBar;
