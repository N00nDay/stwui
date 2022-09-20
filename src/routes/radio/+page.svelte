<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import { RadioGroup } from '../../lib/components/radio';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Radio</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup
				radioGroup="group-1"
				options={[
					{ label: 'Radio-1', name: 'radio-1', value: 'radio-1' },
					{ label: 'Radio-2', name: 'radio-2', value: 'radio-2' },
					{ label: 'Radio-3', name: 'radio-3', value: 'radio-3' },
					{ label: 'Radio-4', name: 'radio-4', value: 'radio-4' }
				]}
			/>
			<br />
			<RadioGroup
				type="pill"
				radioGroup="group-2"
				options={[
					{ label: 'Radio-1', name: 'radio-5', value: 'radio-1' },
					{ label: 'Radio-2', name: 'radio-6', value: 'radio-2' },
					{ label: 'Radio-3', name: 'radio-7', value: 'radio-3' },
					{ label: 'Radio-4', name: 'radio-8', value: 'radio-4' }
				]}
			/>
			<br />
			<RadioGroup
				type="pill"
				label="Radio-Group 3"
				radioGroup="group-3"
				columns="grid-cols-2"
				options={[
					{ label: 'Radio-1', name: 'radio-9', value: 'radio-1' },
					{ label: 'Radio-2', name: 'radio-10', value: 'radio-2' },
					{ label: 'Radio-3', name: 'radio-11', value: 'radio-3' },
					{ label: 'Radio-4', name: 'radio-12', value: 'radio-4' }
				]}
			/>
		</Card.Content>
	</Card>
</Col>
