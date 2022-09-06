<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { CheckboxGroup } from '../../lib/components/checkbox';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Checkbox</CardHeader>
		<CardContent class="p-4">
			<CheckboxGroup
				options={[
					{ label: 'Checkbox-1', name: 'cb-1', value: 'cb-1' },
					{ label: 'Checkbox-2', name: 'cb-2', value: 'cb-2' },
					{ label: 'Checkbox-3', name: 'cb-3', value: 'cb-3' },
					{ label: 'Checkbox-4', name: 'cb-4', value: 'cb-4' }
				]}
			/>
			<br />
			<CheckboxGroup
				label="Checkbox Group"
				options={[
					{ label: 'Checkbox-1', name: 'cb-5', value: 'cb-1', description: 'desc-1' },
					{ label: 'Checkbox-2', name: 'cb-6', value: 'cb-2', description: 'desc-2' },
					{ label: 'Checkbox-3', name: 'cb-7', value: 'cb-3', description: 'desc-3' },
					{ label: 'Checkbox-4', name: 'cb-8', value: 'cb-4', description: 'desc-4' }
				]}
			/>
			<br />
			<CheckboxGroup
				label="Checkbox Group"
				inline
				options={[
					{ label: 'Checkbox-1', name: 'cb-9', value: 'cb-1', description: 'desc-1' },
					{ label: 'Checkbox-2', name: 'cb-10', value: 'cb-2', description: 'desc-2' },
					{ label: 'Checkbox-3', name: 'cb-11', value: 'cb-3', description: 'desc-3' },
					{ label: 'Checkbox-4', name: 'cb-12', value: 'cb-4', description: 'desc-4' }
				]}
			/>
		</CardContent>
	</Card>
</Col>
