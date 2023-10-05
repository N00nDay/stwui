import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'bordered',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'header',
		component: '<Post.Header slot="header" />'
	},
	{
		id: '2',
		slot: 'content',
		component: '<Post.Content slot="content" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	},
	{
		id: '4',
		slot: 'images',
		component: '<Post.Images slot="images" />'
	},
	{
		id: '5',
		slot: 'status',
		component: '<Post.Status slot="status" />'
	},
	{
		id: '6',
		slot: 'actions',
		component: '<Post.Actions slot="actions" />'
	}
];

export const headerSlots: Slot[] = [
	{
		id: '1',
		slot: 'avatar',
		component: '<Post.Header.Avatar slot="avatar" />'
	},
	{
		id: '2',
		slot: 'creator',
		component: '<Post.Header.Creator slot="creator" />'
	},
	{
		id: '3',
		slot: 'created',
		component: '<Post.Header.Created slot="created" />'
	},
	{
		id: '4',
		slot: 'extras',
		component: '<Post.Header.Extras slot="extras" />'
	}
];

export const avatarProps: Prop[] = [
	{
		id: '1',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'string',
		default: 'avatar'
	},
	{
		id: '3',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
	}
];

export const creatorSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const createdSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const imagesProps: Prop[] = [
	{
		id: '1',
		prop: 'images',
		type: '<a href="/types#CarouselSlide">CarouselSlide[]</a>',
		default: '[]'
	},
	{
		id: '2',
		prop: 'handleClick',
		type: '((index: number) => void) | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'includeLightBox',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '4',
		prop: 'activeSlide',
		type: 'number',
		default: '0'
	},
	{
		id: '5',
		prop: 'showClose',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '6',
		prop: 'lightboxActions',
		type: '<a href="/types#LightboxAction">LightboxAction[]</a>',
		default: '[]'
	}
];

export const statusProps: Prop[] = [
	{
		id: '1',
		prop: 'likes',
		type: 'string[]',
		default: '[]'
	},
	{
		id: '2',
		prop: 'comments',
		type: 'string[]',
		default: '[]'
	}
];

export const actionsSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const actionSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Card.Actions.Action.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'label',
		component: '<Card.Actions.Action.Label slot="label" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-post'
	},
	{
		id: '2',
		class: 'stwui-post-header'
	},
	{
		id: '3',
		class: 'stwui-post-header-avatar-wrapper'
	},
	{
		id: '4',
		class: 'stwui-post-header-avatar'
	},
	{
		id: '5',
		class: 'stwui-post-avatar-placeholder'
	},
	{
		id: '6',
		class: 'stwui-post-header-creator-wrapper'
	},
	{
		id: '7',
		class: 'stwui-post-header-creator-wrapper-created'
	},
	{
		id: '8',
		class: 'stwui-post-header-created-wrapper-created'
	},
	{
		id: '9',
		class: 'stwui-post-header-extras'
	},
	{
		id: '10',
		class: 'stwui-post-content'
	},
	{
		id: '11',
		class: 'stwui-post-images'
	},
	{
		id: '12',
		class: 'stwui-post-status'
	},
	{
		id: '13',
		class: 'stwui-post-actions'
	},
	{
		id: '14',
		class: 'stwui-post-action'
	},
	{
		id: '15',
		class: 'stwui-post-action-icon'
	},
	{
		id: '16',
		class: 'stwui-post-action-label'
	}
];

export const usage = `
import { Post } from 'stwui';
// OR
import Post from 'stwui/post'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { Post } from 'stwui';

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
</script>

<Post>
	<Post.Header slot="header">
		<Post.Header.Avatar slot="avatar" src={creator.avatar} />
		<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
		<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
	</Post.Header>

	<Post.Content slot="content">
		{@html content}
	</Post.Content>
</Post>
`;

export const example1 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
</script>

<Post>
	<Post.Header slot="header">
		<Post.Header.Avatar slot="avatar" src={creator.avatar} />
		<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
		<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
	</Post.Header>

	<Post.Content slot="content">
		{@html content}
	</Post.Content>

	<Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;

export const example2 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";

   let likes = ['1', '2'];
   let comments = [];
</script>

<Post>
	<Post.Header slot="header">
		<Post.Header.Avatar slot="avatar" src={creator.avatar} />
		<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
		<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
	</Post.Header>

	<Post.Content slot="content">
		{@html content}
	</Post.Content>

	<Post.Status slot="status" {likes} comments={[]} />

	<Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;

export const example3 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
   let images: CarouselSlide[] = [
		{
			id: '1',
			src: 'image.png'
		},
      {
			id: '2',
			src: 'image.png'
		},
      {
			id: '3',
			src: 'image.png'
		},
	];
   let likes = ['1', '2'];
   let comments = ['1', '2'];
</script>

<Post>
   <Post.Header slot="header">
      <Post.Header.Avatar slot="avatar" src={avatar} />
      <Post.Header.Creator slot="creator">{creator}</Post.Header.Creator>
      <Post.Header.Created slot="created">{formatDate(date)}</Post.Header.Created>
   </Post.Header>

   <Post.Content slot="content">
      {@html content}
   </Post.Content>

   <Post.Images slot="images" {images} />

   <Post.Status slot="status" {likes} {comments} />

   <Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;

export const example4 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
   let images: CarouselSlide[] = [
		{
			id: '1',
			src: 'image.png'
		},
      {
			id: '2',
			src: 'image.png'
		},
      {
			id: '3',
			src: 'image.png'
		},
      {
			id: '4',
			src: 'image.png'
		},
	];
   let likes = ['1', '2'];
   let comments = [];
</script>

<Post>
   <Post.Header slot="header">
      <Post.Header.Avatar slot="avatar" src={avatar} />
      <Post.Header.Creator slot="creator">{creator}</Post.Header.Creator>
      <Post.Header.Created slot="created">{formatDate(date)}</Post.Header.Created>
   </Post.Header>

   <Post.Content slot="content">
      {@html content}
   </Post.Content>

   <Post.Images slot="images" {images} />

   <Post.Status slot="status" {likes} {comments} />

   <Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;

export const example5 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
   let images: CarouselSlide[] = [
		{
			id: '1',
			src: 'image.png'
		},
      {
			id: '2',
			src: 'image.png'
		},
      {
			id: '3',
			src: 'image.png'
		},
      {
			id: '4',
			src: 'image.png'
		},
      {
			id: '5',
			src: 'image.png'
		},
	];
   let likes = [];
   let comments = ['1', '2'];
</script>

<Post>
   <Post.Header slot="header">
      <Post.Header.Avatar slot="avatar" src={avatar} />
      <Post.Header.Creator slot="creator">{creator}</Post.Header.Creator>
      <Post.Header.Created slot="created">{formatDate(date)}</Post.Header.Created>
   </Post.Header>

   <Post.Content slot="content">
      {@html content}
   </Post.Content>

   <Post.Images slot="images" {images} />

   <Post.Status slot="status" {likes} {comments} />

   <Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;

export const example6 = `
<script lang="ts">
   import { Post } from 'stwui';

	const thumb_up = "svg-path";
	const comment = "svg-path";
	const share = "svg-path";

   let avatar = 'image.png',
   let creator = 'Joe Montana';
   let date = new Date(2022, 8, 11);
   let content = "Lorem ipsum...";
   let images: CarouselSlide[] = [
		{
			id: '1',
			src: 'image.png'
		},
      {
			id: '2',
			src: 'image.png'
		},
      {
			id: '3',
			src: 'image.png'
		},
      {
			id: '4',
			src: 'image.png'
		},
      {
			id: '5',
			src: 'image.png'
		},
      {
			id: '6',
			src: 'image.png'
		},
	];
   let likes = [];
   let comments = ['1', '2'];
</script>

<Post>
   <Post.Header slot="header">
      <Post.Header.Avatar slot="avatar" src={avatar} />
      <Post.Header.Creator slot="creator">{creator}</Post.Header.Creator>
      <Post.Header.Created slot="created">{formatDate(date)}</Post.Header.Created>
   </Post.Header>

   <Post.Content slot="content">
      {@html content}
   </Post.Content>

   <Post.Images slot="images" {images} />

   <Post.Status slot="status" {likes} {comments} />

   <Post.Actions slot="actions">
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={comment} />
			<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
		</Post.Actions.Action>
		<Post.Actions.Action>
			<Post.Actions.Action.Icon slot="icon" data={share} />
			<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
		</Post.Actions.Action>
	</Post.Actions>
</Post>`;
