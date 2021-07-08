<script lang="ts">
  import Layout from '../layout/index.svelte';
</script>

<svelte:head>
  <title>Main Page</title>
</svelte:head>

<Layout title="Main Page">
  <a class="transition-all mb-1 mt-3 p-1 rounded-md bg-gray-50 ring-gray-300 ring-2" href="/#/fuqs"
    >FUQs</a
  >
  <a class="transition-all hover:text-lg my-1 p-1 rounded-md bg-gray-50 ring-gray-300 ring-2" href="/#/users"
    >Users</a
  >
</Layout>
