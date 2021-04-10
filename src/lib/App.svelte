<script>
  import { getContext, onMount, setContext } from 'svelte';

  $: contrast = "light";

  const updateContrast = () => {
    console.log(contrast);
    contrast = contrast === "light" ? "dark" : "light";
    const element = document.querySelector("body");

    element.classList.toggle(contrast);
    return { updateContrast, mode: contrast };
  };

  setContext("contrast", updateContrast());
</script>

<slot />