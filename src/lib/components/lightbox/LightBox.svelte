<script lang="ts">
	import { Carousel } from '../carousel';
	import type { Slide } from '../carousel';
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
			<Carousel bind:activeSlide {slides} {rotation}>
				{#if $$slots.controls}
					<slot name="controls" />
				{/if}
			</Carousel>
		</Modal>
	</Portal>
{/if}
