<script lang="ts">
  export let title;
  export let subtitle = null;
</script>

<h2 class={`title ${subtitle ? 'noGutters' : ''}`}>{title}</h2>
{#if subtitle}
  <h3 class="subtitle">{subtitle}</h3>
{/if}

<style>
  .noGutters {
    margin-bottom: 0;
  }

  .subtitle {
    color: var(--color-primary-text);
    font-family: var(--font-family-heading);
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 0;
  }

  .title {
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