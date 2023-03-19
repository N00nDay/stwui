<script lang="ts">
	import { AvatarGroup } from '../../lib';
	import {
		sizesExample,
		indicatorExample,
		initialsExample,
		shapesExample,
		slots,
		placeholderSlots,
		indicatorProps,
		groupProps,
		groupSlots,
		groupAvatarProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	const avatars = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
</script>

<ExampleContainer title="Sizes">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-col gap-2">
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="xs">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="sm">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup>
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="lg">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="xl">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
		</div>
	</div>

	<CodeBlock language="svelte" code={sizesExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="Shapes">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-col gap-2">
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup shape="rounded" size="lg">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
				<AvatarGroup shape="square" size="lg">
					<AvatarGroup.Avatar src={avatars[0]} />
					<AvatarGroup.Avatar src={avatars[1]} />
					<AvatarGroup.Avatar src={avatars[2]} />
					<AvatarGroup.Avatar src={avatars[3]} />
				</AvatarGroup>
			</div>
		</div>
	</div>

	<CodeBlock language="svelte" code={shapesExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="With Indicator">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-col gap-2">
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="lg">
					<AvatarGroup.Avatar src={avatars[0]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[1]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[2]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[3]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
					</AvatarGroup.Avatar>
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="lg">
					<AvatarGroup.Avatar src={avatars[0]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[1]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[2]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[3]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
					</AvatarGroup.Avatar>
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
				<AvatarGroup size="lg">
					<AvatarGroup.Avatar src={avatars[0]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[1]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[2]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[3]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
					</AvatarGroup.Avatar>
				</AvatarGroup>
			</div>
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
				<AvatarGroup size="lg">
					<AvatarGroup.Avatar src={avatars[0]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[1]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[2]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
					</AvatarGroup.Avatar>
					<AvatarGroup.Avatar src={avatars[3]}>
						<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
					</AvatarGroup.Avatar>
				</AvatarGroup>
			</div>
		</div>
	</div>

	<CodeBlock language="svelte" code={indicatorExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="Initials">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<AvatarGroup size="lg">
				<AvatarGroup.Avatar initials="ND" />
				<AvatarGroup.Avatar initials="ND" />
				<AvatarGroup.Avatar initials="ND" />
				<AvatarGroup.Avatar initials="ND" />
			</AvatarGroup>
		</div>
	</div>

	<CodeBlock language="svelte" code={initialsExample} slot="code" />
</ExampleContainer>

<PropsTable component="AvatarGroup" props={groupProps} />

<SlotsTable component="AvatarGroup" slots={groupSlots} />

<PropsTable component="AvatarGroup.Avatar" props={groupAvatarProps} />

<SlotsTable component="AvatarGroup.Avatar" {slots} />

<SlotsTable component="AvatarGroup.Avatar.Placeholder" slots={placeholderSlots} />

<PropsTable component="AvatarGroup.Avatar.Indicator" props={indicatorProps} />
