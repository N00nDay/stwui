export const example = `
<script lang="ts">
   import { Row, Col } from 'stwui';
   import { formatDate } from 'stwui/utils';

   let date = new Date(Date.now());
	let dateMinus30Minutes = new Date(new Date().getTime() - 1000 * 60 * 30);
	let dateMinus1Hour = new Date(new Date().getTime() - 1000 * 60 * 60);
	let dateMinus2Hours = new Date(new Date().getTime() - 1000 * 60 * 120);
	let dateMinus4Hours = new Date(new Date().getTime() - 1000 * 60 * 240);
	let dateMinus1Day = new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
	let dateMinus1Year = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 365);

	let dateAdd30Minutes = new Date(new Date().getTime() + 1000 * 60 * 30);
	let dateAdd1Hour = new Date(new Date().getTime() + 1000 * 60 * 60);
	let dateAdd2Hours = new Date(new Date().getTime() + 1000 * 60 * 120);
	let dateAdd4Hours = new Date(new Date().getTime() + 1000 * 60 * 240);
	let dateAdd1Day = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
	let dateAdd1Year = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
</script>

<Row>
   <Col class="col-24 flex items-center justify-center">
      Currently: {formatDate(date)}
   </Col>
   <Col class="col-24 md:col-12 lex items-center justify-center text-center">
      <h3>The Past</h3>
      <br />
      30 Minutes: {formatDate(dateMinus30Minutes)}
      <br />
      1 Hour: {formatDate(dateMinus1Hour)}
      <br />
      2 Hour: {formatDate(dateMinus2Hours)}
      <br />
      4 Hour: {formatDate(dateMinus4Hours)}
      <br />
      1 Day: {formatDate(dateMinus1Day)}
      <br />
      1 Year: {formatDate(dateMinus1Year)}
   </Col>
   <Col class="col-24 md:col-12 lex items-center justify-center text-center">
      <h3>The Future</h3>
      <br />
      30 Minutes: {formatDate(dateAdd30Minutes)}
      <br />
      1 Hour: {formatDate(dateAdd1Hour)}
      <br />
      2 Hour: {formatDate(dateAdd2Hours)}
      <br />
      4 Hour: {formatDate(dateAdd4Hours)}
      <br />
      1 Day: {formatDate(dateAdd1Day)}
      <br />
      1 Year: {formatDate(dateAdd1Year)}
   </Col>
</Row>
`;
