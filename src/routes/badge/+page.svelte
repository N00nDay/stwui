<script lang="ts">
	import Indicator from '$lib/components/avatar/Indicator.svelte';
	import { Badge, Card, Col } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Badge</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge class="bg-green-800 text-green-200 bg-opacity-100 dark:bg-opacity-100">Badge</Badge>
			<Badge class="bg-blue-800 text-blue-200 bg-opacity-100 dark:bg-opacity-100">Badge</Badge>
			<Badge class="bg-red-800 text-red-200 bg-opacity-100 dark:bg-opacity-100">Badge</Badge>
			<Badge class="bg-amber-800 text-amber-200 bg-opacity-100 dark:bg-opacity-100">Badge</Badge>
			<br />
			<Badge type="info">Badge</Badge>
			<Badge type="success">Badge</Badge>
			<Badge type="warn">Badge</Badge>
			<Badge type="error">Badge</Badge>
			<br />
			<Badge type="info" size="large">Badge</Badge>
			<Badge type="success" size="large">Badge</Badge>
			<Badge type="warn" size="large">Badge</Badge>
			<Badge type="error" size="large">Badge</Badge>
			<br />
			<Badge type="info">
				<Badge.Indicator slot="indicator" />
				Badge</Badge
			>
			<Badge type="success"><Badge.Indicator slot="indicator" />Badge</Badge>
			<Badge type="warn"><Badge.Indicator slot="indicator" />Badge</Badge>
			<Badge type="error"><Badge.Indicator slot="indicator" />Badge</Badge>
			<br />
			<Badge type="info" shape="rounded">Badge</Badge>
			<Badge type="success" shape="rounded">Badge</Badge>
			<Badge type="warn" shape="rounded">Badge</Badge>
			<Badge type="error" shape="rounded">Badge</Badge>
			<br />
			<Badge type="info"
				>Badge<Badge.Close
					slot="close"
					on:click={() => console.log('clicked badge close')}
				/></Badge
			>
			<Badge type="success"
				>Badge<Badge.Close
					slot="close"
					on:click={() => console.log('clicked badge close')}
				/></Badge
			>
			<Badge type="warn"
				>Badge<Badge.Close
					slot="close"
					on:click={() => console.log('clicked badge close')}
				/></Badge
			>
			<Badge type="error"
				>Badge<Badge.Close
					slot="close"
					on:click={() => console.log('clicked badge close')}
				/></Badge
			>
		</Card.Content>
	</Card>
</Col>
