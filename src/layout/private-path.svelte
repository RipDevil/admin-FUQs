<script lang="ts">
  export let isAuth = true;
</script>

{#if isAuth}
  <slot />
{:else}
  <a href="/">go back</a>
{/if}