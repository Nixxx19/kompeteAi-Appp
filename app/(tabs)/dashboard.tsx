import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Target, Zap, Clock, TrendingUp, Activity, BarChart3 } from 'lucide-react-native';
import { router } from 'expo-router';


export default function DashboardScreen() {
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
        
        {/* Welcome Message */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>DashBoard</Text>
          <Text style={styles.subtitleText}>Ready to improve your game?</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Quick Stats</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Ionicons name="trophy" size={20} color="#22c55e" />
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Matches</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Ionicons name="trending-up" size={20} color="#f97316" />
            </View>
            <Text style={styles.statNumber}>78%</Text>
            <Text style={styles.statLabel}>Win Rate</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Ionicons name="star" size={20} color="#3b82f6" />
            </View>
            <Text style={styles.statNumber}>4.2</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.buttonGrid}>
          {/* First Row */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.gridButton}
              onPress={() => router.push('/(tabs)/exercise')}
            >
              <View style={[styles.buttonIcon, { backgroundColor: '#22c55e' }]}>
                <Ionicons name="fitness" size={24} color="white" />
              </View>
              <Text style={styles.gridButtonText}>Exercise</Text>
              <Text style={styles.buttonSubtext}>Training routines</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridButton}
              onPress={() => router.push('/(tabs)/drills')}
            >
              <View style={[styles.buttonIcon, { backgroundColor: '#f97316' }]}>
                <Ionicons name="repeat" size={24} color="white" />
              </View>
              <Text style={styles.gridButtonText}>Drills</Text>
              <Text style={styles.buttonSubtext}>Practice sessions</Text>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.gridButton}
              onPress={() => router.push('/(tabs)/upload')}
            >
              <View style={[styles.buttonIcon, { backgroundColor: '#3b82f6' }]}>
                <Ionicons name="cloud-upload" size={24} color="white" />
              </View>
              <Text style={styles.gridButtonText}>Upload</Text>
              <Text style={styles.buttonSubtext}>New match video</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridButton}
              onPress={() => router.push('/(tabs)/calibration')}
            >
              <View style={[styles.buttonIcon, { backgroundColor: '#8b5cf6' }]}>
                <Ionicons name="settings" size={24} color="white" />
              </View>
              <Text style={styles.gridButtonText}>Calibration</Text>
              <Text style={styles.buttonSubtext}>System setup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <TouchableOpacity style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#22c55e' }]}>
              <Ionicons name="trophy" size={24} color="white" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Match Won</Text>
              <Text style={styles.activityDesc}>21-18 vs John</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#3b82f6' }]}>
              <Ionicons name="analytics" size={24} color="white" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Analysis Complete</Text>
              <Text style={styles.activityDesc}>Court heatmap generated</Text>
              <Text style={styles.activityTime}>Yesterday</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#f97316' }]}>
              <Ionicons name="fitness" size={24} color="white" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Exercise Completed</Text>
              <Text style={styles.activityDesc}>Footwork drills - 30 min</Text>
              <Text style={styles.activityTime}>2 days ago</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Today's Tip</Text>
        <View style={styles.tipCard}>
          <View style={[styles.tipIcon, { backgroundColor: '#8b5cf6' }]}>
            <Ionicons name="bulb" size={20} color="white" />
          </View>
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Improve Your Serve</Text>
            <Text style={styles.tipText}>
              Focus on consistent toss height and follow through. Practice 10 serves daily for better accuracy.
            </Text>
          </View>
        </View>
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
    paddingBottom:20,
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
  },
  statsSection: {
    marginTop: 30,
    paddingHorizontal: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'System',
    marginBottom: 4,
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'System',
  },
  actionsSection: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'System',
    marginBottom: 20,
  },
  buttonGrid: {
    flexDirection: 'column',
    gap: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },
  gridButton: {
    width: '48%',
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
    textAlign: 'center',
    marginBottom: 4,
  },
  buttonSubtext: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'System',
    textAlign: 'center',
  },
  activitySection: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
  activityList: {
    gap: 16,
  },
  activityItem: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  activityIcon: {
    width: 53,
    height: 53,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'System',
    marginBottom: 4,
    textAlign: 'center',
  },
  activityDesc: {
    color: '#9CA3AF',
    fontSize: 16,
    fontFamily: 'System',
    marginBottom: 4,
    textAlign: 'center',
  },
  activityTime: {
    color: '#6b7280',
    fontSize: 14,
    fontFamily: 'System',
    textAlign: 'center',
  },
  tipsSection: {
    marginTop: 40,
    paddingHorizontal: 0,
    marginBottom: 200,
  },
  tipCard: {
    backgroundColor: 'rgba(45, 55, 72, 0.8)',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  tipIcon: {
    width: 53,
    height: 53,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System',
    marginBottom: 4,
  },
  tipText: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'System',
  },
}); 