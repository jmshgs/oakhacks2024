<script>
    import "../app.css";

    import { Icon } from '@steeze-ui/svelte-icon'
	import { Bars3 } from '@steeze-ui/heroicons'
    import { onMount } from 'svelte';
    import Sidebar from '$lib/components/sidebar.svelte'

    import { ModeWatcher } from 'mode-watcher';
    
    import { writable } from "svelte/store";
</script>


<ModeWatcher />

<div class="flex flex-row">
    <Sidebar />

    <slot />
</div>
