import React from "react";
import "./AdvancedStatistics.css";
import FeatureCard from "../FeaturedCard/FeaturedCard";
import brandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../images/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  return (
    <div>
      <section className="advancedStatistics">
        <div className="as-title">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="featurecards">
          <FeatureCard
            src={brandRecognitionIcon}
            id="feature1"
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
          <span className="horizontal-line horizontal1"></span>
          <FeatureCard
            src={detailedRecordsIcon}
            id="feature2"
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <span className="horizontal-line horizontal2"></span>
          <FeatureCard
            src={fullyCustomizableIcon}
            id="feature3"
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </section>
    </div>
  );
};

export default AdvancedStatistics;
