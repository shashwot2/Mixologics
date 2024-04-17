import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUser } from '@components/auth/authContext';
import testprofile from '@assets/profile/testprofile.png';
import emperor from '@assets/profile/emperorofman.jpg';
import techpriestintial from '@assets/profile/techpriestinitial.jpg';
import necronomicon from '@assets/profile/necronomicon.jpg';
import khorne from '@assets/profile/khorne.jpg';
import heretek from '@assets/profile/heretek.jpg';

const postsData = [
  {
    id: '2',
    username: 'Consectetur 2',
    userProfilePic: testprofile,
    postImage: techpriestintial,
    likesCount: '150',
    commentsCount: '20',
    caption: 'The adeptus mechanicus have homed me and showed me the certainity of steel',
  },
  {
    id: '1',
    username: 'Consectetur',
    userProfilePic: testprofile,
    postImage: emperor,
    likesCount: '200k',
    commentsCount: '0',
    caption: 'The Emperor Protects... Long live the reincarnation of the Omnissiah',
  },
  
  {
    id: '3',
    username: 'Consectetur 3',
    userProfilePic: testprofile,
    postImage: necronomicon,
    likesCount: '5',
    commentsCount: '5003',
    caption: 'I found this book, knowledge cant be dangerous right? ',
  },
   {
    id: '4',
    username: 'Consectetur 3',
    userProfilePic: testprofile,
    postImage: khorne,
    likesCount: '666',
    commentsCount: '666',
    caption: 'Blood for the blood god!',
  },
    {
    id: '5',
    username: 'Consectetur 3',
    userProfilePic: testprofile,
    postImage: heretek,
    likesCount: '666',
    commentsCount: '666',
    caption: `Vex'halah nar qorlash!`,
  },
];
  const Profile: React.FC = ({ }) => {
    const { user } = useUser();
    const renderPost = ({ item }) => (
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image style={styles.postProfilePic} source={{uri: user.photoURL}} />
          <Text style={styles.postUsername}>{user.displayName}</Text>
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
          {/* <Text style={styles.moreText}>more</Text> */}
        </Text>
      </View>
    );
  
    return (
      <FlatList
        data={postsData}
        style={styles.FlatList}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Image style={styles.profilePic} source={{uri: user.photoURL}} />
              <View style={styles.textbox}>
                <Text style={styles.username}>{user.displayName}</Text>
                <Text style={styles.userId}>User ID:  {user?.uid || "Unknown"}</Text>
              </View>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>40,005</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
          </>
        }
      />
    );
  };
const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    backgroundColor: '#050C1C',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: 'grey',
    backgroundColor: '#252630',
    paddingBottom: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  statLabel: {
    color: 'grey',
    fontSize: 14
  },
  textbox: {
    flex: 1,
  },
  card: {
    width:'100%',
    height: '100%',
    flex:1,
    backgroundColor: '#050C1C',
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#252630",
    padding: 15,
  },
  profilePic: {
    marginLeft: 35,
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  userId: {
    color: 'grey',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  caption: {
    marginVertical: 5,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
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
});


export default Profile;
