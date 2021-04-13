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

<div class="w-full">
  <div class="flex items-center justify-end mb-5">
    <button
      class={`
        bg-background-paper
        cursor-pointer
        flex
        items-center
        p-2
        shadow-md
        text-sm
      `}
      on:click={handleToggleAll}
    >
      <Icon
        class="pr-2"
        icon="expand"
        lib="light"
        size="xl"
      />
      {all ? 'Collapse ' : 'Expand '} All
    </button>
  </div>
  <ul class="list-none p-0 text-left">
    {#each items as item}
      <li
        class={`
          bg-primary-light
          border-b
          border-background-paper
          border-solid
          cursor-pointer
          duration-300
          ease-in-out
          flex
          items-center
          justify-between
          p-5
          text-primary-contrast
        `}
        in:slide
        on:click={() => handleToggle(item.name)}
      >
        {item.name}
        <Icon
          class={`
            transition-all
            ${open[item.name] ? "transform rotate-90" : null}
          `}
          icon="chevron-right"
          lib="light"
        />
      </li>
      {#if open[item.name]}
        <li class="p-5" transition:slide>
          {@html item.desc}
        </li>
      {/if}
    {/each}
  </ul>
</div>

