import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const AddNewRecipe = ({ navigation }) => {
    const [recipeName, setRecipeName] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [mainBase, setMainBase] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState([{ text: '', imageUrl: null }]);
    const [instructionImages, setInstructionImages] = useState({});

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const addInstruction = () => {
        setInstructions([...instructions, { text: '', imageUrl: null }]);
    };

    const handleImageUpload = async (index) => {
        // Use an image picker library to get the image
        // For example, using expo-image-picker:
        // const result = await ImagePicker.launchImageLibraryAsync();
        // if (!result.cancelled) {
        //   const newInstructions = [...instructions];
        //   newInstructions[index].imageUrl = result.uri;
        //   setInstructions(newInstructions);
        // }
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
                <View style={styles.row}>
                    <View style={[styles.inputContainer, styles.halfInputContainer]}>
                        <Text style={styles.label}>Serving Size</Text>
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            value={servingSize}
                            onChangeText={setServingSize}
                        />
                    </View>

                    <View style={[styles.inputContainer, styles.halfInputContainer]}>
                        <Text style={styles.label}>Main Base</Text>
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            value={mainBase}
                            onChangeText={setMainBase}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Ingredients</Text>
                    {ingredients.map((ingredient, index) => (
                        <View style={styles.ingredientContainer} key={`ingredient-${index}`}>
                            <TextInput
                                style={styles.input}
                                value={ingredient}
                                onChangeText={text => {
                                    const newIngredients = [...ingredients];
                                    newIngredients[index] = text;
                                    setIngredients(newIngredients);
                                }}
                            />
                            {ingredients.length > 1 && (
                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() => {
                                        const newIngredients = ingredients.filter((_, i) => i !== index);
                                        setIngredients(newIngredients);
                                    }}
                                >
                                    <Icon name="close-circle" size={24} color="white" />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                    <TouchableOpacity style={styles.button} onPress={addIngredient}>
                        <Text style={styles.buttonText}>Add ingredient</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Instructions</Text>
                    {instructions.map((instruction, index) => (
                        <View>
                        <Text key={index} style={styles.stepIndex}>Step {index + 1}</Text>
                        <View key={`instruction-${index}`} style={styles.stepContainer}>
                            <View style={styles.textInputWithRemoveContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={instruction.text}
                                    onChangeText={text => {
                                        const newInstructions = [...instructions];
                                        newInstructions[index].text = text;
                                        setInstructions(newInstructions);
                                    }}
                                />
                                {instructions.length > 1 && (
                                    <TouchableOpacity
                                        style={styles.removeButton}
                                        onPress={() => {
                                            const newInstructions = instructions.filter((_, i) => i !== index);
                                            setInstructions(newInstructions);
                                        }}
                                    >
                                        <Icon name="close-circle" size={24} color="white" />
                                    </TouchableOpacity>
                                )}
                            </View>
                            {index === instructions.length - 1 && (
                                <View style={styles.uploadImageContainer}>
                                    <TouchableOpacity style={styles.uploadButton} onPress={() => handleImageUpload(index)}>
                                        <Text style={styles.buttonTextPlus}>+</Text>
                                    </TouchableOpacity>
                                    {instruction.imageUrl && (
                                        <Image
                                            source={{ uri: instruction.imageUrl }}
                                            style={styles.uploadedImage}
                                        />
                                    )}
                                </View>
                            )}
                        </View>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addButton} onPress={addInstruction}>
                        <Text style={styles.buttonText}>Add Step</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Sharing Options</Text>
                </View>

                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    stepContainer: {
        marginBottom: 20,
      },
      textInputWithRemoveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      uploadImageContainer: {
        alignItems: 'center',
        marginTop: 10,
      },
      uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#141B25',
        padding: 10,
        height:80,
        width:250,
        borderRadius: 5,
        marginRight:25,
        justifyContent: 'center',
      },
      addButton: {
        backgroundColor: '#141B25',
        borderRadius: 5,
        alignItems: 'center',
        marginLeft:60,
        width:170,
      },
      uploadedImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginTop: 10,
      },
    stepIndex: {
        color: '#FFFFFF',
        marginBottom: 5,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInputContainer: {
        width: '48%',
    },
    halfInput: {
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
        flex: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    instructionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    removeButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeIcon: {
        color: 'white',
        width: 20,
        height: 20,
    },
    section: {
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#141B25',
        padding: 10,
        width: '70%',
        marginLeft: 25,
        borderRadius: 10,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    buttonTextPlus: {
        color: "#FFFFFF",
        fontSize: 30,
    },
    plusButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        marginTop: 10,
    },
    plusText: {
        fontSize: 24,
        color: "#FFFFFF",
    },
    saveButton: {
        backgroundColor: '#141B25',
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
