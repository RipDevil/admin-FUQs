<svelte:head>
	<title>Root page</title>
</svelte:head>

<script lang="ts">
  import Router from 'svelte-spa-router';
  import ConfigLayout from './layout/config.svelte';
  import ContentLayout from './layout/index.svelte';

  import routes from './pages/routes';
</script>

<ConfigLayout>
  <ContentLayout>
    <nav class="flex-row">
      <a href={'/#/'}>Main</a>
      <a href={'/#/login'}>Login</a>
      <a href={'/#/fuqs'}>Fuqs</a>
      <a href={'/#/fuq'}>Fuq</a>
      <a href={'/#/users'}>Users</a>
      <a href={'/#/user'}>User</a>
    </nav>
    <Router {routes}/>
  </ContentLayout>
</ConfigLayout>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>