<script lang="ts">
  import Router from 'svelte-spa-router';
  import ConfigLayout from './layout/config.svelte';
  import ContentLayout from './layout/index.svelte';
  import Spinner from './components/spinner.svelte';

  import {
    $loader as loaderState,
    showLoader,
  } from './models/global-spinner/index';
  import type { LoaderType } from './models/global-spinner/index';
  import routes from './pages/routes';

  let loader: LoaderType = loaderState.defaultState;

  loaderState.subscribe((newState) => {
    loader = newState;
  });

  // showLoader()
</script>

{#if loader.visible}
  <Spinner>{loader.text ?? 'Loading...'}</Spinner>
{:else}
  <ConfigLayout>
    <Router {routes} />
  </ConfigLayout>
{/if}

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
