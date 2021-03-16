import React from "react";
import gs from "../../assets/gs.webp";
import coke from "../../assets/coke.webp";
import dmi from "../../assets/dmi.png";
import mit from "../../assets/mit.webp";
import cam from "../../assets/cam.svg";
import oxford from "../../assets/oxford.jpg";
import nestle from "../../assets/nestle.webp";

import { PartnerContent, PartnerContainer } from "./PartnerElements";
import Icon from "./Icon";

const Partners = () => {
  return (
    <PartnerContent>
      <h2>Our Partners</h2>
      <PartnerContainer>
        <div>
          <Icon image={cam} name="Lead Partner" />
          <Icon image={mit} name="Official License" />
          <Icon image={oxford} name="Official University" />
          <Icon image={coke} name="Official Drink" />
          <Icon image={dmi} name="Official Digital Marketer" />
          <Icon image={nestle} name="Official Coffee" />
          <Icon image={gs} name="Official Bank" />
        </div>
      </PartnerContainer>
    </PartnerContent>
  );
};

export default Partners;
