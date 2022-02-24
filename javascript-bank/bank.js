/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  } return null;
};

Bank.prototype.getTotalAssets = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  } else if (balance < 0) {
    return null;
  }
};
