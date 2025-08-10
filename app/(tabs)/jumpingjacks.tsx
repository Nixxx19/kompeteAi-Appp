import * as ImagePicker from 'expo-image-picker';
import { Camera, CheckCircle, Lightbulb, Upload as UploadIcon, Video } from 'lucide-react-native';
import React from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function JumpingJacksScreen() {
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);
  const [uploadStep, setUploadStep] = React.useState(1);

  const handleUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please allow gallery access to upload a video.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length > 0) {
      const uri = result.assets[0].uri;
      setSelectedFile(uri);
      setUploadStep(2);
      Alert.alert('Video Selected', uri.split('/').pop() || 'video file');
    }
  };

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please allow camera access to record a video.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length > 0) {
      const uri = result.assets[0].uri;
      setSelectedFile(uri);
      setUploadStep(2);
      Alert.alert('Video Recorded', uri.split('/').pop() || 'video file');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 110 }}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            KOMPTE<Text style={styles.logoDot}>.</Text>
          </Text>
          <Text style={styles.tagline}>Crafting Champions Since 2022.</Text>
        </View>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Jumping Jacks</Text>
          <Text style={styles.subtitleText}>Ready to jump into action?</Text>
        </View>
      </View>

      {/* Stepper */}
      <View style={styles.stepsContainer}>
        {[1, 2, 3].map((step, i) => (
          <React.Fragment key={step}>
            <View style={styles.stepWrapper}>
              <View style={[styles.stepCircle, uploadStep >= step && styles.stepActive]}>
                {uploadStep > step ? (
                  <CheckCircle size={18} color="white" />
                ) : (
                  <Text style={styles.stepText}>{step}</Text>
                )}
              </View>
              <Text style={styles.stepLabel}>
                {step === 1 ? 'Upload' : step === 2 ? 'Processing' : 'Results'}
              </Text>
            </View>
            {i < 2 && (
              <View
                style={[
                  styles.stepLine,
                  { backgroundColor: uploadStep > step ? '#6366f1' : '#4a5568' },
                ]}
              />
            )}
          </React.Fragment>
        ))}
      </View>

      {/* Upload Card */}
      <View style={styles.card}>
        <Video size={32} color="#6366f1" style={styles.icon} />
        <Text style={styles.cardTitle}>Select or Record Video</Text>

        {selectedFile && (
          <Text style={styles.selectedFileText}>
            ✅ {selectedFile.split('/').pop()}
          </Text>
        )}

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleUpload}>
            <UploadIcon size={16} color="white" />
            <Text style={styles.buttonText}>Upload Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleCamera}>
            <Camera size={16} color="white" />
            <Text style={styles.buttonText}>Record Live</Text>
          </TouchableOpacity>
        </View>

        {!selectedFile && (
          <Text style={styles.instructions}>
            Tap any button to select a video from your gallery or record live
          </Text>
        )}
      </View>

      {/* Workout Tips */}
      <Text style={styles.workoutTipsHeading}>Workout Tips</Text>
      <TouchableOpacity
        style={styles.workoutTipsBox}
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=c4DAnQ6DtF8').catch(() =>
            Alert.alert('Error', 'Failed to open the video.')
          );
        }}
        activeOpacity={0.8}
      >
        <View style={styles.workoutTipsIconContainer}>
          <Lightbulb size={24} color="white" />
        </View>
        <View style={styles.workoutTipsContent}>
          <Text style={styles.workoutTipsTitle}>Proper Form</Text>
          <Text style={styles.workoutTipsDescription}>
            Jump with your feet and hands wide, then return to the starting position while keeping your core tight and your knees slightly bent for control.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          if (selectedFile) {
            setUploadStep(3);
            Alert.alert('Processing Started');
          } else {
            Alert.alert('No Video Selected', 'Please upload or record a video first.');
          }
        }}
      >
        <Text style={styles.startButtonText}>Start Exercise</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a2e',
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  headerSection: {
    paddingBottom: 20,
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
    color: '#6366f1',
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    marginTop: 2,
    fontFamily: 'System',
  },
  welcomeSection: {
    marginTop: 1,
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'System',
    marginBottom: 13,
  },
  subtitleText: {
    color: '#9CA3AF',
    fontSize: 17,
    fontFamily: 'System',
    marginBottom: 15,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignSelf: 'center',
    width: screenWidth - 40,
  },
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  stepActive: {
    backgroundColor: '#6366f1',
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  stepLine: {
    width: 60,
    height: 2,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: -16,
  },
  card: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
    width: '100%',
  },
  icon: { marginBottom: 8 },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 6,
    backgroundColor: '#6366f1',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 10,
    fontSize: 14,
  },
  instructions: {
    color: '#9CA3AF',
    marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  selectedFileText: {
    color: '#22c55e',
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
  },
  workoutTipsHeading: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 18,
  },
  workoutTipsBox: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 14,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
  },
  workoutTipsIconContainer: {
    width: 52,
    height: 49,
    borderRadius: 12,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
    marginTop: 4,
  },
  workoutTipsContent: {
    flex: 1,
  },
  workoutTipsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  workoutTipsDescription: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: '#8b5cf6',
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
