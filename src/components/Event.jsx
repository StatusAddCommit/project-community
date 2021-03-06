/* eslint-disable */

import React from 'react';
import messages from '../constants/messages';

const { social } = messages;

const Event = ({ events }) =>
  events.slice(0, 4).map((event, i) => {
    const eName = event[0];
    const eImgMain = event[2] && event[2].split(',')[0];
    const eLoc = event[3];
    const eDate = event[4];
    const eDescShort = event[5];

    return (
      <div className="column" key={eName}>
        <article
          className="fly-card fly-event fly-flip-effect"
          itemScope
          itemType="http://schema.org/Event"
          key={eName}
        >
          <div className="boxed flip-front">
            <a
              className="event-media js-wave"
              href={`/event:${eName.replace(/\s/g, '_')}`}
              itemProp="url"
            >
              <img
                src={!eImgMain ? 'images/temp/event-1.jpg' : eImgMain}
                alt="Upcoming event"
                itemProp="image"
              />
            </a>
            <div className="event-content">
              <h3 className="event-title" itemProp="name">
                <a href={`/event:${eName.replace(/\s/g, '_')}`}>{eName}</a>
              </h3>
              <div className="event-location">
                <button
                  type="button"
                  className="flip-button"
                  itemProp="location"
                >
                  <i className="material-icons">location_on</i>
                  {!eLoc ? 'Earth, Solar System' : eLoc}
                </button>
                <time
                  className="event-date"
                  dateTime={!eDate ? null : eDate}
                  itemProp="startDate"
                >
                  <i className="material-icons">query_builder</i>
                  {!eDate ? 'TBD' : eDate}
                </time>
              </div>
              <div className="event-description" itemProp="description">
                <p>
                  {!eDescShort
                    ? 'Description coming soon. Thank you for your patience!'
                    : eDescShort}
                </p>
              </div>
              <div className="event-footer">
                <div className="event-buttons">
                  <a
                    href={`/event:${eName.replace(/\s/g, '_')}`}
                    className="btn btn-transparent btn-icon-left js-wave"
                    itemProp="url"
                  >
                    <i className="material-icons">arrow_forward</i>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boxed flip-back">
            <div className="card-map" data-placeholder="waiting for map">
              <div
                className="google-map"
                data-map-zoom={!eLoc ? 1 : 13}
                data-map-type="roadmap"
                data-map-style="UmmaCharity"
                data-map-address={!eLoc ? 'USA' : eLoc}
                data-map-marker="images/marker.png"
                data-map-marker-size="[31,46]"
                data-map-marker-anchor="[16,46]"
              />
            </div>
            <ul className="card-social">
              <li>
                <a href={social.fb} className="fa fa-facebook js-wave" />
              </li>
              <li>
                <a href={social.tw} className="fa fa-twitter js-wave" />
              </li>
              <li>
                <a href={social.ig} className="fa fa-instagram js-wave" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
  });

export default Event;
