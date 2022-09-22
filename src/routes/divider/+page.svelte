<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Button, Card, Divider } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Divider</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Divider>
				<Divider.Label>Divider</Divider.Label>
			</Divider>
			<Divider>
				<Divider.Icon icon="add" />
			</Divider>
			<Divider position="left">
				<Divider.Label>Divider</Divider.Label>
			</Divider>
			<Divider position="right">
				<Divider.Label>Divider</Divider.Label>
			</Divider>

			<Divider>
				<Button type="primary">I am a Button</Button>
			</Divider>
		</Card.Content>
	</Card>
</Col>
