<script lang="ts">
	// https://tailwindcss.com/docs/customizing-colors

	const colors: string[] = [
		'slate',
		'gray',
		'zinc',
		'neutral',
		'stone',
		'red',
		'orange',
		'amber',
		'yellow',
		'lime',
		'green',
		'emerald',
		'teal',
		'cyan',
		'sky',
		'blue',
		'indigo',
		'violet',
		'purple',
		'fuchsia',
		'pink',
		'rose'
	];

	const numbers: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

	function setColor(color: string, number: number) {
		const clssName = `bg-${color}-${number}`;
		document.body.className = clssName;
	}
</script>

<div class="flex flex-wrap justify-center my-2">
	{#each colors as color}
		{#each numbers as number}
			<button
				on:click={() => setColor(color, number)}
				on:dblclick={() => navigator.clipboard.writeText(`bg-${color}-${number}`)}
				class="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20
				 rounded-full bg-{color}-{number} flex items-center justify-center"
				tabindex="0"
			>
				<span class="text-xs tracking-tight {number <= 300 ? 'text-black' : 'text-white'}"
					><i class="hidden lg:inline-block">{color}-</i><i>{number}</i>
				</span>
			</button>
		{/each}
	{/each}
</div>

<style>
	:global(body) {
		transition: background-color 0.2s ease-in-out;
	}
</style>
