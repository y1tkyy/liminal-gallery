import React from "react";
import liminalflower from "../assets/images/liminalflower.webp";
import liminalhallwayA from "../assets/images/liminalhallwayA.webp";
import liminalhallwayB from "../assets/images/liminalhallwayB.webp";
import liminalroof from "../assets/images/liminalsign.webp";
import liminaltunnel from "../assets/images/liminalpool.webp";

const Set = () => {
  return (
    <section className="content-container">
      <h2 className="set__title">Вітаємо у лімінальному просторі</h2>
      <div className="set">
        <div className="set__item set__item--left">
          <img src={liminalflower} alt="Left Top" />
          <img src={liminalhallwayB} alt="Left Bottom" />
        </div>

        <div className="set__item set__item--middle">
          <img src={liminalhallwayA} alt="Middle" />
        </div>

        <div className="set__item set__item--right">
          <img src={liminalroof} alt="Right Top" />
          <img src={liminaltunnel} alt="Right Bottom" />
        </div>
      </div>
      <p className="set__text">
        Граничні (Лімінальні) простори - предмет естетики Інтернету, який
        зображує порожні місця, які мають моторошний, покинутий і часто
        сюрреалістичний вигляд.
      </p>
    </section>
  );
};

export default Set;
