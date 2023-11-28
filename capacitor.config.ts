import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.xpto.app',
  appName: 'xpto',
  webDir: 'dist/xpto',
  server: {
    androidScheme: 'https',
    hostname: 'banco-xpto.netlify.app/',
    cleartext: true
  }
};

export default config;
