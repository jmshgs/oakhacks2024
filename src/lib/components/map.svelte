<script>
	import { Map, Marker } from "@beyonk/svelte-mapbox";
	import { mode } from "mode-watcher";
	import { controls } from "@beyonk/svelte-mapbox";
	import { onMount } from "svelte";
	import { Button } from "$lib/components/ui/button";

    import { browser } from '$app/environment';

	const { GeolocateControl, NavigationControl, ScaleControl } = controls;

	let mapComponent;

    let darkMode = false;

    mode.subscribe((value) => {
        if (value == "light") {
            darkMode = false;
        } else {
            darkMode = true;
        }
    })

	let marker = null;
	export let latitude;
	export let longitude;

	let userLatitude = 0;
	let userLongitude = 0;
	
	onMount(() => {
        // console.log(mode)
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				mapComponent.flyTo({
					center: [
						position.coords.longitude,
						position.coords.latitude,
					],
				});

				userLongitude = position.coords.longitude;
				userLatitude = position.coords.latitude;
			});
		}

		mapComponent.$on("click", (e) => {
			if (typeof e.detail === "number") return;

			console.log(e.detail);
			longitude = e.detail.lng;
			latitude = e.detail.lat;
		});

		mapComponent.$on("touch", (e) => {
			if (typeof e.detail === "number") return;

			console.log(e.detail);
			longitude = e.detail.lng;
			latitude = e.detail.lat;
		});

		mapComponent.$on("tap", (e) => {
			if (typeof e.detail === "number") return;

			console.log(e.detail);
			longitude = e.detail.lng;
			latitude = e.detail.lat;
		});
	});
</script>
<!-- navigation-day-v1, navigation-day-v1-->

<Map
	accessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
	style={darkMode ? "mapbox://styles/mapbox/navigation-night-v1" : "mapbox://styles/mapbox/navigation-day-v1"}
	bind:this={mapComponent}
	center={[userLatitude, userLongitude]}
	zoom={12}>
	{#if latitude != 0 && longitude != 0}
		<Marker lat={latitude} lng={longitude} popup={false} />
	{/if}
	<Marker lat={userLatitude} lng={userLongitude} popup={false} color="blue"/>
</Map>

