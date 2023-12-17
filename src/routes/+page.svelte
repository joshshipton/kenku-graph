<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
    import { onMount } from 'svelte';
    import { addTechnique, drawTechniques } from '$lib/addtekkers.js';
  
    let canvas;
    let ctx;
    let techniqueName = ''; // Changed variable name to avoid conflict
  
    onMount(() => {
      ctx = canvas.getContext('2d');
    //   initCanvas(canvas);
      drawTechniques(canvas, ctx); // Initial draw
    });
  
    // This function is now reactive
    $: if (canvas && ctx) {
      drawTechniques(canvas, ctx);
    }
  
    // Renamed function to avoid conflict
    function handleAddTechnique() {
      if (techniqueName.trim() !== '') {
        addTechnique(techniqueName);
        drawTechniques(canvas, ctx);
        techniqueName = ''; // Clear the name after adding
      }
    }
  </script>




<div class="flex flex-col items-center justify-center h-screen w-full">
  <div>
    <canvas id="myCanvas" width="500" height="500" class="border" bind:this={canvas}></canvas>
  </div>
  <input type="text" label="name of tek" bind:value={techniqueName}>
  <button class="bg-black text-white" on:click={handleAddTechnique}>Add Technique</button>

</div>
