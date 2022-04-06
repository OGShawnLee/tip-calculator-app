<script lang="ts" context="module">
  function getPercentage(value: number): number {
    return value / 100;
  }

  function getTipPerPerson(totalTip: number, people: number): string {
    return isOver(0, totalTip, people) ? (totalTip / people).toFixed(2) : '0.00';
  }

  function getTotalPerPerson(bill: number, people: number): string {
    return isOver(0, bill, people) ? (bill / people).toFixed(2) : '0.00';
  }

  function getTotalTip(bill: number, tip: number): number {
    return isOver(0, bill, tip) ? bill * getPercentage(tip) : 0;
  }
</script>

<script lang="ts">
  import { Button, Custom, Input, Logo, Reset, Output } from './components';
  import { iconDollar, iconPerson } from './assets';
  import { isIntersecting, isOver, useWindowListener } from './utils';
  import { writable } from 'svelte/store';
  import { onMount, setContext } from 'svelte';

  let bill = 0;
  let tip = 0;
  let people = 1;

  const CustomValue = writable<number | null>();
  setContext('custom', CustomValue);

  $: totalPerPerson = getTotalPerPerson(bill, people);
  $: totalTip = getTotalTip(bill, tip);
  $: tipPerPerson = getTipPerPerson(totalTip, people);

  let state: 'empty' | 'filled';
  $: state = isOver(0, bill, people) ? 'filled' : 'empty';

  function reset() {
    if (state === 'empty') return;
    bill = tip = 0;
    people = 1;
    CustomValue.set(null);
  }

  let logo: HTMLElement;
  let content: HTMLElement;

  let intersecting = false;
  onMount(() => {
    intersecting = isIntersecting(logo, content);
    return useWindowListener('resize', () => {
      intersecting = isIntersecting(logo, content);
    });
  });
</script>

<Logo bind:element={logo} isIntersecting={intersecting} />
<main class="relative z-10">
  <div
    bind:this={content}
    class="max-w-4xl p-8 | grid lg:grid-cols-2 gap-8 | bg-white rounded-t-2xl lg:rounded-2xl">
    <div class="flex flex-col gap-8">
      <Input bind:value={bill} icon={iconDollar} id="bill" isValidValue={isOver(-1, bill)}>
        Bill
      </Input>
      <div class="space-y-4">
        <span class="text-powder-400 text-sm"> Select Tip % </span>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 | text-xl sm:text-2xl text-white">
          <Button bind:tip percentage={5} />
          <Button bind:tip percentage={10} />
          <Button bind:tip percentage={15} />
          <Button bind:tip percentage={25} />
          <Button bind:tip percentage={50} />
          <Custom bind:tip />
        </div>
      </div>
      <Input bind:value={people} icon={iconPerson} id="people" isValidValue={isOver(0, people)}>
        Number of People
      </Input>
    </div>

    <div class="pt-8 pb-6 px-6 lg:p-10 | flex flex-col gap-8 | bg-cyan-700 rounded-xl">
      <Output output={tipPerPerson} id="tip-amount-person">Tip Amount</Output>
      <Output output={totalPerPerson} id="total-amount-person">Total Amount</Output>
      <Reset {state} on:click={reset}>Reset</Reset>
    </div>
  </div>
</main>

<style>
  /* https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
  /* Chrome, Safari, Edge, Opera */
  :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  :global(input[type='number']) {
    -moz-appearance: textfield;
  }
</style>
