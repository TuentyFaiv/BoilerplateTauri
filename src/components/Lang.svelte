<script lang="ts">
  import { fade } from "svelte/transition";
  import { isLoading } from "svelte-i18next";
  import { i18n } from "@i18n";
  import config from "@config";

  let open = false;

  const onShowLangs = () => {
    open = !open;
  };

  const onChangeLang = (lang: string) => () => {
    $i18n.changeLanguage(lang);
    onShowLangs();
  };
</script>

<button
  on:click={onShowLangs}
  on:mouseleave={open ? onShowLangs : undefined}
  on:mouseenter={!open ? onShowLangs : undefined}
  disabled={$isLoading}
  class="lang"
  class:lang--active={open}
>
  {$i18n.language?.split("-")[0]}
  {#if open}
    <span class="lang__options" transition:fade={{ duration: 350 }}>
      {#each config.i18n_langs as lang (lang)}
        <span
          on:click|stopPropagation={onChangeLang(lang)}
          on:keydown|stopPropagation={onChangeLang(lang)}
          role="button"
          class="lang__option"
          tabindex={0}
        >
          {lang.split("-")[0]}
        </span>
      {/each}
    </span>
  {/if}
</button>

<style src="../styles/components/Lang.scss"></style>
