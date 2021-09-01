<script lang="ts">
    export const title = 'Something';
    export let visible: boolean;
    // TODO: smooth animation
</script>

{#if visible}
    <div class="absolute z-50 w-full h-full bg-gray-200 flex flex-col items-center justify-center overflow-hidden">
        <div class="w-1/3 rounded-md bg-gray-50 p-2 shadow-md">
            <div class="text-center mb-2 text-lg">{title}</div>
            <div class="flex flex-col space-y-1">
                <slot />
            </div>
        </div>
    </div>
{/if}
