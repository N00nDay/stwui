<script lang="ts">
	import { Card, Col } from '../../lib';
	import { tooltip } from '../../lib/actions';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Toggle</Card.Header>
		<Card.Content slot="content" class="p-4 ">
			<button
				use:tooltip={{
					placement: 'right',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Right tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'left',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Left tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'top',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Top tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'bottom',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Bottom tooltip
			</button>
		</Card.Content>
	</Card>
</Col>
