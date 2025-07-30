import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExerciseScreen() {
  const handleExercisePress = (exerciseType: string) => {
    console.log(`Selected exercise: ${exerciseType}`);
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
            <Text style={styles.welcomeText}>Exercise</Text>
            <Text style={styles.subtitleText}>Choose your workout routine</Text>
          </View>
        </View>

        {/* Exercise Buttons */}
        <View style={styles.exercisesSection}>
          <Text style={styles.sectionTitle}>Select Exercise</Text>

          {[
            { title: 'Jumping Jacks', subtitle: 'Cardio workout', icon: 'accessibility', color: '#22c55e' },
            { title: 'High Knees', subtitle: 'Leg strengthening', icon: 'chevron-up', color: '#f97316' },
            { title: 'Push Ups', subtitle: 'Upper body strength', icon: 'fitness', color: '#3b82f6' },
            { title: 'Squats', subtitle: 'Lower body power', icon: 'barbell', color: '#8b5cf6' },
          ].map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.exerciseButton}
              onPress={() => handleExercisePress(item.title.toLowerCase())}
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

        {/* Tips Section */}
        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Workout Tips</Text>
          <View style={styles.tipCard}>
            <View style={[styles.tipIcon, { backgroundColor: '#22c55e' }]}>
              <Ionicons name="bulb" size={20} color="white" />
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Proper Form</Text>
              <Text style={styles.tipText}>
                Focus on proper form over speed. Quality repetitions are more effective than rushed movements.
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Workouts */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          <View style={styles.activityList}>
            <TouchableOpacity style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#22c55e' }]}>
                <Ionicons name="checkmark-circle" size={24} color="white" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Jumping Jacks</Text>
                <Text style={styles.activityDesc}>3 sets x 30 reps</Text>
                <Text style={styles.activityTime}>Today</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  tipsSection: {
    marginTop: 24,
  },
  tipCard: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tipIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipText: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
  },
  activitySection: {
    marginTop: 26,
  },
  activityList: {
    marginTop: 8,
  },
  activityItem: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 12,
  },
  activityIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  activityDesc: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 2,
  },
  activityTime: {
    color: '#6b7280',
    fontSize: 12,
  },
});
