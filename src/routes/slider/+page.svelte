<script lang="ts">
	import { Card, Col } from '../../lib';
	import { Slider } from '../../lib/components/slider';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Slider value={20} class="w-full" />

			<Slider value={40} type="warn" class="w-full" />

			<Slider value={60} type="error" class="w-full" />

			<Slider value={80} type="success" class="w-full" />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Slider value={20} class="w-full mb-4" step={25} showStep />

			<Slider value={40} type="warn" class="w-full" step={10} />

			<Slider value={60} type="error" class="w-full" />

			<Slider value={80} type="success" class="w-full" />
		</Card.Content>
	</Card>
</Col>
