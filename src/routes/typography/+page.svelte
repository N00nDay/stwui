<script lang="ts">
	import { Col, Card } from '../../lib';
	import { headings, paragraphs } from './examples';
	import { CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<Card>
		<Card.Header>Headings</Card.Header>
		<Card.Content>
			<h1>h1 Tag</h1>
			<h2>h2 Tag</h2>
			<h3>h3 Tag</h3>
			<h4>h4 Tag</h4>

			<br />

			<CodeBlock language="html" code={headings} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card>
		<Card.Header>Paragraph</Card.Header>
		<Card.Content>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

			<br />

			<CodeBlock language="html" code={paragraphs} />
		</Card.Content>
	</Card>
</Col>
