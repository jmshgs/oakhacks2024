<script>
	import { Button } from "$lib/components/ui/button";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import * as Card from "$lib/components/ui/card";
	import { ArrowUpIcon, ArrowDownIcon } from "svelte-feather-icons";
	import { Map, Marker } from "@beyonk/svelte-mapbox";
    import { mode } from "mode-watcher";
	import {
    DateFormatter,
    getLocalTimeZone
  } from "@internationalized/date";




  const df = new DateFormatter("en-US", {
    dateStyle: "long"
  });

  
    let darkMode = false;

    mode.subscribe((value) => {
        if (value == "light") {
            darkMode = false;
        } else {
            darkMode = true;
        }
    })

	export let title;
	export let description;
	export let expiration;

	let upvoted = false;
	let downvoted = false;

	const toggleUpvote = async () => {
        upvoted = !upvoted;
        downvoted = false;
    };
	const toggleDownvote = async () => {
		downvoted = !downvoted;
        upvoted = false;
	};
</script>

<Card.Root class="w-[700px] rounded-2xl h-min">
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<p class="text-sm pl-1">Expires {df.format(new Date(expiration))}</p>
	</Card.Header>
	<Card.Content>
		<p>{description}</p>
		<div class="h-96">
			<Map
				accessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
				style={darkMode
					? "mapbox://styles/mapbox/navigation-night-v1"
					: "mapbox://styles/mapbox/navigation-day-v1"}
				center={[-121.89496, 37.33939]}
				zoom={12}>
			</Map>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-start">
<div class="bg-[#0000000B] dark:bg-[#FFFFFF0B] rounded-[50px]">
	<Button variant="ghost" on:click={toggleUpvote} class="hover:bg-transparent p-2">
		<ArrowUpIcon strokeWidth={3} class="{upvoted ? "stroke-[#FF6000]" : ""}"/>
	</Button>
	<Button variant="ghost" on:click={toggleDownvote} class="hover:bg-transparent p-2">
		<ArrowDownIcon strokeWidth={3} class="{downvoted ? "stroke-[#9494ff]" : ""}"/>
	</Button>
</div>
</Card.Footer>
</Card.Root>