<script>
	import { Button } from "$lib/components/ui/button";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import Post from "$lib/components/post.svelte";
	import { ArrowUpIcon, ArrowDownIcon } from "svelte-feather-icons";
	import { Map, Marker } from "@beyonk/svelte-mapbox";
    import { mode } from "mode-watcher";
	import { onMount } from "svelte";
	import { fetchPosts } from "$lib/supabaseClient";

	let posts = [];
	onMount(
		async () => {
			posts = await fetchPosts();
			console.log(posts);
		}
	);
</script>

<ScrollArea class="h-full w-max p-5">
	{#each posts as post}
		<div class="pt-3">
			<Post title={post.title} description={post.description} expiration={post.expiration} />
		</div>
	{/each}
</ScrollArea>


