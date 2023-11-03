import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'xpto',
  webDir: 'dist/front',
  server: {
    // androidScheme: 'https'
    url: 'https://banco-xpto.netlify.app/',
    cleartext: true
  }
};

export default config;
