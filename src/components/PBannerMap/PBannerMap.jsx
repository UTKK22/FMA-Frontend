import React, { useEffect } from "react";
import L from "leaflet"; // Leaflet library
import "leaflet/dist/leaflet.css"; // Leaflet styles
import styles from "../PBannerMap/PBannerMap.module.css";

function PBannerMap() {
  useEffect(() => {
    const map = L.map("map").setView([51.5074, -0.1278], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([51.5069, 0.2704])
      .addTo(map)
      .bindPopup("McDonald's <br>South London")
      .openPopup();
      return () => {
        map.remove(); // Cleanup the map on unmount
      };
  }, []);

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
      <div className={styles.display}>
        <div>
          <p className={styles.mc}>
            McDonald’s <br /> <span>South London</span>
          </p>
          <p>
            <p>Tooley St, London Bridge, London SE1 2TF,<br/>United Kingdom</p><br/>
              Phonenumber<br/>
              <span>+934443-43 </span>
              <br/>Website <br/>
              <span>http://mcdonalds.uk/ </span> 
          </p>
        </div>
      </div>
    </div>
  );
}
export default PBannerMap;