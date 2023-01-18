import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#567189">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#567189", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Vernon High School, Mount Vernon, NY
          </h3>
          <h4> High School Diploma</h4>
          <p> 2013 - 2017</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#567189", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Columbia University, New York, NY
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Profesional Certification Full Stack Development/CS
          </h4>

          <p> 2017 and 2020</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          iconStyle={{ background: "#567189", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer & Quality Manager - Bingo Painting
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Westchester, NY
          </h4>
          <p>• Identifying client needs, business financial management, time management assessment, quality management, and portfolio marketing through client testimonials and quality service showmanship.</p><br/>
            <p> • Utilizing portfolio images and testimonials to create web application to have potential clientele reach out directly through HTML, CSS, and JavaScript and utilizing Amazon Web hosting.</p><br/>
            <p>2015 - Present</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
         
          iconStyle={{ background: "#567189", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer & Bar Manager - Merchants Hospitality
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>• In coordination with Beverage Managers to create restaurant web applications through vanilla HTML, CSS and JavaScript to promote individual establishment ambiance and promoting seasonal events.</p>
          <br/>
          <p>• Collaboration with outsourced photographers and videographers to increase marketability through competition demographic analytics and strategy.</p>
          <p>2018 - 2020</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
         
          iconStyle={{ background: "#567189", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Fans Forest Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Osaka, Japan
          </h4>
          <p>• Web Developer role in creating a WordPress website that can be marketed to Taiwanese, Korean and Japanese clientele for English tutoring services for group of independent tutors.</p>
          <br/>
          <p>• Utilizing hosting service Baidu to promote services on Chinese server providers for SEO that increased clientele count by 37 consistent students from originally 6 in the span of 3 months.</p>
          <p> 2022 (Freelance)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;