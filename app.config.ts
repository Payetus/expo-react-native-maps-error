import type { ConfigContext, ExpoConfig } from 'expo/config';

// Native-only build-time secret: it is baked into the Android manifest by the
// react-native-maps config plugin, never into the JS bundle, so it must NOT use
// the EXPO_PUBLIC_ prefix. See .env.example.
const androidGoogleMapsApiKey = process.env.GOOGLE_MAPS_ANDROID_API_KEY;

export default ({ config }: ConfigContext): ExpoConfig => {
  if (!androidGoogleMapsApiKey) {
    console.warn(
      '[app.config] GOOGLE_MAPS_ANDROID_API_KEY is not set — Google Maps will render blank on Android.'
    );
  }

  return {
    ...config,
    name: config.name ?? 'my-app',
    slug: config.slug ?? 'app-sct-mobile',
    android: {
      ...config.android,
      package: 'cat.uxland.sctmobile',
    },
    plugins: [
      ...(config.plugins ?? []),
      ['react-native-maps', { androidGoogleMapsApiKey: androidGoogleMapsApiKey ?? '' }],
    ],
  };
};
