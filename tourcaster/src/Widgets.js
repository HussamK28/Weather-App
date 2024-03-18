import React from 'react';
import './widgets.css'; // Import your CSS file

const DesktopPage = () => {
  return (
    <html xmlns="http://www.w3.org/1999/xhtml" xmlLang="en" lang="en">
      <head>
        <meta httpEquiv="content-type" content="text/html" charSet="utf-8" />
        <title>desktop___1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        {/* Include your custom HEAD content here */}
      </head>
      <body>
        <div id="content-container">
          <div name="Desktop - 1" id="_bg__desktop___1"></div>
          <div name="Sunset" id="sunset">
            Sunset
          </div>
          <div name="The apparent descent of the sun" id="__the_apparent_descent_of_the_sun">
            <span className="char"> T</span>he apparent descent of the sun
          </div>
          <div name="Sunset Time:" id="sunset_time_">
            Sunset Time:
          </div>
          <div name="Remaining Daylight:" id="remaining_daylight_">
            Remaining Daylight:
          </div>
          <img src="arrow_2.png" alt="Arrow 2" name="Arrow 2" id="arrow_2" />
          <img src="line_2.png" alt="Line 2" name="Line 2" id="line_2" />

          <div id="_32_partly_cloudy" name="32/Partly-cloudy" component="true">
            <div name="32/Partly-cloudy" id="_bg___32_partly_cloudy_ek1"></div>

            <img src="outline.png" alt="Outline" name="outline" id="outline" />
          </div>
          <div name="below the horizon." id="below_the_horizon_">
            below the horizon
            <img src="line_2.png" alt="Line 2" name="Line 2" id="line_2" />
          </div>

          <div id="frame_12" name="Frame 12">
            <div name="Frame 12" id="_bg__frame_12_ek1"></div>
          </div>
        </div>
        <script>
          {`
            var specialChars = document.querySelectorAll("span.char"); 
            for(var c=0; c<specialChars.length; c++){ 
              specialChars[c].innerHTML = decodeURIComponent(specialChars[c].innerHTML); 
            }
          `}
        </script>
      </body>
    </html>
  );
};

export default DesktopPage;
