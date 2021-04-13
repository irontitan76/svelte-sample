<script>
  import { slide } from 'svelte/transition';
  import Icon from '$lib/Icon.svelte';

  export let items;

  $: open = {};
  $: all = false;

  const handleToggle = (item) => {
    open[item] = !open[item];

    const allAreEqual = Object.values(open).every((val) => val === !all);
    const allPresent = Object.keys(open).length === items.length;

    if (allAreEqual && allPresent) {
      all = !all;
    }
  };

  const handleToggleAll = () => {
    items.forEach(item => open[item.name] = !all);
    all = !all;
  };
</script>

<div class="container">
  <div class="expander-wrapper">
    <button class="expander" on:click={handleToggleAll}>
      <Icon
        icon="expand"
        lib="light"
        size="xl"
      />
      {all ? 'Collapse ' : 'Expand '} All
    </button>
  </div>
  <ul class="items">
    {#each items as item}
      <li
        class={`item ${open[item.name] ? "open" : null}`}
        in:slide
        on:click={() => handleToggle(item.name)}
      >
        {item.name}
        <Icon icon="chevron-right" lib="solid" />
      </li>
      {#if open[item.name]}
        <li class="expanded" transition:slide>
          {@html item.desc}
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  .container {
    width: 100%;
  }

  .expander {
    align-items: center;
    background-color: var(--color-background-accent);
    border: none;
    box-shadow: var(--shadows-1);
    color: var(--color-primary-text);
    cursor: pointer;
    display: flex;
    outline: none;
    padding: var(--spacing-1);
  }

  .expander > :global(*:first-child) {
    margin-right: var(--spacing-1);
  }

  .expander-wrapper {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .expanded {
    padding: var(--spacing-2);
  }

  .open :global(i) {
    transform: rotate(90deg);
  }

  .item {
    align-items: center;
    background-color: var(--color-primary-light);
    border-bottom: 1px solid var(--color-background-paper);
    color: var(--color-primary-contrast-text);
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    padding: var(--spacing-2);
  }

  .item :global(i) {
    transition: all .3s ease-in-out;
  }

  .items {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
</style>

