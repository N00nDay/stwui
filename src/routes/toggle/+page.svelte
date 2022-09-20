<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import { Toggle } from '../../lib/components/toggle';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Toggle</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Toggle name="toggle-1" />
			<br />
			<Toggle name="toggle-2" labelLeft="Left Label" />
			<br />
			<Toggle name="toggle-3" labelRight="Right Label" />
			<br />
			<Toggle name="toggle-4" labelLeft="Left Label" labelRight="Right Label" />
			<br />
			<Toggle name="toggle-5" labelRight="Right Label" descriptionRight="(10% off)" />
		</Card.Content>
	</Card>
</Col>
