export const usage = `
import { encodeSearchParams } from 'stwui/utils';
// OR
import encodeSearchParams from 'stwui/utils/encodeSearchParams'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { Row, Col, Input, Badge, Button } from 'stwui';
   import { encodeSearchParams } from 'stwui/utils';

   let param = '';
   let value = '';

   let searchParams: Writable<Record<string, string>> = writable({
	   paramOne: 'one',
	   paramTwo: 'two'
   });

   function addParam() {
	   searchParams.update((current) => {
		   return { ...current, [param]: value };
	   });
	   param = '';
	   value = '';
   }

   function deleteParam(paramToDelete: string) {
	   searchParams.update((current) => {
		   delete current[paramToDelete];
		   return current;
	   });
   }
</script>

<Row>
   <Col class="col-11">
      <Input label="Parameter" name="parameter" bind:value={param} class="pr-2" />
   </Col>
   <Col class="col-11">
      <Input label="Value" name="value" bind:value class="pr-2" />
   </Col>
   <Col class="col-2 flex justify-start items-end h-[62px]">
      <Button type="primary" on:click={addParam}>Submit</Button>
   </Col>
   <Col class="col-24 h-[64px] flex items-center justify-center gap-2">
      {#each Object.entries($searchParams) as [key, value]}
         <Badge type="info">
            {key}: {value}
            <Badge.Close slot="close" on:click={() => deleteParam(key)} />
         </Badge>
      {/each}
   </Col>
   <Col class="col-24 h-full flex items-end justify-center">
      Search Params: https://some-site.com{encodeSearchParams($searchParams)}
   </Col>
</Row>
`;
