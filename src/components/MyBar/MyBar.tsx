import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const categories = ['Spirits', 'Mixers', 'Fruits', 'Herbs', 'Flavoring'];
const MyBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
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
  );
};
const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
  },
  tab: {
    height: 30,
    marginRight: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Match this to the tab's borderRadius
    paddingHorizontal: 16,
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
});
export default MyBar;
