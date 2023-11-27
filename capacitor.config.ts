import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'xpto',
  webDir: 'dist/xpto',
  server: {
    // androidScheme: 'https'
    // url: 'https://banco-xpto.netlify.app/',
    url: "http://192.168.15.187:4200/",
    // hostname: '192.168.15.187:4200',
    cleartext: true
  }
};

export default config;
