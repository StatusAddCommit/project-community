import React from 'react';
import PropTypes from 'prop-types';

const DetailsInfoBox = ({ event }) => {
  const eUrl = event[1];
  const eLoc = event[3] && event[3];
  const eDate = event[4];
  const eDescShort = event[5];

  return (
    <article
      className="fly-card fly-event fly-flip-effect vertical"
      itemScope
      itemType="http://schema.org/Event"
    >
      <div className="boxed flip-front">
        <div className="event-content">
          <h3 className="event-title" itemProp="name">
            <a href={eUrl && eUrl}>Event Info at a Glance</a>
          </h3>
          <ul className="event-location">
            <li>
              <div className="label">Location:</div>
              <button
                type="button"
                className={!eLoc ? '' : 'flip-button'}
                itemProp="location"
              >
                <i className="material-icons">location_on</i>
                {!eLoc ? 'Event location coming soon!' : eLoc}
              </button>
            </li>
            <li>
              <div className="label">Date:</div>
              <time
                className="event-date"
                dateTime={!eDate ? null : eDate}
                itemProp="startDate"
              >
                <i className="material-icons">query_builder</i>
                {!eDate ? 'TBD' : eDate}
              </time>
            </li>
          </ul>
          <div className="event-description" itemProp="description">
            <p>
              {!eDescShort
                ? 'Description coming soon. Thank you for your patience!'
                : eDescShort}
            </p>
          </div>
        </div>
      </div>
      {eLoc && (
        <div className="boxed flip-back">
          <div className="card-map" data-placeholder="waiting for map">
            <div
              className="google-map"
              data-map-zoom={13}
              data-map-type="roadmap"
              data-map-style="UmmaCharity"
              data-map-address={eLoc}
              data-map-marker="images/marker.png"
              data-map-marker-size="[31,46]"
              data-map-marker-anchor="[16,46]"
            />
          </div>
        </div>
      )}
    </article>
  );
};

DetailsInfoBox.propTypes = {
  event: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsInfoBox;
