<script lang="ts">
    import GStatus from '../components/global-status.svelte';

    export let title: string | undefined = undefined;
</script>

<header
    class="fixed z-50 py-1 px-2 top-0 left-0 w-full bg-gray-50 text-gray-500 flex flex-row justify-between items-center text-lg"
>
    <div class="space-x-3">
        <a href={'/#/'}>Main</a>
    </div>
    <div class="space-x-3">
        <a href={'/#/fuqs'}>Fuqs</a>
        <a href={'/#/users'}>Users</a>
    </div>
</header>

<div class="flex flex-col mt-10 px-2 py-3">
    <GStatus />

    {#if title}
        <p class="sm:text-5xl tracking-wide text-xl border-b-2 pb-2">{title}</p>
    {/if}
    <slot />
</div>
