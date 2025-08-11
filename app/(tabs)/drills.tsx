import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DrillsScreen() {
  const handleDrillPress = (drillType: string) => {
    console.log(`Selected drill: ${drillType}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a2e' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              KOMPTE<Text style={styles.logoDot}>.</Text>
            </Text>
            <Text style={styles.tagline}>Crafting Champions Since 2022.</Text>
          </View>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Drills</Text>
            <Text style={styles.subtitleText}>Sharpen your skills</Text>
          </View>
        </View>

        {/* Drill Buttons */}
        <View style={styles.exercisesSection}>
          <Text style={styles.sectionTitle}>Select Drill</Text>

          {[
            { title: '6 Corner Drill', subtitle: 'Agility & reaction', icon: 'grid', color: '#22c55e' },
            { title: 'Diagonal Drill', subtitle: 'Lateral movement', icon: 'shuffle', color: '#f97316' },
            { title: '4 Corner Drill', subtitle: 'Precision control', icon: 'pulse', color: '#3b82f6' },
            { title: 'Footwork Drill', subtitle: 'Quick footwork', icon: 'flash', color: '#8b5cf6' },
          ].map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.exerciseButton}
              onPress={() => handleDrillPress(item.title.toLowerCase())}
            >
              <View style={[styles.buttonIcon, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon as any} size={24} color="white" />
              </View>
              <View>
                <Text style={styles.gridButtonText}>{item.title}</Text>
                <Text style={styles.buttonSubtext}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  headerSection: {
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  logoDot: {
    color: '#6366f1',
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    marginTop: 2,
  },
  welcomeSection: {
    marginTop: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitleText: {
    color: '#9CA3AF',
    fontSize: 15,
  },
  exercisesSection: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  exerciseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  gridButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  buttonSubtext: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});
