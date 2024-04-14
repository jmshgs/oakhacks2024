<script>
	import { Button } from "$lib/components/ui/button";
</script>

<section class="font-apple font-medium flex w-full items-center overflow-hidden">
	<div class="px-4 mx-auto max-w-screen-xl text-center lg:py-56 items-center justify-center ">
		<div class="display-inline mb-4 text-4xl fontextrabold tracking leading-none
        dark:text-white md:text-5xl lg:text-6xl p-1 overflow-hidden">
			FoodFind
		</div>
		<p class="mb-8 text-lg font-normal text-gray-700 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">
			No more worrying about expired food. <br> Reduce waste and support your community by posting unwanted/surplus food items.
		</p>

		<div
			class="flex flex-col space-x-5 sm:flex-row sm:justify-center sm:space-y-0">
			<Button href="posts" class="h-12" variant="outline">
				Get started
				<svg
					class=" w-3.5 h-3.5 ms-2 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9" />
				</svg>
			</Button>
			<Button href="#" class="h-12" variant="outline">About Us</Button>
		</div>
	</div>
</section>
