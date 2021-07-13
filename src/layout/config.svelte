<script lang="ts">
  import { onMount } from 'svelte';
  import {
    downloadConfig,
    $configInited as configInited,
    $configIsNotInited as configNotInited,
  } from '../models/config';

  onMount(() => {
    downloadConfig();
  });
</script>

<h1>Hi!</h1>

{#if configInited}
  <slot />
{/if}

{#if configNotInited}
  Config is loading!
{/if}
