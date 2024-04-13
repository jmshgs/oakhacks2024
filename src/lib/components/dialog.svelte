<script>
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
    import { PlusCircleIcon } from "svelte-feather-icons";
    import { Map } from "$lib/components/map.svelte";

    let title = "";
    let description = "";
    let expiration = "";
    // let latitude = userLatitude
    // let longitude = userLongitude
</script>

<Dialog.Root>
    <Dialog.Trigger>
        <Button
            class="justify-start w-full items-start my-3"
            on:click={() => {
                console.log("new post");
            }}>
            <div
                class="gap-x-3 w-full flex flex-row items-center justify-center text-lg">
                <PlusCircleIcon size="24" />
                New Post
            </div>
        </Button>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            <Dialog.Title>Add Post</Dialog.Title>
            <Dialog.Description>
                Offer a food item that you no longer need to the local community!
            </Dialog.Description>
        </Dialog.Header>
        <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="title" class="text-right">Food Item</Label>
                <Input
                    id="title"
                    placeholder="Lettuce"
                    bind:value={title}
                    class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="description" class="text-right"
                    >Description</Label>
                <Input
                    id="description"
                    bind:value={description}
                    placeholder="Healthy leafy greens from my garden"
                    class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="description" class="text-right">Expiration</Label>
                <Input
                    id="expiration"
                    bind:value={expiration}
                    placeholder="MM/DD/YYYY"
                    class="col-span-3" />
                </div>
        </div>
        <Dialog.Footer>
            <Button type="submit">Save changes</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>