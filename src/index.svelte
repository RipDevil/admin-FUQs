<script lang="ts">
  import Router from 'svelte-spa-router';
  import ConfigLayout from './layout/config.svelte';
  import ContentLayout from './layout/index.svelte';
  import Spinner from './components/spinner.svelte';

  import { $globalLoader as globalLoaderState } from './models/global-spinner/model';
  import type { LoaderType } from './models/global-spinner/model';
  import routes from './pages/routes';

  let globalLoaderSt:LoaderType = { visible: false };

  function globalLoaderStateWatcher(state: LoaderType) {
    console.log('state :>> ', state);
    globalLoaderSt = state;
  }

  // @mna: subscribe or watch???
  globalLoaderState.subscribe(globalLoaderStateWatcher);
</script>

{#if globalLoaderSt.visible}
  <Spinner>{globalLoaderSt.text ?? 'Loading...'}</Spinner>
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