import type { Slot, Prop, IClass } from '../../docs';

export const rowSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const rowProps: Prop[] = [
	{
		id: '1',
		prop: 'gutter',
		type: '<a href="/types#TwSizes" class="link">TwSizes</a> | [<a href="/types#TwSizes" class="link">TwSizes</a>, <a href="/types#TwSizes" class="link">TwSizes</a>]',
		default: '0'
	},
	{
		id: '2',
		prop: 'justify',
		type: "'start' | 'center' | 'end' | 'between' | 'around' | undefined",
		default: 'start'
	},
	{
		id: '3',
		prop: 'align',
		type: "'start' | 'center' | 'end'",
		default: 'start'
	}
];

export const colSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-row'
	},
	{
		id: '2',
		class: 'stwui-col'
	}
];

export const example1 = `
<script lang="ts">
	import { Row, Col } from 'stwui';
</script>

<Row>
	<Col class="col-24">
		col-24
	</Col>
</Row>
<Row>
	<Col class="col-12">
		col-12
	</Col>
	<Col class="col-12">
		col-12
	</Col>
</Row>

<Row>
	<Col class="col-8">
		col-8
	</Col>
	<Col class="col-8">
		col-8
	</Col>
	<Col class="col-8">
		col-8
	</Col>
</Row>

<Row>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
</Row>

<Row>
	<Col class="w-[20%]">
		<div class={lightBlockWithSpacing}>w-[20%]</div>
	</Col>
	<Col class="w-[20%]">
		<div class={darkBlockWithSpacing}>w-[20%]</div>
	</Col>
	<Col class="w-[20%]">
		<div class={lightBlockWithSpacing}>w-[20%]</div>
	</Col>
	<Col class="w-[20%]">
		<div class={darkBlockWithSpacing}>w-[20%]</div>
	</Col>
	<Col class="w-[20%]">
		<div class={lightBlockWithSpacing}>w-[20%]</div>
	</Col>
</Row>`;

export const example2 = `
<script lang="ts">
	import { Row, Col } from 'stwui';
</script>

<Divider position="left">
	<Divider.Label slot="label">Horizontal</Divider.Label>
</Divider>

<Row gutter={['0', '4']}>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>

	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Vertical</Divider.Label>
</Divider>

<Row gutter={['4', '0']}>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>

	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Horizontal & Vertical</Divider.Label>
</Divider>

<Row gutter="4">
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>

	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
	<Col class="col-6">
		col-6
	</Col>
</Row>`;

export const example3 = `
<script lang="ts">
	import { Row, Col } from 'stwui';
</script>

<Divider position="left">
	<Divider.Label slot="label">Start</Divider.Label>
</Divider>

<Row justify="start">
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Center</Divider.Label>
</Divider>

<Row justify="center">
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">End</Divider.Label>
</Divider>

<Row justify="end">
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Between</Divider.Label>
</Divider>

<Row justify="between" class="bg-background p-2">
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Around</Divider.Label>
</Divider>

<Row justify="around">
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>`;

export const example4 = `
<script lang="ts">
	import { Row, Col } from 'stwui';
</script>

<Divider position="left">
	<Divider.Label slot="label">Start</Divider.Label>
</Divider>

<Row align="start" justify="center">
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">Center</Divider.Label>
</Divider>

<Row align="center" justify="between">
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>

<Divider position="left">
	<Divider.Label slot="label">End</Divider.Label>
</Divider>

<Row align="end" justify="center">
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
	<Col class="col-4" style="height: 5rem;">
		col-4
	</Col>
	<Col class="col-4">
		col-4
	</Col>
</Row>`;
