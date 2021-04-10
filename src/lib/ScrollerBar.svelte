<script>
  export let items = [];

  import Icon from "$lib/Icon.svelte";
</script>

<div class="root">
  {#each items as item}
    <a class="item" href={item.href}>
      <Icon lib="light" icon={item.icon} size='lg' variant="primary" />
      <span>{item.label}</span>
    </a>
  {/each}
</div>

<style>
  .item {
    color: inherit;
    cursor: pointer;
    font-family: var(--font-family-text);
    font-size: 14px;
    font-weight: 400;
    padding: var(--spacing-1);
    text-decoration: none;
    text-transform: capitalize;
  }

  .item span {
    margin-left: var(--spacing-1);
  }

  .item:hover {
    background-color: rgba(0, 0 , 0, .05);
  }

  .item:is(:not(:last-of-type)) {
    margin-right: var(--spacing-2);
  }

  .root {
    align-items: center;
    background-color: var(--color-background-paper);
    box-shadow: var(--shadows-1);
    display: flex;
    justify-content: start;
    min-height: 48px;
    padding: 0 var(--spacing-2);
    position: sticky;
    top: 64px;
    z-index: 1100;
  }
</style>