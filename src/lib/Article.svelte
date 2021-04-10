<script lang="ts">
  export let title = 'Sample title';
  export let subtitle = 'Sample subtitle';

  import Avatar from "$lib/Avatar.svelte";
</script>

<a href="/insights/test">
  <div class="card">
    <img alt="pic" src="https://images.unsplash.com/photo-1596693760506-8542d308bd7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80">
    <div class="content">
      <div>
        <div class="category">Category</div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
    <div class="profile">
      <Avatar
        alt="Ross Sheppard"
        src="https://avatars.githubusercontent.com/u/10472920?s=60&v=4"
      />
      <div class="info">
        <div class="name">Ross Sheppard</div>
        <div class="position">Founder & CEO</div>
      </div>
    </div>
  </div>
</a>

<style>
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  .card {
    background-color: var(--color-background-accent);
    box-shadow: var(--shadows-1);
    height: 450px;
    position: relative;
    width: 350px;
  }

  .card img {
    display: block;
    height: 350px;
    width: 100%;
  }

  .category {
    background-color: rgb(0, 0, 0, .6);
    color: var(--color-common-white);
    font-size: 10px;
    letter-spacing: 4px;
    padding: 4px var(--spacing-2);
    position: absolute;
    text-transform: uppercase;
    top: -22px;
  }

  .content {
    position: relative;
  }

  .content > div {
    align-items: center;
    background-color: var(--color-background-paper);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    left: 0;
    padding: var(--spacing-2);
    position: absolute;
    transition: all .3s ease-in-out;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .content h2 {
    font-family: var(--font-family-heading);
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    margin-bottom: var(--spacing-1);
    text-align: left;
    width: 100%;
  }

  .content h3 {
    color: grey;
    font-family: var(--font-family-heading);
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    text-align: left;
    width: 100%;
  }

  .card:hover .content > div {
    transform: translateY(-60px);
  }

  .info {
    margin-left: var(--spacing-2);
    text-align: left;
  }

  .info > div:first-of-type {
    font-size: 16px;
    font-weight: 600;
  }

  .info > div:last-of-type {
    font-size: 12px;
  }

  .profile {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 60px;
    padding: 0 var(--spacing-2);
    position: absolute;
    z-index: 1;
  }

  @media screen and (max-width: 800px) {
    .card {
      height: 600px;
      width: 100%;
    }

    .card img {
      height: 500px;
    }
  }
</style>