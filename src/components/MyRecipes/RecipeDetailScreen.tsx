import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const RecipeDetailScreen = ({ route, navigation }) => {
    const { recipe } = route.params;
    console.log(recipe.steps)
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
                    <Text style={styles.statNumber}>{recipe.steps.length}</Text>
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
            <View style={styles.ingredientContainer}>
                <Text style={styles.ingredientHeader}>Ingredients</Text>
                {recipe.ingredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredientItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={styles.ingredientText}>{ingredient}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.instructions}>Instructions </Text>
            {recipe.steps && recipe.steps.length > 0 ? (
                recipe.steps.map((step, index) => (
                    <View key={index} style={styles.stepContainer}>
                        <Text style={styles.stepTitle}>Step {step.stepNumber}</Text>
                        <Text style={styles.stepDescription}>{step.description}</Text>
                        {step.image && <Image source={step.image} style={styles.stepImage} />}
                    </View>
                ))
            ) : (
                <Text style={styles.noSteps}>No steps found. Sorry!</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    noSteps: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20
    },
    instructions: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    stepContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    stepDescription: {
        fontSize: 16,
        marginLeft: 15,
        color: '#FFFFFF',
    },
    stepImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginLeft: 15,
        marginTop: 10,
    },
    ingredientContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    ingredientHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bulletPoint: {
        fontSize: 16,
        color: '#FFF',
        marginRight: 5,
    },
    ingredientText: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 5,
    },
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
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
