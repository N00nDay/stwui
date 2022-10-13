export const example = `
<script lang="ts">
   import { Row, Col } from 'stwui';
   import { formatNumber } from 'stwui/utils';

   const number = 123456789.12;
   const percent = 0.83;
</script>

<Row>
   <Col class="col-24 flex items-center justify-center gap-4 md:gap-8">
      <h4>Starting Number: {number}</h4>
      <h4>Starting Percent: {percent}</h4>
   </Col>
</Row>
<br />
<Row>
   <Col class="col-24 lex items-center justify-center text-center">
      Currency: {formatNumber(number, {
         style: 'currency',
         maximumFractionDigits: 2,
         minimumFractionDigits: 2
      })}
      <br />
      Currency Compact: {formatNumber(number, {
         style: 'currency',
         notation: 'compact',
         maximumFractionDigits: 1,
         minimumFractionDigits: 1
      })}
      <br />
      Percent: {formatNumber(percent, {
         style: 'percent'
      })}
      <br />
      Decimal: {formatNumber(number, {
         style: 'decimal',
         maximumFractionDigits: 2,
         minimumFractionDigits: 2
      })}
      <br />
      Decimal: {formatNumber(number, {
         style: 'decimal',
         notation: 'compact',
         maximumFractionDigits: 2,
         minimumFractionDigits: 2
      })}
   </Col>
</Row>
`;
