<script context="module">
  const messages = {
    // ABOUT
    'about.mission.content': ``,
    'about.mission.title': `Our mission`,
    'about.history.content': ``,
    'about.history.title': `Our History`,
    'about.founders.content': ``,
    'about.founders.title': `Founder's Letter`,

    // LANDING
    'landing.hero.h1': `Welcome to the Reformation`,
    'landing.hero.h2': `Building <span>modern</span> government with <span>intelligent</span> design`,
    'landing.hero.button': `Learn more`,
    'landing.overview.subtitle': `CHASING A PEACEFUL AND PROSPEROUS NATION`,
    'landing.overview.title': `FREEDOM IS OUR FOUNDATION`,
    'landing.insights.button': `Read more`,
    'landing.insights.subtitle': `EMBRACE OPEN INNOVATION AND NEW WAYS OF THINKING`,
    'landing.insights.title': `EXPLORE INSIGHTS`,
    'landing.scroller.item.0': `Overview`,
    'landing.scroller.item.1': `Recent insights`,
  };

  export const formatMessage = (params) => {
    const { id } = params;

    const message = messages[id];
    if (message) return message;

    console.error(`[ERROR] "${params.id.trim() || params}" could not be found in formatted messages. Falling back to explicitly passed in value.`);
    return params.id || params.toString();
  };
</script>