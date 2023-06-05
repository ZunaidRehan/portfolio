import React from "react";
import "./educational.scss";
import ReactSpeedometer from "react-d3-speedometer";
export const Educational = () => {
  return (
    <div className="container">
      <div className="contentWrap">
        <h2 className="header lovable">Educational</h2>
        <div className="educationWrap">
          <div className="paragraph">
            <h4>Bachelor of Computer Engineering</h4>
            <p>
              <i className="fa fa-check"></i> Jamia Millia Islamia (New Delhi)
              with 78%.
            </p>
            <div>
              <ReactSpeedometer
                maxValue={100}
                value={78}
                maxSegmentLabels={6}
                segments={5555}
                customSegmentStops={[0, 20, 40, 60, 80, 100]}
                segmentColors={["#ccc", "#ccc", "#ccc", "#ccc", "#ccc"]}
              />
            </div>
          </div>
          <div className="paragraph">
            <h4>Diploma in Computer Engineering</h4>
            <p>
              <i className="fa fa-check"></i> Jamia Millia Islamia (New Delhi)
              with 75%.
            </p>
            <ReactSpeedometer
              maxValue={100}
              value={75}
              segments={6}
              needleColor="gray"
              customSegmentStops={[0, 20, 40, 60, 80, 100]}
              segmentColors={["#ccc", "#ccc", "#ccc", "#ccc", "#ccc"]}
            />
          </div>
          <div className="paragraph">
            <h4>12th (Secondary School)</h4>
            <p>
              <i className="fa fa-check"></i> Bihar board with 64.2 %.{" "}
            </p>
            <ReactSpeedometer
              maxValue={100}
              value={64.2}
              segments={6}
              needleColor="red"
              customSegmentStops={[0, 20, 40, 60, 80, 100]}
              segmentColors={["#ccc", "#ccc", "#ccc", "#ccc", "#ccc"]}
            />
          </div>
          <div className="paragraph">
            <h4>10th(High School)</h4>
            <p>
              <i className="fa fa-check"></i> Bihar board with 74.2%.
            </p>
            <ReactSpeedometer
              maxValue={100}
              value={74.2}
              segments={6}
              needleColor="green"
              customSegmentStops={[0, 20, 40, 60, 80, 100]}
              segmentColors={["#ccc", "#ccc", "#ccc", "#ccc", "#ccc"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
