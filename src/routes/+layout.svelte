<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<div class="header_left">
		<div class="header_element logo">
			<a href="/">[VQ3]</a>
		</div>
		<div class="header_element home">
			<a href="/members">Members</a>
		</div>
		<div class="header_element home">
			<a href="/ranks">Ranks</a>
		</div>
	</div>
</header>

{@render children()}
