<script lang="ts">
  import type { MosaicElement } from './types';

  export let elements: MosaicElement[] = [];
</script>

<div class="m-2 flex flex-row flex-wrap">
  {#each elements as { title, bgColor, tags, link }}
    <a
      href={link}
      class={`block transition-all duration-500 cursor-pointer m-2 w-32 h-32 ${
        bgColor || 'bg-gray-50'
      } rounded-md flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:w-36 hover:h-36`}
    >
      <div class="text-gray-600">{title}</div>
      {#if tags}
        <div class="text-gray-300">{tags}</div>  
      {/if}
    </a>
  {/each}
</div>
