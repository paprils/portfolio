import css from "../../LayoutGrid.module.scss";

const useCol = (props) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    orderXs,
    orderSm,
    orderMd,
    orderLg,
    orderXl,
    flex,
    noPaddingRight,
    noPaddingLeft,
  } = props;

  let colxs = css["col" + xs];
  let colsm = "";
  if (sm !== "") {
    colsm = " " + css["colSM" + sm];
  }
  let colmd = "";
  if (md !== "") {
    colmd = " " + css["colMD" + md];
  }
  let collg = "";
  if (lg !== "") {
    collg = " " + css["colLG" + lg];
  }
  let colxl = "";
  if (xl !== "") {
    colxl = " " + css["colXL" + xl];
  }
  let colorderxs = "";
  if (orderXs !== "") {
    colorderxs = " " + css["orderXS" + orderXs];
  }
  let colordersm = "";
  if (orderSm !== "") {
    colordersm = " " + css["orderSM" + orderSm];
  }
  let colordermd = "";
  if (orderMd !== "") {
    colordermd = " " + css["orderMD" + orderMd];
  }
  let colorderlg = "";
  if (orderLg !== "") {
    colorderlg = " " + css["orderLG" + orderLg];
  }
  let colorderxl = "";
  if (orderXl !== "") {
    colorderxl = " " + css["orderXL" + orderXl];
  }

  let isFlex = "";
  if (flex) {
    isFlex = " " + css.colDisplayFlex;
  }
  let hasNoPaddingLeft = "";
  if (noPaddingLeft) {
    hasNoPaddingLeft = " " + css.colNoPaddingLeft;
  }
  let hasNoPaddingRight = "";
  if (noPaddingRight) {
    hasNoPaddingRight = " " + css.colNoPaddingRight;
  }

  let classes = `${colxs}${colsm}${colmd}${collg}${colxl}${colorderxs}${colordersm}${colordermd}${colorderlg}${colorderxl}${isFlex}${hasNoPaddingLeft}${hasNoPaddingRight}`;

  return { classes };
};

export default useCol;
