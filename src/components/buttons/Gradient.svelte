<script lang="ts">
  export let type: "submit" | "button" | "reset" = "button";
  export let text: string;
</script>

<button {type} on:click class="button button--gradient">
  {text}
</button>
