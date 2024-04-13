import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddNewRecipe = ({ navigation }) => {
    const [recipeName, setRecipeName] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [mainBase, setMainBase] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const addInstruction = () => {
        setInstructions([...instructions, '']);
    };


    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-back" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.header}>Create Your Own Recipe</Text>
            <View style={styles.inputMasterContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Recipe Title</Text>
                    <TextInput
                        style={styles.input}
                        value={recipeName}
                        onChangeText={setRecipeName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Serving Size</Text>
                    <TextInput
                        style={styles.input}
                        value={servingSize}
                        onChangeText={setServingSize}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Main Base</Text>
                    <TextInput
                        style={styles.input}
                        value={mainBase}
                        onChangeText={setMainBase}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Ingredients</Text>
                    {ingredients.map((ingredient, index) => (
                        <TextInput
                            key={`ingredient-${index}`}
                            style={styles.input}
                            value={ingredient}
                            onChangeText={text => {
                                const newIngredients = [...ingredients];
                                newIngredients[index] = text;
                                setIngredients(newIngredients);
                            }}
                        />
                    ))}
                    <TouchableOpacity style={styles.button} onPress={addIngredient}>
                        <Text style={styles.buttonText}>Add ingredient</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Instructions</Text>
                    {instructions.map((instruction, index) => (
                        <TextInput
                            key={`instruction-${index}`}
                            style={styles.input}
                            value={instruction}
                            onChangeText={text => {
                                const newInstructions = [...instructions];
                                newInstructions[index] = text;
                                setInstructions(newInstructions);
                            }}
                        />
                    ))}
                    <TouchableOpacity style={styles.button} onPress={addInstruction}>
                        <View style={styles.plusButton}>
                            <Text style={styles.plusText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Sharing Options</Text>
                </View>

                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        color: 'white',
        top: 10,
        left: 5,
        fontSize: 25,
        zIndex: 10000,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#141B25',
    },
    header: {
        fontSize: 24,
        padding: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        marginTop: 80,
    },
    inputMasterContainer: {
        backgroundColor: '#050C1C',
        width: '100%',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Roboto',
        marginBottom: 10,
        color: "#FFFFFF"
    },
    input: {
        backgroundColor: "#141B25",
        color: "#FFFFFF",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    section: {
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    plusButton: {
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        marginTop: 10,
    },
    plusText: {
        fontSize: 24,
        color: 'black',
    },
    saveButton: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    saveButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
});

export default AddNewRecipe;
