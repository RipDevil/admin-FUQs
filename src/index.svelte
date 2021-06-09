<script lang="ts">
  import Router from 'svelte-spa-router';
  import ConfigLayout from './layout/config.svelte';
  import ContentLayout from './layout/index.svelte';
  import Spinner from './components/spinner.svelte';

  import { $loader as loaderState } from './models/global-spinner/index';
  import type { LoaderType } from './models/global-spinner/index';
  import routes from './pages/routes';

  let loader: LoaderType = loaderState.defaultState;

  loaderState.subscribe((newState) => {
    loader = newState;
  });
</script>

{#if loader.visible}
  <Spinner>{loader.text ?? 'Loading...'}</Spinner>
{:else}
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
{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>