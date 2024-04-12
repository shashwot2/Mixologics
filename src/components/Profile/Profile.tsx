import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import testprofile from '@assets/profile/testprofile.png';
const Profile: React.FC = ({ }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={testprofile} />
        <View style={styles.textbox}>
          <Text style={styles.username}>Connecteur</Text>
          <Text style={styles.userId}>User ID: { }</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Post</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>204</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>


      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image style={styles.postProfilePic} source={testprofile} />
          <Text style={styles.postUsername}>Consectetur</Text>
          <TouchableOpacity style={styles.postOptions}>
            <Icon name="ellipsis-h" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <Image style={styles.postImage} source={testprofile} />

        <View style={styles.postInteractions}>
          <TouchableOpacity>
            <Icon name="heart" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.likesCount}>13</Text>
          <TouchableOpacity>
            <Icon name="comment" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.commentsCount}>4</Text>
        </View>

        <Text style={styles.postCaption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate quam erat, a ornare velit ...
          <Text style={styles.moreText}>more</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#050C1C',
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#252630",
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
