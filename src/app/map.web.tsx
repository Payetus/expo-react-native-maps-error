import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function MapScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText type="subtitle">Map</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            react-native-maps renders native map views, so this screen is only available on iOS and
            Android. Open the app on a device to see it.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/versions/v57.0.0/sdk/map-view/">
            <ThemedText type="linkPrimary">react-native-maps documentation</ThemedText>
          </ExternalLink>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.four,
  },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth / 2,
    padding: Spacing.four,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
});
