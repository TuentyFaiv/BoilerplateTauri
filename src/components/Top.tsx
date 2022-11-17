import type { TopProps } from "../common/typing/proptypes";

import "../styles/components/Top.scss";

function Top({ name, amount, position }: TopProps) {
  return (
    <article className="top" data-position={position}>
      <h1 className="top__title">{name}</h1>
      <p className="top__position">{`${amount} ventas`}</p>
    </article>
  );
}

export default Top;
