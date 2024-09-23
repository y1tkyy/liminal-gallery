import React from "react";
import video from "../assets/video/liminalvideo.mp4";

const Video = () => {
  return (
    <section className="video-section content-container">
      <div className="video-content">
        <div className="text-container">
          <h2>Неприродна долина архітектури</h2>
          <p>
            Фіолетовий колір часто асоціюється з містичністю, інтуїцією та
            внутрішнім пошуком, що може створювати атмосферу загадковості й
            глибоких роздумів. Двері у полі — це символ переходу, невідомості,
            відкриття нових можливостей або страху перед невідомим. Вони
            втілюють точку вибору: залишитися у звичному середовищі або піти в
            невідоме. Небо у композиції додає відчуття простору, свободи і
            водночас пустоти. Воно підкреслює відкритість, але також може
            викликати тривогу через відсутність чітких кордонів або орієнтирів.
            Відкритий небокрай у поєднанні з дверима може уособлювати глибокі
            внутрішні зміни або прагнення до духовного чи емоційного зростання.
          </p>
        </div>
        <div className="video-container">
          <video width="800" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
