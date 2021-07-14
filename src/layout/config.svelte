<script lang="ts">
  import { onMount } from 'svelte';
  import {
    downloadConfig,
    configInited,
    configNotInited,
  } from '../models/config';

  onMount(() => {
    downloadConfig();
  });
</script>

{#if $configInited}
  <slot />
{/if}

{#if $configNotInited}
  Config is loading!
{/if}
