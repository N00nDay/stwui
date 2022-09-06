<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Toggle } from '../../lib/components/toggle';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Toggle</CardHeader>
		<CardContent class="p-4">
			<Toggle name="toggle-1" />
			<br />
			<Toggle name="toggle-2" labelLeft="Left Label" />
			<br />
			<Toggle name="toggle-3" labelRight="Right Label" />
			<br />
			<Toggle name="toggle-4" labelLeft="Left Label" labelRight="Right Label" />
			<br />
			<Toggle name="toggle-5" labelRight="Right Label" descriptionRight="(10% off)" />
		</CardContent>
	</Card>
</Col>
