<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { DatePicker } from '../../lib/components/datepicker';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>DatePicker</CardHeader>
		<CardContent class="p-4">
			<DatePicker name="date-1" />
			<br />
			<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min} />
			<br />
			<DatePicker name="date-3" label="Date" min={date2Min} error="Your doing it wrong" />
		</CardContent>
	</Card>
</Col>
