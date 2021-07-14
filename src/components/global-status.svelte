<script lang="ts">

  export let customClass: string = 'w-full py-1 px-3';

  import {
    statusText,
    statusVisible,
    statusType,
  } from '../models/global-status';
  import { getStatusClass } from '../utils/gstatus-class';

  $: statusClass = getStatusClass($statusType);
</script>

{#if $statusVisible}
  <div
    class={`${statusClass} ${customClass}`}>
    {$statusText ?? 'Something has happened!'}
  </div>
{/if}

<style lang="postcss">
  .error {
    @apply text-white bg-red-400;
  }

  .warning {
    @apply text-white bg-yellow-400;
  }

  .success {
    @apply text-white bg-green-500;
  }

  .note {
    @apply text-black bg-transparent;
  }

</style>