<script lang="ts">
	import { Card, Col, Toggle } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Toggle</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Toggle name="toggle-1" />
			<br />
			<Toggle name="toggle-2">
				<Toggle.ContentLeft slot="content-left">
					<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
				</Toggle.ContentLeft>
			</Toggle>
			<br />
			<Toggle name="toggle-3">
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
				</Toggle.ContentRight>
			</Toggle>
			<br />
			<Toggle name="toggle-4">
				<Toggle.ContentLeft slot="content-left">
					<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
				</Toggle.ContentLeft>
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
				</Toggle.ContentRight>
			</Toggle>
			<br />
			<Toggle name="toggle-5">
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
					<Toggle.ContentRight.Description slot="description"
						>(10% off)</Toggle.ContentRight.Description
					>
				</Toggle.ContentRight>
			</Toggle>
		</Card.Content>
	</Card>
</Col>
