<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Autocomplete } from '../../lib/components/autocomplete';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Autocomplete</CardHeader>
		<CardContent class="p-4">
			<Autocomplete
				name="select-1"
				placeholder="Basic"
				options={['Option 1', 'Option 2', 'Option 3']}
			/>
			<br />
			<Autocomplete
				name="select-2"
				label="Label"
				leading="email"
				trailing="phone"
				options={['Option 1', 'Option 2', 'Option 3']}
			/>
			<br />
			<Autocomplete
				name="select-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
				options={['Option 1', 'Option 2', 'Option 3']}
			/>
		</CardContent>
	</Card>
</Col>
