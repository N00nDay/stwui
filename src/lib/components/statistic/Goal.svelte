<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Progress from '../progress';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let progress: number;

	const defaultClass = 'mt-2 stwui-statistic-goal';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<Progress value={progress} />
</dd>
