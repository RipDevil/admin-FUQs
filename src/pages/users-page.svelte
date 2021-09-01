<script lang="ts">
    import { onMount } from 'svelte';
    import { getUsers, users } from '../models/users';

    import Layout from '../layout/index.svelte';
    import Modal from '../components/modal.svelte';

    onMount(() => {
        getUsers();
    });
</script>

<svelte:head>
    <title>Users Page</title>
</svelte:head>

<!-- <Modal visible={true}>
    <div>Test</div>
</Modal> -->

<Layout title="Users Page">
    <div class="mt-5 space-y-2">
        <div class="p-2 rounded-md bg-green-100 hover:bg-green-200 text-xl cursor-pointer flex flex-row justify-center">
            <div>Create new user</div>
        </div>
        {#each $users as user}
            <div
                class="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xl cursor-pointer flex flex-row justify-between"
            >
                <div>{user.login}</div>
            </div>
        {/each}
    </div>
</Layout>
