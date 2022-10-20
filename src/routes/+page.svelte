<script lang="ts">
  import { i18n } from "@i18n";

  import { Header, SEO } from "@components";
</script>

<Header />

<SEO title={$i18n.t("home")} />

<h1>{$i18n.t("welcome")}</h1>

<div class="row">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
  </a>
  <a href="https://tauri.app" target="_blank" rel="noopener noreferrer">
    <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
  </a>
  <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">
    <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
  </a>
</div>

<p>{$i18n.t("title")}</p>

<style src="../styles/pages/Home.scss"></style>
