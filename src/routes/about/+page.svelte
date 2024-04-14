<script>

    import * as Accordion from "$lib/components/ui/accordion";
    import img from "$lib/static/image-removebg-preview.png";
    
</script>

<div class="flex flex-col px-20 py-10">
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12 items-start">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Fighting food waste one traveler at a time. <br>
                    One leap closer to zero environmental footprint through FoodFind.
                </p>
                <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Try it out
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img class="rounded-lg" src="https://i.ibb.co/ZK3HJQf/image-removebg-preview-1.png" alt="" width={1366} height={768} />
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-4">
            <div class="font-light text-gray-500 sm:text-base dark:text-gray-400">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission Statement</h2>
                <p class="mb-4">There is no doubt that food waste is one of the most prominant issues in the world today, and statistically, tourism contributes significantly to the 40% of global food production that's wasted every single year. </p>
                <p class="mb-4">FoodFind is the solution. By connecting supply to the demand, we can eliminate tourists' food waste through a convenient, quick and easy to use app. It's as easy as 1-2-3 with us. Simply enter your name and location, share your food, and have it picked up!</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-0">
                <img class="-mt-4 w-full rounded-lg" src="https://i.ibb.co/QcKxDhg/marmaris-travel-kinnaur-district-hotel-clip-art-tourist-thumbnail-removebg-preview.png" alt="office content 1" width={1366} height={768} />
                <img class="mt-4 w-full lg:mt-10) rounded-lg" src="https://i.ibb.co/X41kffg/image-removebg-preview.png" alt="?" width={1366} height={768} />
            </div>
        </div>
    </section>
</div>
