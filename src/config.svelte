<script context="module">
  import { messages } from '$lib/lang/en-US.svelte';

  export const config = {
    logo: {
      prefix: 'THE',
      suffix: 'PARTY',
      title: 'FREEDOM',
    },
    routes: [
      {
        children: [
          { href: "/about/issues", name: "The Issues" },
          { href: "/about/leadership", name: "Leadership" },
        ],
        href: "/about",
        name: "About",
      },
      {
        children: [
          { href: "/insights/read", name: "Articles" },
          { href: "/insights/watch", name: "Videos" },
        ],
        href: "/insights",
        name: "Insights",
      },
    ],
    landing: {
      sections: [
        {
          href: '#overview',
          icon: 'telescope',
          label: messages({ id: 'landing.scroller.item.0'}),
          subtitle: 'CHASING A PEACEFUL AND PROSPEROUS NATION',
          title: 'FREEDOM IS OUR FOUNDATION',
        },
        {
          href: '#recent-insights',
          icon: 'history',
          label: messages({ id: 'landing.scroller.item.1'}),
          subtitle: 'EMBRACE OPEN INNOVATION AND NEW WAYS OF THINKING',
          title: 'EXPLORE INSIGHTS',
        },
      ]
    },
  };
</script>