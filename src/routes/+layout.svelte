<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";
  import { auth } from "@stores";

  import "@styles";

  import { Header } from "@components";

  let showViews = false;

  onMount(async () => {
    if (!($auth.token && $auth.user)) {
      await goto("/auth");
      console.log('await goto("/auth");');
    } else {
      await goto("/");
      console.log('await goto("/");');
    }

    showViews = true;
  });
</script>

<Header />
{#if showViews}
  <main class="container" transition:blur>
    <slot />
  </main>
{/if}
