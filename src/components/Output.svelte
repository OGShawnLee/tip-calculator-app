<script lang="ts">
  export let output: unknown;
  export let id: string;
</script>

<div class="flex items-center justify-between | text-sm">
  <label class="flex flex-col" id="{id}-label" for={id}>
    <span class="text-sm text-white">
      <slot />
    </span>
    <span class="text-xs text-powder-300"> / person </span>
  </label>
  <output
    class="text-cyan-500 text-2xl lg:text-4xl"
    {id}
    aria-labelledby="total-amount-person-label">
    ${output}
  </output>
</div>
