<script>
  export let alt;
  export let size = "md";
  export let src;
</script>

<img
  alt={alt}
  class={size}
  src={src}
/>

<style>
  img {
    border-radius: 50%;
  }

  .md {
    height: 32px;
    width: 32px;
  }

  .sm {
    height: 24px;
    width: 24px;
  }

  .xs {
    height: 18px;
    width: 18px;
  }
</style>