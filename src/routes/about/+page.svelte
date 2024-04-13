<script>

import * as Accordion from "$lib/components/ui/accordion";

</script>

<div class="flex flex-col px-20 py-10">
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12 items-start">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">WorldChat is the online center for language and cultural exchange. Using AI translation technology from DeepL, we can accurately translate messages from various languages as they are sent, breaking the language barrier of instant communication.</p>
                <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Try it out
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img class="rounded-lg" src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1329183101/image_1329183101.jpg?io=getty-c-w750" alt="" width={1366} height={768} />
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-4">
            <div class="font-light text-gray-500 sm:text-base dark:text-gray-400">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission Statement</h2>
                <p class="mb-4">There is no doubt that language differences are the foremost barrier in human communication across large geographical regions spanning different cultures. This, in a large part, is responsible for the isolation of culture and communication between different societies.</p>
                <p class="mb-4">WorldChat is the solution. Accurate translation certainly exists in the world today, but WorldChat allows users to communication within an instant messaging environment, with all messages automatically translated behind-the-scenes. Users won't have to worry about manual translations, and it just works like magic.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-0">
                <img class="-mt-4 w-full rounded-lg" src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/languages-signpost.jpg?itok=krMV75kb" alt="office content 1" width={1366} height={768} />
                <img class="mt-4 w-full lg:mt-10) rounded-lg" src="https://nam.edu/wp-content/uploads/2020/02/Picture2.png" alt="office content 2" width={1366} height={768} />
            </div>
        </div>
    </section>
</div>
