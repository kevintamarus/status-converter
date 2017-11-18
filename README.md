## Netki Status Converter

https://www.npmjs.com/package/status-converter

## Install

`npm install --save status-converter`

## Information

`Convert.convertStatus(status)` : converts status to 'failed' or 'completed' to 'declined' or 'approved', otherwise it will return the original status.

`Convert.convertTransactionMessage(message)` : replaces any 'failed' or 'completed' statuses in the transaction message with 'DECLINED' or 'APPROVED'.

## Example Use Cases

```js
import Convert from 'status-converter';

Convert.convertStatus('failed') // => converts 'failed' to 'declined'

Convert.convertStatus('completed') // => converts 'completed' to 'approved'

Convert.convertTransactionMessage('transaction changed to failed status' ) // => 'transaction changed to DECLINED status'

Convert.convertTransactionMessage('transaction changed to completed status' ) // => 'transaction changed to APPROVED status'

```