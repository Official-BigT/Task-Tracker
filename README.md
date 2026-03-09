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

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform mobile framework |
| Expo | Development tooling and runtime |
| TypeScript | Type safety |
| AsyncStorage | Local data persistence |

## Future Improvements

- Edit tasks
- Completion animations
- Unit and integration tests
- Enhanced UI/UX
- Offline sync support
