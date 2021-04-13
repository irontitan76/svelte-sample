<script>
  import { slide } from 'svelte/transition';

  export let open;
</script>

{#if open}
  <div class="alert" transition:slide>
    <slot />
  </div>
{/if}

<style>
  .alert {
    background-color: var(--color-background-accent);
    border-radius: 4px;
    bottom: var(--spacing-3);
    box-shadow: var(--shadows-1);
    color: var(--color-primary-text);
    padding: var(--spacing-1) var(--spacing-4);
    position: fixed;
    left: var(--spacing-3);
  }
</style>