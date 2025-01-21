<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Users:</h1>
<ul>
	{#each data.users as user}
		<li>{user.id}: {user.nickname} - {user.join_date}</li>
	{/each}
</ul>
