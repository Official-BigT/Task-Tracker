# Task Tracker

A mobile task tracker built with **React Native**, **Expo**, and **TypeScript**. Users can create, complete, and filter tasks with local persistence across app restarts.

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Expo Go app on your device ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

## Setup & Run

```bash
# Clone the repository and navigate to the project directory
git clone <repository-url>
cd task-tracker

# Install dependencies
npm install

# Start the development server
npx expo start
```

Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS) to run the app on your device. You can also press `a` for Android emulator or `w` for web.

## Features

- **View tasks** – Display a list of all tasks with empty-state messaging
- **Create tasks** – Add new tasks with validation (prevents empty submissions)
- **Toggle completion** – Mark tasks as complete or incomplete
- **Filter tasks** – Filter by All, Active, or Completed
- **Local persistence** – Tasks are saved via AsyncStorage and persist across app restarts

## Libraries Used & Why

| Library | Why I chose it |
|---------|----------------|
| **React Native** | Cross-platform framework so the app runs on iOS and Android from one codebase. Familiar React patterns and large ecosystem. |
| **Expo** | Simplifies setup (no native build tooling required), provides a managed workflow, and enables quick iteration via Expo Go. |
| **TypeScript** | Adds static typing for fewer runtime errors, better editor support, and clearer contracts for components and data. |
| **AsyncStorage** | React Native's recommended solution for simple key-value persistence. No backend needed—tasks are stored locally on the device. |
| **expo-status-bar** | Lets the status bar adapt to the app's theme (e.g. light/dark content) for better visual consistency. |

## Future Improvements

If I had more time, I would:

- **Edit and delete tasks** – Inline editing and swipe-to-delete for better task management- for now it's just a minor X to delete from local storage.
- **Completion animations** – Smooth transitions when marking tasks complete
- **Unit and integration tests** – Jest/React Native Testing Library for reliability
- **Enhanced UI/UX** – Improved visual design, accessibility, and interaction patterns
- **Offline sync support** – Cloud backup and sync across devices when back online
