<script lang="ts">
	import { Alert } from '../../../lib';

	export let version: string;
</script>

<Alert type="success">
	<Alert.Title slot="title">Updated Component</Alert.Title>
	<Alert.Description slot="description"
		>As of version <strong>{version}</strong> this component has breaking changes plesae refer to
		the examples, props, and slots tables below. Head over to
		<a
			href="https://github.com/N00nDay/stwui/releases"
			target="_blank"
			rel="noreferrer"
			class="link">Github</a
		> to see the full details of this update.</Alert.Description
	>
</Alert>
