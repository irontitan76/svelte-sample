<div class="root">
  <dialog open>
    Hello
  </dialog>
</div>

<style>
  dialog {
    background-color: var(--color-background-paper);
    box-shadow: var(--shadows-1);
    border: none;
    color: var(--color-primary-text);
    height: 400px;
    width: 350px;
  }

  .root {
    align-items: center;
    display: flex;
    height: calc(100vh - 128px);
    justify-content: center;
    width: 100vw;
  }
</style>