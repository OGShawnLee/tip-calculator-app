<script lang="ts">
  export let value: number;
  export let id: string;
  export let icon: string;
  export let isValidValue: boolean;

  $: inputStateClassName = value === 0 ? 'text-powder-200' : 'text-cyan-700';
  $: stateClassName = isValidValue ? 'focus-within:ring-cyan-300' : 'focus-within:ring-red-400';
</script>

<div class="relative space-y-2">
  <div class="flex items-start justify-between">
    <label class="text-powder-200 text-sm" for={id} id="input-{id}-label">
      <slot />
    </label>
    {#if !isValidValue}
      <span class="text-xs text-red-400"> Type a valid positive number </span>
    {/if}
  </div>
  <div class="relative bg-powder-50 rounded-lg focus-within:ring-3 {stateClassName}">
    <img class="absolute left-3 top-1/2 transform -translate-y-1/2" src={icon} alt="" />
    <input class={inputStateClassName} type="number" bind:value id="input-{id}" />
  </div>
</div>

<style>
  input {
    @apply h-full w-full py-2 px-3 bg-transparent text-xl sm:text-2xl text-right outline-none;
  }
</style>
