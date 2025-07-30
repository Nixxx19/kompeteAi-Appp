import { Tabs, usePathname } from 'expo-router';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Define your own valid SF Symbol strings
type ValidIconName =
  | 'target'
  | 'square.and.arrow.up'
  | 'figure.walk'
  | 'gauge.with.dots.needle.0percent'
  | 'house.fill'
  | 'person.fill'
  | 'chart.bar.fill';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  const currentRoute = pathname.split('/').pop() || 'index';
  const dynamicTabs = ['drills', 'upload', 'exercise', 'calibration'];

  const dynamicTabIconMap: Record<
    string,
    { icon: ValidIconName; label: string }
  > = {
    drills: { icon: 'target', label: 'Drills' },
    upload: { icon: 'square.and.arrow.up', label: 'Upload' },
    exercise: { icon: 'figure.walk', label: 'Exercise' },
    calibration: {
      icon: 'gauge.with.dots.needle.0percent',
      label: 'Calibration',
    },
  };

  const currentDynamic = dynamicTabs.includes(currentRoute)
    ? currentRoute
    : 'drills';

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
      <Tabs.Screen
        name={currentDynamic}
        options={{
          title: dynamicTabIconMap[currentDynamic].label,
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name={dynamicTabIconMap[currentDynamic].icon}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
