<script lang="ts">
  export let state: 'empty' | 'filled';
</script>

<button
  class="mt-auto py-2 | bg-cyan-500 hover:(bg-cyan-300 text-cyan-700) rounded-lg text-cyan-700 text-lg lg:text-xl uppercase"
  class:opacity-25={state === 'empty'}
  disabled={state === 'empty'}
  on:click>
  <slot />
</button>
