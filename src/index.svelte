<script lang="ts">
    import Router from 'svelte-spa-router';
    import ConfigLayout from './layout/config.svelte';
    import Spinner from './components/spinner.svelte';
    import { loaderVisible, loaderText } from './models/global-spinner';
    import routes from './pages/routes';
    import { $localStorageChecked as localStorageChecked, checkLocaleStorage } from './models/auth/auth.model';

    !$localStorageChecked && checkLocaleStorage();
</script>

<ConfigLayout>
    {#if $loaderVisible}
        <Spinner>{$loaderText ?? 'Loading...'}</Spinner>
    {/if}
    <Router {routes} />
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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

        overflow-x: hidden;
    }

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
