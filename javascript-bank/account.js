/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function (amount) {
  var ins = 0;
  var outs = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      ins += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      outs += this.transactions[i].amount;
    }
  }
  var balance = ins - outs;
  return balance;
};
