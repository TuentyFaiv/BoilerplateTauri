import {
  PUBLIC_API,
  PUBLIC_API_LOCAL,
  PUBLIC_IPREGISTRY_KEY,
  PUBLIC_IPREGISTRY_URL
} from "$env/static/public";

export default {
  brand: "Tauri",
  auth_pages: ["/auth/signin", "/auth/signup", "/auth/forgot"],
  i18n_langs: ["es", "en-US"],
  i18n_fallback_lang: "es",
  api: PUBLIC_API || "http://localhost:5000",
  api_local: PUBLIC_API_LOCAL || "http://localhost:1420",
  ipregistry_key: PUBLIC_IPREGISTRY_KEY,
  ipregistry_url: PUBLIC_IPREGISTRY_URL
};