# RNNewArchitectureDemo

A simple demo showcasing React Native's performance in both old and new architecture

## Prerequisites

1. Your machine is set up according to [React Native's Get Started](https://reactnative.dev/docs/environment-setup).
2. You have [Flipper](https://fbflipper.com/) installed.
3. You have [rn-perf-monitor](https://github.com/bamlab/react-native-flipper-performance-monitor#flipper) installed with Flipper.

## Running with old architecture

1.  If you haven't, please run `yarn` first.
2.  Navigate to the `ios` folder and run `pod install`.
3.  Run either `yarn android` or `yarn ios`.

## Switching to the new architecture

1. **Android:** Under `gradle.properties`, switch `newArchEnabled` value to `true`.
2. **iOS:** Run `yarn pod-install`.

## Integrating RTNCenteredText Fabric component

1. Run `yarn add ./RTNCenteredText`.
2. **Android:** Run `yarn android-link` to trigger codegen.
3. **iOS:** Run `yarn ios-link` to trigger codegen.
4. To render the Fabric Component, follow the `TODO` comments under `src/PostItem.tsx`

Happy Coding 👨🏽‍💻
