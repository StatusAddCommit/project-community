import React from 'react';

class AboutNavMenu extends React.Component {
  render() {
    return (
      <ul
        className="nav-menu clearfix"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <li>
          <a href="#">Home</a>
          <ul>
            <li>
              <a href="index-2.html">Home Fly Slider</a>
            </li>
            <li>
              <a href="index-slider2.html">Home Classic Slider</a>
            </li>
            <li>
              <a href="index-image.html">Home Single Image</a>
            </li>
            <li>
              <a href="video-slider.html">Home Video Slider</a>
            </li>
            <li>
              <a href="video-local.html">Home Self Hosted Video</a>
            </li>
            <li>
              <a href="video-youtube.html">Home Youtube Video</a>
            </li>
            <li>
              <a href="video-vimeo.html">Home Vimeo Video</a>
            </li>
            <li>
              <a href="404.html">404 Page</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Projects</a>
          <ul>
            <li>
              <a href="projects.html">Projects Listed Style</a>
            </li>
            <li>
              <a href="projects-2cols.html">Projects 2 Columns</a>
            </li>
            <li>
              <a href="projects-3cols.html">Projects 3 Columns</a>
            </li>
            <li>
              <a href="projects-4cols.html">Projects 4 Columns</a>
            </li>
            <li>
              <a href="project-details.html">Project Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Events</a>
          <ul>
            <li>
              <a href="events-2cols.html">Events 2 Columns</a>
            </li>
            <li>
              <a href="events-3cols.html">Events 3 Columns</a>
            </li>
            <li>
              <a href="events-4cols.html">Events 4 Columns</a>
            </li>
            <li>
              <a href="event-details.html">Event Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
          <ul>
            <li>
              <a href="blog.html">Without Sidebar</a>
            </li>
            <li>
              <a href="blog-wide.html">Wide Version</a>
            </li>
            <li>
              <a href="blog-sidebar.html">Right Sidebar</a>
            </li>
            <li>
              <a href="blog-sidebar-left.html">Left Sidebar</a>
            </li>
            <li>
              <a href="blog-2cols.html">2 Columns</a>
            </li>
            <li>
              <a href="blog-3cols.html">3 Columns</a>
            </li>
            <li>
              <a href="blog-4cols.html">4 Columns</a>
            </li>
            <li>
              <a href="blog-details.html">Blog Details</a>
            </li>
          </ul>
        </li>
        <li className="current-menu-item">
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        {}
      </ul>
    );
  }
}

export default AboutNavMenu;