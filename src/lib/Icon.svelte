<script>
  export let icon;
  export let size = 'md';
  export let lib = 'regular';
  export let variant = 'default';

  let library;
  if (lib === 'brand') library = 'fab';
  if (lib === 'duotone') library = 'fad';
  if (lib === 'light') library = 'fal';
  if (lib === 'regular') library = 'far';
  if (lib === 'solid') library = 'fas';
</script>
  
<i class={`${library} fa-${icon} fa-${size} ${variant}`} {...$$restProps}></i>

<style>
  .default {
    color: inherit;
  }

  .primary {
    color: var(--color-primary-main);
  }
</style>