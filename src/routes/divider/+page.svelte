<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Button } from '../../lib/components/button';
	import { Divider } from '../../lib/components/divider';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Divider</CardHeader>
		<CardContent class="p-4">
			<Divider label="Divider" />
			<Divider icon="add" />
			<Divider label="Divider" position="left" />
			<Divider label="Divider" position="right" />
			<Divider label="Divider" labelStyle="title" />

			<Divider>
				<Button type="primary">I am a Button</Button>
			</Divider>
		</CardContent>
	</Card>
</Col>
