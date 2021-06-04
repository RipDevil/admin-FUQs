<script lang="ts">
  import { onMount } from 'svelte';
  import type { AxiosResponse } from 'axios';

  import { getConfig } from '../models/config';
  import type { ConfigType } from '../models/config'
  import { configChanged } from '../models/config/model';

  let config: AxiosResponse<ConfigType>;
  onMount(async () => {
    config = await getConfig();
    configChanged(config.data);
  });
</script>

{#if config && config?.status === 200}
  <slot />
{:else}
  <h1>Error during config loading</h1>
{/if}





