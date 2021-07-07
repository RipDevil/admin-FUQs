<script lang="ts">
  import Layout from '../layout/index.svelte';
  import Mosaic from '../components/mozaic/index.svelte';
</script>

<svelte:head>
  <title>Main Page</title>
</svelte:head>

<Layout>
  <p class="sm:text-5xl tracking-wide text-xl border-b-2">Main Page</p>

  <Mosaic
    elements={[
      {
        title: 'Manage FUQs',
        link: '/#/fuqs'
      },
      {
        title: 'Manage Users',
        tags: 'delete, add, edit',
        link: '/#/users'
      },
    ]}
  />
</Layout>
