import { Platform, StyleSheet, View, Text, TouchableOpacity, Pressable, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Target, Zap, Clock } from 'lucide-react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const openYouTubeVideo = () => {
    const url = 'https://www.youtube.com/watch?v=Bkc9bswT5uE';
    Linking.openURL(url);
  };

  const navigateToPlayerDetails = () => {
    router.push('/(tabs)/player-details');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top section - Text content */}
      <View style={styles.textSection}>
        {/* Logo and Tagline */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            KOMPTE<Text style={styles.logoDot}>.</Text>
          </Text>
          <Text style={styles.tagline}>Crafting Champions Since 2022.</Text>
        </View>

        {/* Sub-headline */}
        <Text style={styles.subHeadline}>Ready Set KOMPTE.</Text>

        {/* Description */}
        <Text style={styles.description}>
          Upload your badminton match video to unlock professional-grade performance insights with AI-powered court visualization and analytics.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={navigateToPlayerDetails}>
            <Ionicons name="play" size={16} color="white" style={styles.playIcon} />
            <Text style={styles.primaryButtonText}>Start Analysis</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton} onPress={openYouTubeVideo}>
            <Text style={styles.secondaryButtonText}>Watch Demo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom section - Video */}
      <View style={styles.videoSection}>
        <View style={styles.videoContainer}>
          <Image
            source={require('@/assets/images/hero-court.jpg')}
            style={styles.videoThumbnail}
            contentFit="cover"
          />
          <View style={styles.videoOverlay}>
            <Pressable style={styles.playButton}>
              <Ionicons name="play" size={24} color="white" />
            </Pressable>
            <Text style={styles.videoText}>See Analytics in Action</Text>
          </View>
        </View>
      </View>

      {/* Feature Cards Section */}
      <View style={styles.cardsSection}>
        <View style={styles.cardsContainer}>
          {/* Court Heatmaps Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Court Heatmaps</Text>
              <View style={[styles.cardIcon, { backgroundColor: '#22c55e' }]}>
                <Target size={28} color="white" />
              </View>
            </View>
            <Text style={styles.cardDescription}>
              Visualize shuttle impact zones with precision heat mapping.
            </Text>
          </View>

          {/* Stamina Analysis Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Stamina Analysis</Text>
              <View style={[styles.cardIcon, { backgroundColor: '#f97316' }]}>
                <Zap size={28} color="white" />
              </View>
            </View>
            <Text style={styles.cardDescription}>
              Track shuttle speed and performance{'\n'}trends over time.
            </Text>
          </View>

          {/* Reaction Insights Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Reaction Insights</Text>
              <View style={[styles.cardIcon, { backgroundColor: '#3b82f6' }]}>
                <Clock size={28} color="white" />
              </View>
            </View>
            <Text style={styles.cardDescription}>
              Analyze pickup timing and reaction performance of the player.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Dark blue-purple background
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  textSection: {
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 30,
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
    marginBottom: 11,
    fontFamily: 'System',
  },
  description: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    marginBottom: 37,
    fontFamily: 'System',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#6366f1', // Vibrant blue-purple
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playIcon: {
    marginRight: 4,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 27,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
  },
  videoSection: {
    alignItems: 'center',
    marginTop: 2,
  },
  videoContainer: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },

  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6366f1', // Vibrant blue-purple
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  videoText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'System',
    marginTop: 80,
  },
  cardsSection: {
    marginTop: 40,
    paddingHorizontal: 0,
    paddingBottom: 120,
  },
  cardsContainer: {
    flexDirection: 'column',
    gap: 18,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 14,
    padding: 16,
    minHeight: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },
  cardTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'System',
    flex: 1,
  },
  cardIcon: {
    width: 44,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescription: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'System',
    opacity: 0.8,
  },
});
