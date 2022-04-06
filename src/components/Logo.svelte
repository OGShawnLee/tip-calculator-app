<script lang="ts">
  import { logoIcon } from '../assets';

  export let element: HTMLElement;
  export let isIntersecting: boolean;
</script>

<div bind:this={element} class={isIntersecting ? 'opacity-0' : 'opacity-100'}>
  <img src={logoIcon} alt="Splitter" height="54" width="84" />
</div>

<style>
  div {
    @apply my-4 py-6 lg:(absolute top-20 left-1/2 -translate-x-1/2) grid place-content-center transform transition-opacity duration-250;
  }
</style>
