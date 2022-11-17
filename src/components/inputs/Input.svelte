<script lang="ts">
  export let type = "text";
  export let name: string;
  export let id: string | null = null;
</script>

<label for={id ?? name} class="field">
  <input class="field__input" {type} id={id ?? name} {name} {...$$restProps} />
</label>
