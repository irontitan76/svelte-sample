<div class="slant">
  <slot />
</div>

<style>
  .slant {
    filter: drop-shadow(1px 0px 3px var(--color-primary-lighter));
  }

  .slant:before {
    background: var(--color-primary-lighter);
    bottom: 0;
    clip-path: polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px);
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
  }

  .slant:after {
    background: var(--color-background-default);
    bottom: 1px;
    clip-path: polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px);
    content: '';
    left: 1px;
    overflow: hidden;
    position: absolute;
    right: 1px;
    top: 1px;
    z-index: -1;
  }
</style>