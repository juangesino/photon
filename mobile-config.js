App.info({
  id: 'com.juangesino.photon',
  name: 'Photon',
  version: "0.0.1",
  description: 'App to control Photon-connected lights.',
  author: 'Juan I. Gesino',
  email: 'juangesino.pub@gmail.com',
  website: 'https://github.com/juangesino'
});

App.icons({
  'android_mdpi': 'resources/icons/mipmap-mdpi/icon.png',
  'android_hdpi': 'resources/icons/mipmap-hdpi/icon.png',
  'android_xhdpi': 'resources/icons/mipmap-xhdpi/icon.png',
  'android_xxhdpi': 'resources/icons/mipmap-xxhdpi/icon.png',
  'android_xxxhdpi': 'resources/icons/mipmap-xxxhdpi/icon.png',
});

App.launchScreens({
  'android_mdpi_portrait': 'resources/splash/splash-port-mdpi.png',
  'android_hdpi_portrait': 'resources/splash/splash-port-hdpi.png',
  'android_xhdpi_portrait': 'resources/splash/splash-port-xhdpi.png',
  'android_mdpi_landscape': 'resources/splash/splash-land-mdpi.png',
  'android_hdpi_landscape': 'resources/splash/splash-land-hdpi.png',
  'android_xhdpi_landscape': 'resources/splash/splash-land-xhdpi.png',
});

App.setPreference('StatusBarStyle', 'false');
App.setPreference('StatusBarBackgroundColor', '#F1D070');

App.accessRule('http://*');
App.accessRule('https://*');
