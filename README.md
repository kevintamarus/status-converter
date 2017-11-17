## Netki Status Converter

https://www.npmjs.com/package/status-converter

## Install

`npm install --save status-converter`

## Information

`Converter.convertStatus(status)` : converts status to 'failed' or 'completed' to 'declined' or 'approved', otherwise it will return the original status.

`Converter.convertTransactionMessage(message)` : replaces any 'failed' or 'completed' statuses in the transaction message with 'DECLINED' or 'APPROVED'.

## Example Use Cases

```js
import Convert from 'status-converter';

Converter.convertStatus('failed') // => converts 'failed' to 'declined'

Converter.convertStatus('completed') // => converts 'completed' to 'approved'

Converter.convertTransactionMessage('transaction changed to failed status' ) // => 'transaction changed to DECLINED status'

Converter.convertTransactionMessage('transaction changed to completed status' ) // => 'transaction changed to APPROVED status'

```