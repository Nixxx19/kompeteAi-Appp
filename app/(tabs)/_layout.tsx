import { Tabs, usePathname } from 'expo-router';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for fitness icon

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type ValidIconName =
  | 'target'
  | 'square.and.arrow.up'
  | 'figure.walk'
  | 'gauge.with.dots.needle.0percent'
  | 'house.fill'
  | 'heart.fill'
  | 'person.fill'
  | 'chart.bar.fill';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  const currentRoute = pathname.split('/').pop() || 'index';

  // Group these all under the same Exercise tab
  const exerciseScreens = ['exercise', 'jumpingjacks', 'pushups', 'squats', 'highknees'];

  const dynamicTabs = ['drills', 'upload', 'calibration', ...exerciseScreens];

  const dynamicTabIconMap: Record<string, { icon: ValidIconName; label: string }> = {
    drills: { icon: 'target', label: 'Drills' },
    upload: { icon: 'square.and.arrow.up', label: 'Upload' },
    calibration: { icon: 'gauge.with.dots.needle.0percent', label: 'Calibration' },

    // Exercise tabs
    exercise: { icon: 'figure.walk', label: 'Exercise' }, // Keep this as 'figure.walk'
    jumpingjacks: { icon: 'figure.walk', label: 'Jumping Jacks' },
    pushups: { icon: 'figure.walk', label: 'Push Ups' },
    squats: { icon: 'figure.walk', label: 'Squats' },
    highknees: { icon: 'figure.walk', label: 'High Knees' },
  };

  // Determine if current route is an exercise sub screen (not the main 'exercise')
  const isSubExercise = exerciseScreens.includes(currentRoute) && currentRoute !== 'exercise';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="player-details"
        options={{
          title: 'Player Details',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="chart.bar.fill" color={color} />
          ),
        }}
      />

      {/* Always show Exercise tab if current route is any exercise screen */}
      {exerciseScreens.includes(currentRoute) && (
        <Tabs.Screen
          name="exercise"
          options={{
            title: dynamicTabIconMap['exercise'].label,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="heart.fill" color={color} />
            ),
          }}
        />
      )}

      {/* Show the specific exercise tab ONLY when on a sub-exercise route */}
      {isSubExercise && (
        <Tabs.Screen
          name={currentRoute}
          options={{
            title: dynamicTabIconMap[currentRoute].label,
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name={dynamicTabIconMap[currentRoute].icon}
                color={color}
              />
            ),
          }}
        />
      )}

      {/* Show other dynamic tabs when on them */}
      {!exerciseScreens.includes(currentRoute) && dynamicTabs.includes(currentRoute) && (
        <Tabs.Screen
          name={currentRoute}
          options={{
            title: dynamicTabIconMap[currentRoute].label,
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name={dynamicTabIconMap[currentRoute].icon}
                color={color}
              />
            ),
          }}
        />
      )}
    </Tabs>
  );
}
