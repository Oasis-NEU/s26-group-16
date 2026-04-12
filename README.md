# Wacow — Fitness Tracking App

A cross-platform fitness tracking app built with React Native (Expo) and Supabase. Designed to help users log workouts, track progress, and build consistency through gamification features like XP, streaks, and achievements.

## Tech Stack

- **Frontend:** React Native (Expo), JavaScript
- **Backend:** Supabase (PostgreSQL, Auth, Row Level Security)
- **Navigation:** React Navigation (Bottom Tabs + Stack)

## Features

- **Authentication** — Email/password signup and login with persistent sessions
- **Profile Setup** — 3-step onboarding flow collecting user info, body metrics, and fitness goals
- **Exercise Library** — 55+ preset exercises across 12 muscle groups, searchable and filterable
- **Workout Sessions** — Select exercises, track weight/reps/sets, live session timer, results summary
- **Stats Dashboard** — Weekly stats, activity chart, monthly goal tracking, latest achievement
- **Profile** — Level/XP system, workout stats, badges, personal info, edit profile
- **Streaks** — Day streak tracking with automatic reset logic
- **Achievements** — Unlockable badges with XP rewards
- **More** — Settings, push notifications, app info, logout

## Database Schema

| Table | Purpose |
|-------|---------|
| `users` | Profile data, XP, goals, linked to Supabase Auth via `auth_id` |
| `workouts` | Exercise definitions (preset and custom) |
| `sessions` | Logged workout sessions with sets, reps, weight, duration |
| `achievement_definitions` | Achievement names, descriptions, XP rewards |
| `user_achievements` | Records of which users earned which achievements |
| `streaks` | Current streak, longest streak, last active date per user |

## Setup

1. Clone the repo
   ```bash
   git clone https://github.com/Oasis-NEU/s26-group-16.git
   cd s26-group-16
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Start the app
   ```bash
   npx expo start
   ```

## Team

Built by Group 16 — Oasis NEU, Spring 2026
