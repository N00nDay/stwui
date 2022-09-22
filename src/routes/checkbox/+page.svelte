<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, Checkbox } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Checkbox</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Checkbox.Group>
				<Checkbox label="Checkbox-1" name="cb-1" value="cb-1" />
				<Checkbox label="Checkbox-2" name="cb-2" value="cb-2" />
				<Checkbox label="Checkbox-3" name="cb-3" value="cb-3" />
				<Checkbox label="Checkbox-4" name="cb-4" value="cb-4" />
			</Checkbox.Group>
			<br />
			<Checkbox.Group label="Checkbox Group">
				<Checkbox label="Checkbox-5" name="cb-5" value="cb-5" />
				<Checkbox label="Checkbox-6" name="cb-6" value="cb-6" />
				<Checkbox label="Checkbox-7" name="cb-7" value="cb-7" />
				<Checkbox label="Checkbox-8" name="cb-8" value="cb-8" />
			</Checkbox.Group>
			<br />
			<Checkbox.Group label="Checkbox Group">
				<Checkbox label="Checkbox-9" name="cb-9" value="cb-9" description="desc-9" />
				<Checkbox label="Checkbox-10" name="cb-10" value="cb-10" description="desc-10" />
				<Checkbox label="Checkbox-11" name="cb-11" value="cb-11" description="desc-11" />
				<Checkbox label="Checkbox-12" name="cb-12" value="cb-12" description="desc-12" />
			</Checkbox.Group>
			<br />
			<Checkbox.Group label="Checkbox Group" inline>
				<Checkbox label="Checkbox-13" name="cb-13" value="cb-13" description="desc-13" />
				<Checkbox label="Checkbox-14" name="cb-14" value="cb-14" description="desc-14" />
				<Checkbox label="Checkbox-15" name="cb-15" value="cb-15" description="desc-15" />
				<Checkbox label="Checkbox-16" name="cb-16" value="cb-16" description="desc-16" />
			</Checkbox.Group>
			<br />
			<Checkbox label="Checkbox-17" name="cb-17" value="cb-17" description="desc-17" />
		</Card.Content>
	</Card>
</Col>
