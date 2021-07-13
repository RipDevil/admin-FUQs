<script lang="ts">
  import Router from 'svelte-spa-router';
  import ConfigLayout from './layout/config.svelte';
  import Spinner from './components/spinner.svelte';
  import { loaderVisible, loaderText, showLoader } from './models/global-spinner';
  import routes from './pages/routes';
</script>

<ConfigLayout>
  {#if $loaderVisible}
    <Spinner>{$loaderText ?? 'Loading...'}</Spinner>
  {:else}
    <Router {routes} />
  {/if}
</ConfigLayout>

<style global lang="postcss">
  a {
    color: inherit !important;
  }

  a:hover {
    text-decoration: none !important;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
