import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const RecipeDetailScreen = ({ route, navigation }) => {
    const { recipe } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" style={styles.backButton} />
                </TouchableOpacity>
                <Image source={recipe.image} style={styles.image} />
            </View>
            <Text style={styles.title}>{recipe.name}</Text>
            <View style={styles.recipeContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Steps</Text>
                    <Text style={styles.statNumber}>{recipe.steps}</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Serves</Text>
                    <Text style={styles.statNumber}>{recipe.servings}</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Main Base</Text>
                    <Text style={styles.statNumber}>{recipe.base}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    recipeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: 'grey',
        paddingBottom: 10,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    statNumber: {
        color: '#818B99',
        paddingTop: 5,
        fontSize: 14
    },
    detailContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'flex-start',  // Align items to the start of the row
        alignItems: 'center',          // Center items vertically
        flex: 1,                       // Take available space
    },
    detailLabel: {
        fontSize: 18,
        color: '#FFD700',
        marginBottom: 5,
        backgroundColor: 'blue',
    },
    recipeDetails: {
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#050C1C",
    },
    imageHeader: {
        position: 'relative',
        width: '100%',
        height: 200,
    },
    backButton: {
        position: 'absolute',
        color: 'white',
        top: 10,
        left: 5,
        fontSize: 25,
        zIndex: 10000,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
        marginBottom: 15,
        textAlign: 'left'
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
        color: '#FFFFFF'
    }
});

export default RecipeDetailScreen;
