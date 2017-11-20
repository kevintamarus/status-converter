module.exports = {
  convertStatus: function(status) {
    if(status) {
      if(status.toLowerCase() === 'failed') {
        return 'declined';
      }
      if(status.toLowerCase() === 'completed') {
        return 'approved';
      }
    }
    return status;
  },
  convertTransactionMessage: function(message) {
    if(status) {
      if(message.includes('failed')) {
        return message.replace(new RegExp('failed'), 'DECLINED');
      }
      if(message.includes('completed')) {
        return message.replace(new RegExp('completed'), 'APPROVED');
      }
    }
    return message;
  }
}