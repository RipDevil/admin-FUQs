<script lang="ts">
    import Layout from '../layout/index.svelte';
    let name = '';
    let admin = false;

    type MockItem = {
        title: string;
        text: string;
        status: string; // ENUM is better
        likes: number;
        influencers: number;
    };
    let mockData: MockItem[] = [
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ exp',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
        {
            influencers: 0,
            likes: 0,
            status: 'EXTERMINATUS',
            text: 'FUQ text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title: 'FUQ title',
        },
    ];

    const handleSubmitForm = (e: Event) => {
        e.preventDefault();
        const params = {
            name: name.trim(),
            admin,
        };

        name = name.trim();

        console.log('params :>> ', params);
    };

    const handleClick = () => {};
</script>

<svelte:head>
    <title>FUQs Page</title>
</svelte:head>

<Layout title="Fuqs Page">
    <form
        on:submit={handleSubmitForm}
        class="transition-all duration-300 px-2 py-4 flex flex-col justify-center items-start w-full bg-gray-50 space-y-2 border-b-2"
    >
        <div class="text-3xl tracking-widest">Fuqs filter</div>

        <input
            placeholder="Name"
            id="name"
            type="text"
            bind:value={name}
            class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 focus:border-0"
        />

        <div class="w-full flex flex-row items-center justify-start space-x-3 text-lg select-none pl-1 group">
            <label class="inline flex-shrink-0 cursor-pointer" for="admin">Admin</label>
            <input bind:checked={admin} class="cursor-pointer group-hover:border-2" id="admin" type="checkbox" />
        </div>

        <button type="submit" class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 hover:border-0">Filter</button>
    </form>

    <table class="table-fixed transition-all duration-300 px-2 py-4 w-full">
        <thead>
            <tr>
                <th class="w-2/12">Title</th>
                <th class="w-4/12">Text (short)</th>
                <th class="w-2/12">Status</th>
                <th class="w-1/12">Likes</th>
                <th class="w-1/12">Influencers</th>
                <th class="w-2/12">Actions</th>
            </tr>
        </thead>

        <tbody>
            {#each mockData as { title, text, status, likes, influencers }}
                <tr
                    on:click={handleClick}
                    class={`hover:bg-gray-100 border-gray-100 border-t-2 border-b-2 cursor-pointer`}
                >
                    <td class="py-5 px-1"><span class="cursor-text">{title}</span></td>
                    <td class="py-5 px-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
                        <span class="cursor-text">{text}</span>
                    </td>
                    <td class="py-5 px-1 text-center">{status}</td>
                    <td class="py-5 px-1 text-center">{likes}</td>
                    <td class="py-5 px-1 text-center">{influencers}</td>
                    <td class="py-5 px-1 flex flex-row justify-around items-center space-x-1 group">
                        <button
                            class="border-2 group-hover:border-gray-500 hover:bg-gray-500 rounded-full w-7 h-7 bg-yellow-400 focus:border-transparent border-transparent active:bg-yellow-300"
                        />
                        <button
                            class="border-2 group-hover:border-gray-500 hover:bg-gray-500 rounded-full w-7 h-7 bg-indigo-400 focus:border-transparent border-transparent active:bg-indigo-300"
                        />
                        <button
                            class="border-2 group-hover:border-gray-500 hover:bg-gray-500 rounded-full w-7 h-7 bg-red-400 focus:border-transparent border-transparent active:bg-red-300"
                        />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</Layout>
