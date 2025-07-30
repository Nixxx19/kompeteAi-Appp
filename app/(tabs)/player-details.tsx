import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';

export default function PlayerDetailsScreen() {
  const [playerName, setPlayerName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!playerName.trim()) {
      newErrors.playerName = 'Name is required';
    }
    if (!age.trim()) {
      newErrors.age = 'Age is required';
    }
    if (!weight.trim()) {
      newErrors.weight = 'Weight is required';
    }
    if (!height.trim()) {
      newErrors.height = 'Height is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Handle continue action
      console.log('Player details:', { playerName, age, weight, height });
      // Navigate to dashboard
      router.push('/(tabs)/dashboard');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            KOMPTE<Text style={styles.logoDot}>.</Text>
          </Text>
          <Text style={styles.tagline}>Crafting Champions Since 2022.</Text>
        </View>

        <Text style={styles.subHeadline}>Player Details</Text>
        <Text style={styles.description}>
          Enter your details to get personalized badminton analytics and insights.
        </Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            value={playerName}
            onChangeText={setPlayerName}
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Age Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.textInput}
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>

        {/* Weight Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Weight (kg)</Text>
          <TextInput
            style={styles.textInput}
            value={weight}
            onChangeText={setWeight}
            placeholder="Enter your weight in kg"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>

        {/* Height Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Height (cm)</Text>
          <TextInput
            style={styles.textInput}
            value={height}
            onChangeText={setHeight}
            placeholder="Enter your height in cm"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a2e', // Dark blue-purple background
    paddingHorizontal: 40,
    paddingVertical: 80,
    minHeight: '110%',
  },
  headerSection: {
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 60,
  },
  logo: {
    fontSize: 61,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'System',
  },
  logoDot: {
    color: '#6366f1', // Vibrant blue-purple for the dot
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    marginTop: 2,
    fontFamily: 'System',
  },
  subHeadline: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginBottom: 13,
    fontFamily: 'System',
  },
  description: {
    fontSize: 17,
    color: '#9CA3AF',
    lineHeight: 24,
    marginBottom: 0,
    fontFamily: 'System',
  },
  formSection: {
    gap: 28,
  },
  inputContainer: {
    gap: 14,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
  },
  textInput: {
    backgroundColor: '#2d3748',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
    borderWidth: 1,
    borderColor: '#4a5568',
  },
  continueButton: {
    backgroundColor: '#6366f1', // Vibrant blue-purple
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 200,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'System',
    marginRight: 8,
  },
}); 