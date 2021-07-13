<script lang="ts">
import { onMount } from 'svelte';

  import Layout from '../layout/index.svelte';
import { showLoader } from '../models/global-spinner';

  onMount(() => {
    showLoader("Long loader text")
  })
</script>

<svelte:head>
  <title>Main Page</title>
</svelte:head>

<Layout title="Main Page">
  <div class="text-2xl">Welcome to the FUQs project admin panel</div>
  <div class="text-lg">Here you can manage edit check users and fuqs and more!</div>
</Layout>
