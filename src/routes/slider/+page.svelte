<script lang="ts">
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Col } from '../../lib/components/grid';
	import { Slider } from '../../lib/components/slider';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Basic</CardHeader>
		<CardContent class="p-4">
			<Slider value={20} class="w-full" />

			<Slider value={40} type="warn" class="w-full" />

			<Slider value={60} type="error" class="w-full" />

			<Slider value={80} type="success" class="w-full" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Basic</CardHeader>
		<CardContent class="p-4">
			<Slider value={20} class="w-full mb-4" step={25} showStep />

			<Slider value={40} type="warn" class="w-full" step={10} />

			<Slider value={60} type="error" class="w-full" />

			<Slider value={80} type="success" class="w-full" />
		</CardContent>
	</Card>
</Col>
