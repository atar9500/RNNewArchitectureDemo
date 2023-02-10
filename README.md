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

## Results

|                | Old Architecture | New Architecture |
| -------------- | ---------------- | ---------------- |
| Average JS FPS | 2.4              | 58.5             |
| Average UI FPS | 57               | 58.5             |
| JS Threadlock  | 12.295s (40.06%) | 0s (0%)          |
| Overall Score  | 29 😔            | 97 🤩            |

### Old Architecture

![Old architecture test](https://media.giphy.com/media/IEhij7Z7SXHJlPnh97/giphy.gif)

### New Architecture

![New architecture test](https://media.giphy.com/media/6x5VKeB6QWjHfMh2Yb/giphy.gif)

Happy Coding 👨🏽‍💻
