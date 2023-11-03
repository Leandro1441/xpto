import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'xpto',
  webDir: 'dist/front',
  server: {
    // androidScheme: 'https'
    url: 'http://192.168.15.187:4200',
    cleartext: true
  }
};

export default config;
