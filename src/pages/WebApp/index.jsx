import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Form } from "../../components/Blockchain/Form";
import { BtnBlockchain } from "../../components/Button/Blockchain/BtnBlockchain";
import { PlatformWeb3 } from "../../components/Web3/PlatformWeb3/PlatformWeb3";
import { Card } from "../../components/Metaverse/Features/Card";
import { USACard } from "../../components/Web3/USA/USACard";

import oval from "../../assets/oval.png";
import platformImage from "../../assets/web3/img/platform.png";
import {
  benefits,
  cardsVirtualRevolution,
  serviceCards,
  progLangs,
  columns1,
  columns2,
  features,
} from "./webappData";
import mac from "../../assets/webapp/mac.png";
import checkers from "../../assets/webapp/checkers.png";
import plane from "../../assets/webapp/plane.png";
import comet from "../../assets/token/compet.png";

import { useMediaQuery } from "react-responsive";

import "./web-app.scss";

const titleHeadStart =
  "Get A Head Start With A Leading PWA Development Company In USA";
const contentHeadStart =
  "The future of your business must rely on reliable apps like PWAs that deliver more for less. Many businesses are transitioning to PWAs for their numerous benefits. As a top PWA development company, RisingMax uses modern technologies and practices to deliver high-quality, innovative PWA solutions, boosting your digital transformation.";

export default function WebApp() {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="webapp">
      <Header position="fixed" />
      <div className="webapp_hero">
        <div className="webapp_hero_oval">
          <img src={oval} alt="oval" />
        </div>
        <div className="webapp_hero_text-block">
          <h2>Progressive Web App Development Services</h2>
          <p>
            Take advantage of bespoke web solutions that gaze and act like a
            native app, “Progressive Web App.” For a myriad of industry
            verticals, we have created feature-rich PWAs with 100% success.
          </p>
          <BtnBlockchain />
        </div>
        <Form />
      </div>
      <div className="webapp_main">
        {isTablet ? (
          <div className="webapp_main_headstart">
            <div className="webapp_main_headstart_img">
              <img src={comet} alt="" />
            </div>
            <div className="webapp_main_headstart_text">
              <div>
                Get A Head Start With A Leading PWA Development Company In USA
              </div>
              <p>
                The future of your business must rely on reliable apps like PWAs
                that deliver more for less. Many businesses are transitioning to
                PWAs for their numerous benefits. As a top PWA development
                company, RisingMax uses modern technologies and practices to
                deliver high-quality, innovative PWA solutions, boosting your
                digital transformation.
              </p>
              <BtnBlockchain />
            </div>
          </div>
        ) : (
          <PlatformWeb3
            title={titleHeadStart}
            text={contentHeadStart}
            image={platformImage}
          />
        )}
        <div className="webapp_main_success">
          <div className="webapp_main_success_bigt">
            Success-Oriented Progressive Web App Development Company
          </div>
          <p>
            At RisingMax, we design, develop and develop faster progressive web
            applications that ensure smooth performance, even in poor internet
            connectivity. By keeping the needs of wide industries in mind, we
            craft PWA solutions integrated with unique features that help
            deliver meaningful user experiences.
          </p>
        </div>

        <div className="webapp_main_benefits">
          <div className="webapp_main_benefits_left">
            {benefits.map((b) => {
              return (
                <div key={b.title} className="webapp_main_benefits_left_line">
                  <div className="webapp_main_benefits_left_line_img">
                    <img src={b.img} alt="" />
                  </div>
                  <div className="webapp_main_benefits_left_line_text">
                    <div>{b.title}</div>
                    <p className="bp">{b.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="webapp_main_benefits_right">
            <img src={mac} alt="" />
          </div>
        </div>
        <div
          className="webapp_main_success"
          style={{
            marginTop: 90,
          }}
        >
          <div className="webapp_main_success_bigt">
            Why Are PWAs A Worthy Business Asset?
          </div>
          <p>
            Progressive web apps (PWAs) empower businesses to enjoy the unique
            features of web API and cross-platform mobile apps. They work like a
            web page and offer all kinds of mobile app features & functionality,
            thus making them a valuable business asset.
          </p>
        </div>
        <div className="webapp_main_cards">
          {cardsVirtualRevolution.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <div
          className="webapp_main_success"
          style={{
            marginTop: 90,
          }}
        >
          <div className="webapp_main_success_bigt">
            Our Progressive Web App Development  Services
          </div>
          <p>
            Progressive web apps (PWAs) empower businesses to enjoy the unique
            features of web API and cross-platform mobile apps. They work like a
            web page and offer all kinds of mobile app features & functionality,
            thus making them a valuable business asset.
          </p>
        </div>
        <div className="webapp_main_services">
          {serviceCards.map((s) => {
            return (
              <div key={s.title} className="webapp_main_services_card">
                <div className="gradient-line"></div>
                <div className="big-text">{s.title}</div>
                <p>
                  Our development team specializes in designing custom PWAs with
                  intuitive UI, quick animation, lightning-fast speed, and other
                  specific business requirements.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="webapp_blue-section">
        <div className="webapp_blue-section_left">
          <div>
            Looking For A Reliable Technology Partner For Your Next PWA Project?
          </div>
          <p>
            We at RisingMax Inc. offer flexible engagement models to ensure that
            we meet our client’s PWA project requirements. Get in touch with our
            experts and discuss your PWA project today.
          </p>
          <BtnBlockchain />
        </div>
        <div className="webapp_blue-section_right">
          <img src={checkers} alt="" />
        </div>
      </div>
      <div className="webapp_main">
        <div
          className="webapp_main_success"
          style={{
            marginTop: 90,
          }}
        >
          <div className="webapp_main_success_bigt">
            Modern Technologies Behind Progressive Web App Development
          </div>
          <p>
            Our crafted PWA solutions are armed with ground-breaking
            technologies and tools that help entrepreneurs and SMEs boost their
            brand reach in the digital space.
          </p>
        </div>
        <div className="webapp_main_langs">
          {progLangs.map((p) => {
            return (
              <div key={p.name} className="webapp_main_langs_card">
                <img src={p.img} alt="" />
                <div>{p.name}</div>
              </div>
            );
          })}
        </div>
        <div
          className="webapp_main_success"
          style={{
            marginTop: 90,
          }}
        >
          <div className="webapp_main_success_bigt">
            Progressive Web App Development Process We Follow
          </div>
          <p>
            We follow a well-documented and well-planned progressive web app
            development process to meet clients' budget deadlines and deliver
            exceptions. Our development process starts with the following;
          </p>
        </div>
        <div className="webapp_main_plane">
          <div className="webapp_main_plane_img">
            <img src={plane} alt="" />
          </div>
          <div className="webapp_main_plane_cols">
            {columns1.map((c) => {
              return (
                <div className="column" key={c.text}>
                  <div className="column_bigt">
                    <div className="gradient"></div>
                    <div className="text">{c.title}</div>
                  </div>
                  <p>{c.text}</p>
                </div>
              );
            })}
          </div>
          <div className="webapp_main_plane_cols cols-margin">
            {columns2.map((c) => {
              return (
                <div className="column" key={c.text}>
                  <div className="column_bigt">
                    <div className="gradient"></div>
                    <div className="text">{c.title}</div>
                  </div>
                  <p>{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="webapp_main_title-text">
          Why Our PWA Solutions Are Like No One Else
        </div>
        <div className="webapp_main_features">
          {features.map((card) => (
            <USACard
              key={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
