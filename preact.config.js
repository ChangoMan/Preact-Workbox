import WorkboxPlugin from 'workbox-webpack-plugin';
import asyncPlugin from 'preact-cli-plugin-fast-async';

export default config => {
  config.plugins.push(
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: './service-worker.js',
      include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/]
    })
  );
  asyncPlugin(config);
  return config;
};