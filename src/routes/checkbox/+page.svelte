<script lang="ts">
	import { Card, CheckboxGroup, Col } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Checkbox</Card.Header>
		<Card.Content slot="content" class="p-4">
			<CheckboxGroup>
				<CheckboxGroup.Checkbox name="cb-1" value="cb-1">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-1</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-2" value="cb-2">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-2</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-3" value="cb-3">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-3</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-4" value="cb-4">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-4</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
			</CheckboxGroup>
			<br />
			<CheckboxGroup>
				<CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
				<CheckboxGroup.Checkbox name="cb-5" value="cb-5">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-5</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-6" value="cb-6">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-6</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-7" value="cb-7">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-7</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-8" value="cb-8">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-8</CheckboxGroup.Checkbox.Label>
				</CheckboxGroup.Checkbox>
			</CheckboxGroup>
			<br />
			<CheckboxGroup>
				<CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
				<CheckboxGroup.Checkbox name="cb-9" value="cb-9">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-9</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-9</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-10" value="cb-10">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-10</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-10</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-11" value="cb-11">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-11</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-11</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-12" value="cb-12">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-12</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-12</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
			</CheckboxGroup>
			<br />
			<CheckboxGroup inline>
				<CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
				<CheckboxGroup.Checkbox name="cb-13" value="cb-13">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-13</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-13</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-14" value="cb-14">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-14</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-14</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-15" value="cb-15">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-15</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-15</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
				<CheckboxGroup.Checkbox name="cb-16" value="cb-16">
					<CheckboxGroup.Checkbox.Label slot="label">Checkbox-16</CheckboxGroup.Checkbox.Label>
					<CheckboxGroup.Checkbox.Description slot="description"
						>desc-16</CheckboxGroup.Checkbox.Description
					>
				</CheckboxGroup.Checkbox>
			</CheckboxGroup>
		</Card.Content>
	</Card>
</Col>
