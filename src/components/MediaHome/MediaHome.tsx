import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import testprofile from '@assets/profile/testprofile.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const postsData = [
  {
    id: '1',
    username: 'Consectetur',
    userProfilePic: testprofile,
    postImage: testprofile,
    likesCount: '13',
    commentsCount: '4',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: '2',
    username: 'Consectetur 2',
    userProfilePic: testprofile,
    postImage: testprofile,
    likesCount: '26',
    commentsCount: '8',
    caption: 'Pellentesque habitant morbi tristique...',
  },
  {
    id: '3',
    username: 'Consectetur 3',
    userProfilePic: testprofile,
    postImage: testprofile,
    likesCount: '39',
    commentsCount: '12',
    caption: 'Sed do eiusmod tempor incididunt...',
  },
];
const MediaHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredPosts = postsData.filter(post =>
    post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image style={styles.postProfilePic} source={item.userProfilePic} />
        <Text style={styles.postUsername}>{item.username}</Text>
        <TouchableOpacity style={styles.postOptions}>
          <Icon name="ellipsis-h" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <Image style={styles.postImage} source={item.postImage} />

      <View style={styles.postInteractions}>
        <TouchableOpacity>
          <Icon name="heart" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.likesCount}>{item.likesCount}</Text>
        <TouchableOpacity>
          <Icon name="comment" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.commentsCount}>{item.commentsCount}</Text>
      </View>

      <Text style={styles.postCaption}>
        {item.caption}
        <Text style={styles.moreText}>more</Text>
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPosts}
        style={styles.FlatList}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.filterbuttons}>
                <TouchableOpacity>
                  <Text style={styles.headerText}>Followed</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>New</Text>
                <TouchableOpacity>
                  <Text style={styles.headerText}>Featured</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.searchbar}
                placeholder="Search"
                placeholderTextColor="#818B99"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
          </>
        } />
    </View>
  )
};
const styles = {
  FlatList: {
    flex: 1,
    backgroundColor: '#050C1C',
  },
  container: {
    flex: 1,
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
  postCard: {
    backgroundColor: '#252630',
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    color: 'white',
    flex: 1,
  },
  postOptions: {
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postInteractions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  likesCount: {
    color: 'white',
    marginRight: 10,
  },
  commentsCount: {
    color: 'white',
    marginLeft: 5,
  },
  postCaption: {
    color: 'white',
    padding: 10,
  },
  moreText: {
    color: 'white',
    fontWeight: 'bold',
  },
};
export default MediaHome;
