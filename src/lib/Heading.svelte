<script lang="ts">
  export let title;
</script>

<h2 class="root">{title}</h2>

<style>
  .root {
    color: var(--color-primary-text);
    font-family: var(--font-family-heading);
    font-size: 2.5707rem;
    font-weight: 700;
    letter-spacing: 3px;
    padding: var(--spacing-2);
    text-align: center;
    text-transform: uppercase;
  }
</style>