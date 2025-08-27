// Configuration loader for Firebase
class Config {
  constructor() {
    this.config = this.loadConfig();
  }

  loadConfig() {
    // For browser environments, we need to use a different approach
    // You can either:
    // 1. Use a build tool to inject environment variables
    // 2. Create a separate config file that gets generated from .env
    // 3. Use a simple approach with direct configuration
    
    // For now, let's use a simple approach that's still secure
    // You can replace these values with your actual Firebase config
    const config = {
      apiKey: "AIzaSyDgqD_R_L-qgIaFGB_c9qJRID0KV9jgLPY",
      authDomain: "interlinked-b5d13.firebaseapp.com",
      databaseURL: "https://interlinked-b5d13-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "interlinked-b5d13",
      storageBucket: "interlinked-b5d13.firebasestorage.app",
      messagingSenderId: "146726521975",
      appId: "1:146726521975:web:f42bbfe0c1207a1ac14a72",
      measurementId: "G-79V9PFWB4E",
      googleClientId: "146726521975-gsg2aanikj3n8vrkmsga22i6v48rd4eq.apps.googleusercontent.com"
    };

    // Validate that all required values are present
    const requiredKeys = ['apiKey', 'authDomain', 'databaseURL', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
    const missingKeys = requiredKeys.filter(key => !config[key]);
    
    if (missingKeys.length > 0) {
      throw new Error(`Missing required configuration values: ${missingKeys.join(', ')}`);
    }

    return config;
  }

  getFirebaseConfig() {
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      databaseURL: this.config.databaseURL,
      projectId: this.config.projectId,
      storageBucket: this.config.storageBucket,
      messagingSenderId: this.config.messagingSenderId,
      appId: this.config.appId,
      measurementId: this.config.measurementId
    };
  }

  getGoogleClientId() {
    return this.config.googleClientId;
  }
}

// Create global config instance
window.appConfig = new Config();
