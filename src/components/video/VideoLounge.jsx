import React from "react";
import videoLounge from "./videoviplounge.mp4";

function VideoLounge() {
  return (
    <section className="video-lounge">
      <div className="container video-lounge-inner">

        <div className="video-copy">
          <div className="eyebrow">Fasilitas Keberangkatan</div>

          <h2>VIP Lounge Bandara Sultan Hasanuddin</h2>

          <p>
            Tempat menunggu keberangkatan yang lebih nyaman, dengan fasilitas
            duduk serta makan dan minum sebelum pesawat take off.
          </p>

          <span className="video-note">
            Dokumentasi VIP Lounge Adha Tour & Travel.
          </span>
        </div>

        <div className="video-frame">
          <video
            className="video-lounge-player"
            src={videoLounge}
            controls
            playsInline
            preload="metadata"
          >
            Browser Anda tidak mendukung video.
          </video>
        </div>

      </div>
    </section>
  );
}

export default VideoLounge;