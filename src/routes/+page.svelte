<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script>
    import { onMount } from 'svelte';
    import Canvas from '$lib/canvas.svelte';
</script>

<p class="flex flex-col font-bold align-middle text-center mx-auto my-[50vh]"> hello world</p>
<Canvas class="border border-red-500 border-2px" width={100} height={100} />
```