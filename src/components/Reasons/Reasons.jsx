import React from "react";
import "./Reasons.css";
import image1 from "../../assets/yasmimbooks.png";
import tick from "../../assets/ticketPink.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="img-icon" />
      </div>
      <div className="right-r">
        <span>Quem sou?</span>

        <div>
          <span className="stroke-text">Sobre </span>
          <span> mim</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              Sou Yasmim Ferreira Costa, no momento cursando Desenvolvimento
              Full Stack na comunidade Devclub, possuo curso na instituição
              4linux em Lógica de Programação em JavaScript, mais de 1 ano que
              estou na Programação me dedicando ao máximo.
              <br />
              Atuamente estou no 1˚Período da Graduação de Engenharia de
              Software, me identifico muito com a Programação, amo programar,
              sempre estou em busca de novos conhecimentos, sou persistente,
              determinada, comunicativa, gosto de resolver problemas, gosto de
              trabalhar em equipe, busco oportunidades.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
