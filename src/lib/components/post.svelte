<Card.Root class="w-[700px] rounded-2xl h-min">
	<Card.Header>
		<Card.Title>Example Title</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>uwuwuwuwu</p>

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
		<Button variant="ghost" onClick={toggleUpvote()} class="hover:bg-transparent">
            {#if upvoted}
			<ArrowUpIcon strokeWidth={10} class="hover:stroke-[#9FA4A8]"/>
            {:else}
            <ArrowUpIcon strokeWidth={3} class="hover:stroke-[#9FA4A8]"/>
            {/if}
		</Button>
		<Button variant="ghost" onClick={toggleDownvote()} class="hover:bg-transparent">
			<ArrowDownIcon strokeWidth={3} class="hover:stroke-[#9FA4A8]"/>
		</Button>
	</Card.Footer>
</Card.Root>
