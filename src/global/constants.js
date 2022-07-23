let constant = {};


constant.ZERO = 0;
constant.ACTIVE = 1;
constant.INACTIVE = 2;
constant.BLOCKED = 3;
constant.DELETED = 4;
constant.PENDING = 6;

constant.ORDER = {
  PLACED : 1,
  SHIPPED : 2,
  OUT_FOR_DELIVERY: 3
}

constant.PAYEMENT_MODE = {
  COD: 1,
  CARD: 2,
  WALLET:3
}


module.exports = constant;