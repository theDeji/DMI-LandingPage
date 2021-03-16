import React from "react";

import Point from "../Point";
import boarding from "../../assets/boarding.jpg";
import day from "../../assets/day.jpg";
import {
  PackDesc,
  ImageContainer,
  Packages,
  FContainer,
  FPackages,
  FeatureBtn,
} from "./FeatureElements";

const Feature = () => {
  return (
    <FContainer>
      <h2>Our System</h2>
      <FPackages>
        <Packages>
          <ImageContainer>
            <img src={boarding} alt="boarding-img" />
          </ImageContainer>
          <PackDesc>
            <h3>Boarding System</h3>
            <h4>
              Sign your kid up for our boarding system and get them the best
              educational experience.
            </h4>
            <Point title="24/7 Electricity" />
            <Point title="High-end Security" />
            <Point title="Three-squared Balance Diet Meal" />
            <Point title="Best Accomodation Facilities" />
            <FeatureBtn>Enroll Now</FeatureBtn>
          </PackDesc>
        </Packages>
        <Packages>
          <ImageContainer>
            <img src={day} alt="day-img" />
          </ImageContainer>
          <PackDesc>
            <h3>Day System</h3>
            <h4>
              Enroll your kid into our institution and get them the best
              educational experience.
            </h4>
            <Point title="Standard Teaching Facilities" />
            <Point title="High-end Security" />
            <Point title="Personal Tutors" />
            <Point title="Qualified Teachers" />
            <FeatureBtn>Enroll Now</FeatureBtn>
          </PackDesc>
        </Packages>
      </FPackages>
    </FContainer>
  );
};

export default Feature;
