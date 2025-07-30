import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Video,
  Upload as UploadIcon,
  Play,
  CheckCircle,
  Camera,
} from 'lucide-react-native';

const screenWidth = Dimensions.get('window').width;
const HORIZONTAL_PADDING = 40;
const EXTRA_SCROLL_PADDING = 30;

export default function UploadScreen() {
  const [uploadStep, setUploadStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleUploadVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please allow access to your gallery.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0.8,
    });

    if (result.canceled) return;

    setSelectedFile(result.assets[0].uri);
    setUploadStep(2);
    Alert.alert('Video Selected', result.assets[0].uri.split('/').pop() ?? 'video file');
  };

  const handleLiveRecord = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Camera access is needed to record video.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0.8,
    });

    if (result.canceled) return;

    setSelectedFile(result.assets[0].uri);
    setUploadStep(2);
    Alert.alert('Video Recorded', result.assets[0].uri.split('/').pop() ?? 'video file');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>
          KOMPTE<Text style={styles.logoDot}>.</Text>
        </Text>
        <Text style={styles.tagline}>Crafting Champions Since 2022.</Text>
      </View>

      <Text style={styles.header}>Upload Match Video</Text>
      <Text style={styles.description}>
        Upload your badminton match recording for AI-powered performance analysis.
      </Text>

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

      <View style={styles.card}>
        <Video size={32} color="#6366f1" style={styles.icon} />
        <Text style={styles.cardTitle}>Select or Record Video</Text>

        {selectedFile && (
          <Text style={styles.selectedFileText}>
            ✅ {selectedFile.split('/').pop()}
          </Text>
        )}

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleUploadVideo}>
            <UploadIcon size={16} color="white" />
            <Text style={styles.actionText}>Upload Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleLiveRecord}>
            <Camera size={16} color="white" />
            <Text style={styles.actionText}>Record Live</Text>
          </TouchableOpacity>
        </View>

        {!selectedFile && (
          <Text style={styles.instructions}>
            Tap any button to select a video from your gallery or record live
          </Text>
        )}
      </View>

      <View style={styles.featureRow}>
        <View style={styles.featureCard}>
          <Video size={20} color="#6366f1" />
          <Text style={styles.featureTitle}>Court Detection</Text>
        </View>
        <View style={styles.featureCard}>
          <Play size={20} color="#f97316" />
          <Text style={styles.featureTitle}>Live Tracking</Text>
        </View>
        <View style={styles.featureCard}>
          <CheckCircle size={20} color="#22c55e" />
          <Text style={styles.featureTitle}>
            Performance{'\n'}Reports
          </Text>
        </View>
      </View>

      {selectedFile && (
        <TouchableOpacity
          style={styles.premiumButton}
          onPress={() => {
            setUploadStep(3);
            Alert.alert('Processing Started');
          }}
        >
          <Text style={styles.premiumButtonText}>Start Analysis</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: 80,
  },
  contentContainer: {
    minHeight: Dimensions.get('window').height + EXTRA_SCROLL_PADDING,
  },
  logoWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 60,
  },
  logo: {
    fontSize: 61,
    fontWeight: 'bold',
    color: 'white',
  },
  logoDot: {
    color: '#6366f1',
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    marginTop: 2,
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginBottom: 13,
  },
  description: {
    fontSize: 17,
    color: '#9CA3AF',
    marginBottom: 46,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - HORIZONTAL_PADDING * 1.5,
    marginBottom: 40,
    alignSelf: 'center',
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
  stepActive: { backgroundColor: '#6366f1' },
  stepText: { color: 'white', fontWeight: 'bold' },
  stepLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  stepLine: {
    width: 20,
    height: 2,
    borderRadius: 1,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#2d3748',
    paddingVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: screenWidth - HORIZONTAL_PADDING * 1.5,
    alignSelf: 'center',
    marginBottom: 30,
  },
  icon: { marginBottom: 8 },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6366f1',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
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
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - HORIZONTAL_PADDING * 1.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#2d3748',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  featureTitle: {
    color: 'white',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 16,
  },
  premiumButton: {
    backgroundColor: '#6366f1', // dark blue
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 80,
    width: screenWidth - HORIZONTAL_PADDING * 1.5,
  },
  premiumButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
