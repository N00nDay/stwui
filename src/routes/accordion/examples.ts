const exampleJavascript = `
import { Accordion } from 'stwui';

let open1 = '';

function handleClick(item: string) {
	if (open1 === item) {
		open1 = '';
	} else {
		open1 = item;
	}
}`;

const exampleSvelte = `
<script lang="ts">
   import { Accordion } from 'stwui';

   let open1 = '';

   function handleClick(item: string) {
      if (open1 === item) {
         open1 = '';
      } else {
         open1 = item;
      }
   }
</script>

<Accordion>
	<Accordion.Item open={open1 === 'open1'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open1')}>
			Item 1
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open1 === 'open2'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open2')}>
			Item 2
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open1 === 'open3'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open3')}>
			Item 3
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
			accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
</Accordion>`;

export { exampleJavascript, exampleSvelte };
