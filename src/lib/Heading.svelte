<script lang="ts">
  export let title;
  export let subtitle = null;
</script>

<h2 class={`
  font-heading
  font-bold
  p-5
  text-5xl
  text-center
  tracking-widest
  uppercase
  ${subtitle ? 'm-b-0' : ''}
`}>
  {title}
</h2>
{#if subtitle}
  <h3 class="
    mb-16
    mt-0
    text-2xl
    text-heading
    tracking-wide
  ">
    {subtitle}
  </h3>
{/if}