<script lang="ts">
  export let alt = "pic";
  export let src = "https://images.unsplash.com/photo-1596693760506-8542d308bd7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80";
  export let title = 'Sample title';
  export let subtitle = 'Sample subtitle';

  import Avatar from "$lib/Avatar.svelte";
</script>

<a
  class="cursor-pointer no-underline text-inherit"
  href="/insights/test"
>
  <div class="bg-background-accent group h-128 m-5 relative shadow-5 w-80">
    <img
      alt={alt}
      class="block h-full w-full"
      src={src}
    />
    <div class="relative">
      <div class="
        absolute
        bg-background-paper
        bottom-0
        box-border
        duration-500
        ease-in-out
        flex
        flex-wrap
        group-hover:-translate-y-16
        h-24
        items-center
        left-0
        p-5
        transform
        transition-all
        w-full
        z-10
      ">
        <div class="
          absolute
          bg-background-alpha
          px-6
          py-1
          text-white
          text-xs
          tracking-wide
          -top-6
          uppercase
        ">
          Category
        </div>
        <h2 class="
          font-heading
          font-medium
          m-0
          m-b-5
          text-left
          text-xl
          w-full
        ">
          {title}
        </h2>
        <h3
          class="
            font-heading
            font-light
            m-0
            m-b-5
            text-gray-500
            text-left
            text-md
          "
        >
          {subtitle}
        </h3>
      </div>
    </div>
    <div class="
      absolute
      bg-background-accent
      bottom-0
      items-center
      flex
      h-16
      p-5
      w-full
      z-0
    ">
      <Avatar
        alt="Ross Sheppard"
        src="https://avatars.githubusercontent.com/u/10472920?s=60&v=4"
      />
      <div class="ml-5 text-left">
        <div class="font-semibold text-md">Ross Sheppard</div>
        <div class="text-sm">Founder & CEO</div>
      </div>
    </div>
  </div>
</a>