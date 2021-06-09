<script lang="ts">
  import { onMount } from 'svelte';

  import { getConfigFx } from '../models/config';
  import type { ConfigType } from '../models/config';

  let config: Promise<ConfigType>;
  onMount(() => {
    config = getConfigFx();
  });
</script>

{#await config}
	<h1>Loading config</h1>
{:then}
	<slot />
{:catch error}
	<h1>{ error }</h1>
{/await}





