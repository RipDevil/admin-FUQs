<svelte:head>
	<title>Root page</title>
</svelte:head>

<script lang="ts">
  import Router from 'svelte-spa-router';
  import type { RouteDefinition } from 'svelte-spa-router';

  import ConfigLayout from './layout/config.svelte';
  import ContentLayout from './layout/index.svelte';

  import FuqsPage from './pages/fuqs-page.svelte';
  import LoadingPage from './pages/login-page.svelte';
  import MainPage from './pages/main-page.svelte';

  // import wrap from 'svelte-spa-router/wrap';
  // https://github.com/kaisermann/svelte-i18n/issues/48
  const routes: RouteDefinition = {
    '/': MainPage,
    '/login': LoadingPage,
    // should be PRIVATE
    '/fuqs': FuqsPage,
  }
</script>

<ConfigLayout>
  <ContentLayout>
    <nav class="flex-row">
      <a href={'/'}>Main</a>
      <a href={'/#/login'}>Login</a>
      <a href={'/#/fuqs'}>Fuqs</a>
    </nav>
    <Router {routes}/>
  </ContentLayout>
</ConfigLayout>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>