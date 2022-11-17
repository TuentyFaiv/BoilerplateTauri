import { useEffect, useState } from "react";
import { getTotals } from "../common/services";
import { useSocketContext } from "../context";
import { useModal } from "../hooks";

import type { Positions, RankingUpdated, Tops } from "../common/typing/interfaces";

import "../styles/pages/Home.scss";

import MonthIcon from "../assets/images/icons/month-icon.svg";
import WeekIcon from "../assets/images/icons/week-icon.svg";
import MoneyGif from "../assets/images/money.gif";
import SaleAudio from "../assets/audio/sale-audio_7.mp3";

import { Day, Modal, Position, Top } from "../components";

const audio = new Audio(SaleAudio);

export default function Home() {
  const { socket } = useSocketContext();
  const [modal, toggleModal] = useModal();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);
  const [tops, setTops] = useState<Tops>({
    first: [],
    second: [],
    third: [],
    week: [],
    month: []
  });
  const [notification, setNotification] = useState({
    name: "",
    amount: ""
  });

  const handlePositions = ({ top10, topM, topW }: Positions) => {
    setTops((prevTops) => ({
      ...prevTops,
      first: top10.slice(0, 3).map((top) => ({
        position: top.num,
        name: top.crmAgente,
        fullName: top.crmAgente,
        amount: top.transactions
      })),
      second: top10.slice(3, 7).map((position) => ({
        position: position.num,
        name: position.crmAgente,
        amount: position.transactions
      })),
      third: top10.slice(7).map((position) => ({
        position: position.num,
        name: position.crmAgente,
        amount: position.transactions
      })),
      week: topW.map((position) => ({
        position: position.num,
        name: position.crmAgente,
        amount: position.transactions
      })),
      month: topM.map((position) => ({
        position: position.num,
        name: position.crmAgente,
        amount: position.transactions
      }))
    }));
  };

  useEffect(() => {
    const handleTops = ({ data }: RankingUpdated) => {
      const { agent, top10, topM, topW, ammount, action } = data;

      handlePositions({ top10, topM, topW });

      if (action === "alert") {
        toggleModal();
        setNotification((prevNotification) => ({
          ...prevNotification,
          name: agent,
          amount: ammount
        }));

        audio.play();
        audio.onended = () => {
          toggleModal();
          setNotification((prevNotification) => ({
            ...prevNotification,
            name: "",
            amount: ""
          }));
        };
      }
    };

    socket?.on("ranking:updated", handleTops);
    return () => {
      socket?.off("ranking:updated", handleTops);
    };
  }, [socket, toggleModal]);

  useEffect(() => {
    const totals = async () => {
      try {
        const positions = await getTotals();
        handlePositions(positions);
      } catch (err) {
        setError(!err);
      }
    };
    totals();
  }, []);

  return (
    <main className="home">
      <Modal
        open={modal}
        onClose={toggleModal}
        config={{
          hideclose: true,
          header: false
        }}
      >
        {() => (
          <article className="home__notification">
            <p className="home__notification-name">{notification.name}</p>
            <img src={MoneyGif} alt="" className="home__notification-gif" />
            <p className="home__notification-amount">{notification.amount}</p>
          </article>
        )}
      </Modal>
      <section className="home__top">
        <Day />
        {/* <button type="button" onClick={playAlert}>show alert</button> */}
        <div className="home__top-box">
          {tops.first.map(({ name, amount, position }) => (
            <Top
              key={position}
              name={name}
              amount={amount}
              position={position}
            />
          ))}
        </div>
      </section>
      <section className="home__leader">
        <div className="home__leader-box">
          {tops.second.map(({ position, name, amount }) => (
            <Position
              key={position}
              position={position}
              name={name}
              amount={amount}
            />
          ))}
        </div>
        <div className="home__leader-box">
          {tops.third.map(({ position, name, amount }) => (
            <Position
              key={position}
              position={position}
              name={name}
              amount={amount}
            />
          ))}
        </div>
      </section>
      <section className="home__time">
        <div className="home__time-box">
          <h1 className="home__time-title">
            <img src={WeekIcon} alt="" className="home__time-title-icon" />
            Más ventas de la semana
          </h1>
          <div className="home__time-item">
            {tops.week.map(({ position, name, amount }) => (
              <Position
                key={position}
                position={position}
                name={name}
                amount={amount}
              />
            ))}
          </div>
        </div>
        <div className="home__time-box">
          <h1 className="home__time-title">
            <img src={MonthIcon} alt="" className="home__time-title-icon" />
            Más ventas del mes
          </h1>
          <div className="home__time-item">
            {tops.month.map(({ position, name, amount }) => (
              <Position
                key={position}
                position={position}
                name={name}
                amount={amount}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
