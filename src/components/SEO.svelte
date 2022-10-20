<script lang="ts">
  import config from "@config";

  export let title: string;
</script>

<svelte:head>
  <title>{title} | {config.brand}</title>
</svelte:head>
