# Interlinked - Firebase Configuration

This project uses environment variables to manage Firebase configuration securely.

## 🚀 Setup

1. **Create `.env` file** in the project root with your Firebase configuration:

   ```env
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_DATABASE_URL=your_database_url
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   FIREBASE_MEASUREMENT_ID=your_measurement_id
   GOOGLE_CLIENT_ID=your_google_client_id
   ```

2. **Get your Firebase config** from Firebase Console → Project Settings → Your Apps

3. **Get your Google OAuth Client ID** from Google Cloud Console → APIs & Services → Credentials

## 📁 Files

- `.env` - Environment variables (not in git)
- `config.js` - Configuration loader
- All HTML files use `window.appConfig.getFirebaseConfig()`

## 🔒 Security

- `.env` file is excluded from git
- Never commit API keys to version control

## 🛠️ Development

The `config.js` file provides fallback values if `.env` is not available.
