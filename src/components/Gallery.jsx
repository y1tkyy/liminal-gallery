import React from "react";
import liminalflower from "../assets/images/liminalflower.webp";
import liminalhallwayA from "../assets/images/liminalhallwayA.webp";
import liminalhallwayB from "../assets/images/liminalhallwayB.webp";
import liminaltunnel from "../assets/images/liminalfield.webp";
import liminalpool from "../assets/images/liminalpool.webp";

const Gallery = () => {
  return (
    <>
      <section className="gallery">
        <h2 className="gallery__title visually-hidden">Liminal</h2>
        <div className="gallery__level gallery__level--one">
          <div className="gallery__item gallery__item--left">
            <img src={liminalflower} alt="Left" />
          </div>
          <div className="gallery__item gallery__item--center">
            <h3>Що таке лімінальний простір?</h3>
            <p>
              Термін походить від латинського слова limen, що означає "поріг".
              Лімінальні простори часто викликають дивні або незвичні відчуття,
              оскільки вони поєднують елементи відомого з незнайомим, зазвичай
              асоціюються з занедбаними або тимчасово непридатними місцями, які
              ми часто бачимо, але рідко помічаємо.
            </p>
          </div>
          <div className="gallery__item gallery__item--right">
            <img src={liminalhallwayA} alt="Right" />
            <p>Відчуття</p>
          </div>
        </div>
        <div className="gallery__level gallery__level--two">
          <div className="gallery__item gallery__item--left">
            <h3>Відчуття тривоги</h3>
            <p>
              Лімінальні простори можуть викликати відчуття тривоги, оскільки
              вони знаходяться на межі між двома станами. Людина відчуває
              дискомфорт, бо не може чітко класифікувати простір як звичайний
              або безпечний.
            </p>
          </div>
          <div className="gallery__item gallery__item--middle-left">
            <img src={liminalhallwayB} alt="Middle Left" />
          </div>
          <div className="gallery__item gallery__item--middle-right">
            <h3>Між</h3>
          </div>
          <div className="gallery__item gallery__item--right">
            <img src={liminaltunnel} alt="Right" />
          </div>
        </div>
        <div className="gallery__level gallery__level--three">
          <div className="gallery__item gallery__item--left">
            <h3>Інтернет</h3>
            <h3 className="bottom">естетика</h3>
          </div>
          <div className="gallery__item gallery__item--center">
            <img src={liminalpool} alt="Center" />
          </div>
          <div className="gallery__item gallery__item--right">
            <h3>Феномен </h3>
            <p>
              Лімінальні простори стали особливо популярними в інтернет-культурі
              завдяки їх здатності викликати сильні емоційні реакції. Фото таких
              просторів часто публікують у соціальних мережах, як щось "дивне,
              але знайоме".
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
