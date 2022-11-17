import { useMemo } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import "../styles/components/Day.scss";

function Day() {
  const time = useMemo(() => new Date(), []);

  return (
    <article className="day">
      {format(time, "EEEE", { locale: es })}
      <p className="day__number">
        {format(time, "dd", { locale: es })}
      </p>
      <span className="day__month">
        {format(time, "LLL", { locale: es })}
      </span>
    </article>
  );
}

export default Day;
