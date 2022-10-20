<script lang="ts">
  import { isLoading } from "svelte-i18next";
  import { i18n } from "@i18n";

  const onChangeLang = () => {
    $i18n.changeLanguage($i18n.language === "es" ? "en-US" : "es");
  };
</script>

<button on:click={onChangeLang} disabled={$isLoading}>
  {#if $isLoading}
    <span>{$i18n.t("loading")}</span>
  {:else}
    {$i18n.language}
  {/if}
</button>

<style src="../styles/components/Header.scss"></style>
