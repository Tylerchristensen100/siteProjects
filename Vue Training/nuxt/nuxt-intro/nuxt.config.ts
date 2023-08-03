// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  supabase: {
    //options
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      // https://supabase.io/docs/guides/auth#redirects
      login: '/login',
      callback: '/confirm',
      exclude: ['/','/about','/blog/*', '/login', '/confirm']
    }
  }
})
