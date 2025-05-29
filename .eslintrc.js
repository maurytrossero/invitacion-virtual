module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Mejora sobre "vue3-essential"
    '@vue/eslint-config-typescript',
    'prettier' // Si estás usando Prettier, es bueno evitar conflictos
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off', // Desactivado, pero podrías usar 'warn' si preferís verlo
    'vue/multi-word-component-names': 'off' // útil si usás nombres como `Home.vue`
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
