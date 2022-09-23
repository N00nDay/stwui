<script lang="ts">
	import Carousel from '../carousel';
	import type { Slide } from '../../types/carousel-slide';

	import { Modal } from '../modal';
	import { Portal } from '../portal';
	import { validateSlots } from '../../utils/validateSlots';

	export let open = false;
	export let slides: Slide[] = [];
	export let activeSlide = 0;
	export let handleClose: () => void;
	export let rotation = 0;

	validateSlots($$slots, ['controls'], 'LightBox');
</script>

{#if open}
	<Portal>
		<Modal {handleClose} fullScreen>
			{#if $$slots.controls}
				<Carousel bind:activeSlide {slides} {rotation}>
					<slot slot="controls" name="controls" />
				</Carousel>
			{:else}
				<Carousel bind:activeSlide {slides} {rotation} />
			{/if}
		</Modal>
	</Portal>
{/if}
