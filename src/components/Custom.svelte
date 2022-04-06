<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext, tick } from 'svelte';
  import { isNullish, isOver } from '../utils';

  const Custom = getContext('custom') as Writable<number>;

  export let tip: number;
  let value: number;

  $: isCero = tip === 0;
  $: stateClassName = isCero ? 'text-powder-200' : 'text-cyan-700';

  $: hasError = !isNullish(value) && !isOver(-1, value);
  $: ringClassName = hasError ? 'focus:ring-red-400' : 'focus:ring-cyan-300';
  $: tip = $Custom;

  async function set(this: HTMLInputElement) {
    await tick();
    if (typeof this.value === 'string' && !isNullish(this.value)) hasError = true;
    tip = value = Number(this.value);
  }
</script>

<input
  class="{ringClassName} {stateClassName}"
  type="number"
  placeholder="Custom"
  pattern="[0-9]"
  on:input={set}
  bind:value={$Custom} />

<style>
  input {
    @apply px-3 bg-powder-50 rounded-lg text-powder-400 text-right lg:text-center outline-none focus:ring-3;
  }
</style>
