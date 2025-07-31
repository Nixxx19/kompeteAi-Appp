import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import type { Route } from 'expo-router'; // ✅ Added to fix type error

export default function ExerciseScreen() {
  const exerciseRouteMap: Record<string, string> = {
    'jumping jacks': '/(tabs)/jumpingjacks',
    'high knees': '/(tabs)/Highknees',
    'push ups': '/(tabs)/Pushups',
    'squats': '/(tabs)/squats',
  };

  const handleExercisePress = (exerciseType: string) => {
    const route = exerciseRouteMap[exerciseType.toLowerCase()];
    if (route) {
      router.push(route as Route); // ✅ Fix: cast to Route type
    } else {
      console.warn('No route defined for:', exerciseType);
    }
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

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#22c55e20' }]}>
              <Ionicons name="barbell" size={20} color="#22c55e" />
            </View>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#f9731620' }]}>
              <Ionicons name="pulse" size={20} color="#f97316" />
            </View>
            <Text style={styles.statNumber}>Elite</Text>
            <Text style={styles.statLabel}>Stamina</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#3b82f620' }]}>
              <Ionicons name="flame" size={20} color="#3b82f6" />
            </View>
            <Text style={styles.statNumber}>1320</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </View>

        {/* Exercises */}
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  statCard: {
    width: '31%',
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    minHeight: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  statIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  exercisesSection: {
    marginTop: 10,
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
