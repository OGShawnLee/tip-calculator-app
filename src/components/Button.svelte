<script lang="ts">
  export let tip: number | null;
  export let percentage: number;

  $: isSelected = tip === percentage;
  $: className = isSelected ? 'bg-cyan-500 text-cyan-700' : 'hover:(bg-cyan-300 text-cyan-700)';
</script>

<button
  class="py-2 | bg-cyan-700 {className} rounded-lg outline-none focus:ring-3"
  on:click={() => (tip = percentage)}>
  {percentage}%
</button>
