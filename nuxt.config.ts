// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    assetsInclude: [
      '**/*.svg',
      '**/*.png',
      '**/*.jpg',
      '**/*.gif',
      '**/*.ico',
      '**/*.bin',
      '**/*.gltf',
      '**/*.glb',
    ],
  },
  devtools: { enabled: true }
})
