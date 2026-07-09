import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Automatycznie pobieramy nazwę repozytorium z GitHub Actions (np. "/moje-repozytorium/")
const getBaseUrl = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return '/';
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Jeśli buduje GitHub Actions, wstawi poprawną ścieżkę, lokalnie użyje '/'
  base: getBaseUrl(),
})
