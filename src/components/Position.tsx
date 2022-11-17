import type { PositionProps } from "../common/typing/proptypes";

import "../styles/components/Position.scss";

// eslint-disable-next-line react/prop-types
function Position({ position, name, amount }: PositionProps) {
  return (
    <p className="position" data-position={position}>
      <span className="position__name">{name}</span>
      <span className="position__amount">{`${amount} ventas`}</span>
    </p>
  );
}

export default Position;
