import { BottomTabView } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const categories = ['Spirits', 'Mixers', 'Fruits', 'Herbs', 'Flavoring'];
const MyBarHeader = ({ onAdd }) => (
  <View style={styles.headerContainer}>
    <View style={styles.headerTextContainer}>
      <Text style={styles.myBarText}>My Bar</Text>
      <Text style={styles.ingredientsText}>Ingredients</Text>
    </View>
    <TouchableOpacity onPress={onAdd} style={styles.addHeaderButton}>
      <Text style={styles.addHeaderText}>+</Text>
    </TouchableOpacity>
  </View>
);
const MyBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Spirits');
  const [isModalVisible, setModalVisible] = useState(false);
  const dummyData = {
    Spirits: [
      {
        id: '001',
        name: 'Vodka',
        category: 'plain',
        icon: '@assets/mybaricons/vodka.png',
      },
      {
        id: '002',
        name: 'Champagne',
        category: 'sparkling',
        icon: '@assets/mybaricons/champagne.png',
      },
      {
        id: '003',
        name: 'Whisky',
        category: 'scotch',
        icon: '@assets/mybaricons/whisky.png',
      },
    ],
    Mixers: [
      {
        id: '001',
        name: 'Coke',
        category: 'soda',
        icon: '@assets/mybaricons/coke.png',
      },
    ],
    Fruits: [{
        id: '001',
        name: 'Coke',
        category: 'soda',
        icon: '@assets/mybaricons/coke.png',
      },
    ],
    Herbs: [
{
        id: '001',
        name: 'Coke',
        category: 'soda',
        icon: '@assets/mybaricons/coke.png',
      },
    ],
    Flavorings: [
{
        id: '001',
        name: 'Coke',
        category: 'soda',
        icon: '@assets/mybaricons/coke.png',
      },
    ],
  };
  const activeItems = dummyData[activeCategory];
  const addItem = category => {
    toggleModal(category);
  };
  const toggleModal = category => {
    setModalVisible(!isModalVisible);
  };
  // Function to resolve the correct image
  const resolveIcon = iconPath => {
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
            <View style={styles.tabView} key={category}>
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
            </View>
          );
        })}
      </ScrollView>
      <FlatList
        data={activeItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <MyBarHeader onAdd={() => addItem(activeCategory)} />
        }
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={resolveIcon(item.icon)} style={styles.icon} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.fullScreenCentered}
          onPress={toggleModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={e => e.stopPropagation()}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                style={styles.inputBox}
              // value={name}
              />

              <Text style={styles.modalText}>Category</Text>
              <TextInput
                style={styles.inputBox}
              //        value={categories}
              />
              <Text style={styles.modalText}>Photo</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={toggleModal}>
                <Text style={styles.textStyle}>Add</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050C1C',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  myBarText: {
    fontSize: 24,
    color: 'white',
  },
  ingredientsText: {
    fontSize: 18,
    color: '#818B99',
  },
  addHeaderText: {
    color: '#818B99',
    fontSize: 30,
  },
  tabsContainer: {
    height: 115,
    width: '100%',
    backgroundColor: '#141B25',
    flexDirection: 'row',
    bottom: 0,
  },
  tab: {
    top: 60,
    height: 30,
    marginRight: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addHeaderButton:{
    backgroundColor: '#141B25',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:40,
    width:40,
    height:40,
  },
  tabView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  gradient: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: 400,
    backgroundColor: '#141B25',
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
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#050C1C',
    borderRadius: 20,
    paddingBottom: '30%',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    textAlign: 'left',
  },
  fullScreenCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  inputBox: {
    backgroundColor: '#141B25',
    color: 'white',
    borderRadius: 10,
    height: 15,
    fontSize: 18,
    padding: 15,
    marginBottom: 20,
  },

});
export default MyBar;
