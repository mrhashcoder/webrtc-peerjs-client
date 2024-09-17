import React from "react";
import SingleFeature from "../styled-elements/single-feature";
import SectionTitle from "../styled-elements/section-title";

import { featuresData } from "@/config/contents";

function FeatureSection() {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Features We Provide In Our Projects"
            paragraph=" "
            center
          />

          <div className="rounded-lg p-4 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
