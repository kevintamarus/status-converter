module.exports = {
  convertStatus: status => {
    if(status.toLowerCase() === 'failed') {
      return 'declined';
    }
    if(status.toLowerCase() === 'completed') {
      return 'approved';
    }
    return status;
  },
  convertTransactionMessage: message => {
    if(message.includes('failed')) {
      return message.replace(new RegExp('failed'), 'DECLINED');
    }
    if(message.includes('completed')) {
      return message.replace(new RegExp('completed'), 'APPROVED');
    }
    return message;
  }
}