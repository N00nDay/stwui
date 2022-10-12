<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import Icon from '../icon';

	export let icon: MaterialIcon;
</script>

<Icon {icon} class={$$props.class} style={$$props.style} />
