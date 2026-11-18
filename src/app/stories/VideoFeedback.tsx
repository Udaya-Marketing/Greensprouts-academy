"use client";

import { useState } from "react";
import Image from "next/image";
import { VIDEO_FEEDBACK } from "./video-feedback-data";
import "./stories-feedback.css";

export default function VideoFeedback() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [audibleIndex, setAudibleIndex] = useState<number | null>(null);

  return (
    <section className="gs-fb-video-section" aria-labelledby="gs-fb-video-title">
      <header className="gs-fb-video-heading">
        <h2
          id="gs-fb-video-title"
          className="gs-fb-section-title heading-headline"
        >
          Hear it from our students
        </h2>
        <p className="gs-fb-section-intro" data-reveal="none">
          A few words from the growers learning and building with us.
        </p>
      </header>

      <div className="gs-fb-video-grid">
        {VIDEO_FEEDBACK.map((video, index) => {
          const hasSource = Boolean(video.src || video.youtubeId || video.vimeoId);
          const isActive = activeIndex === index && hasSource;
          const isAudible = audibleIndex === index;
          const toggleAudio = () =>
            setAudibleIndex((currentIndex) =>
              currentIndex === index ? null : index
            );

          return (
            <article
              className="gs-fb-video-card"
              data-orientation={video.orientation}
              key={`${video.name}-${index}`}
            >
              <div className="gs-fb-video-media">
                {video.src ? (
                  <>
                    <video
                      className="gs-fb-video-player"
                      src={video.src}
                      poster={video.poster || undefined}
                      controls={false}
                      disablePictureInPicture
                      autoPlay
                      muted={!isAudible}
                      loop
                      playsInline
                      preload="auto"
                      role="button"
                      tabIndex={0}
                      aria-label={`${video.name} feedback video, ${isAudible ? "playing with sound" : "playing muted"}. Activate to ${isAudible ? "mute" : "hear"} sound.`}
                      aria-pressed={isAudible}
                      onClick={toggleAudio}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          toggleAudio();
                        }
                      }}
                    />
                    <button
                      className="gs-fb-video-sound"
                      type="button"
                      aria-label={isAudible ? "Mute video audio" : "Unmute video audio"}
                      aria-pressed={isAudible}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleAudio();
                      }}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 9v6h4l5 4V5L8 9H4z" />
                        {isAudible ? (
                          <>
                            <path d="M16 9a5 5 0 0 1 0 6" />
                            <path d="M19 6a9 9 0 0 1 0 12" />
                          </>
                        ) : (
                          <>
                            <path d="m17 9 5 6" />
                            <path d="m22 9-5 6" />
                          </>
                        )}
                      </svg>
                      <span>{isAudible ? "Mute audio" : "Unmute audio"}</span>
                    </button>
                  </>
                ) : isActive && video.youtubeId ? (
                  <iframe
                    className="gs-fb-video-player"
                    src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtubeId)}?autoplay=1&rel=0`}
                    title={`${video.name} sharing feedback`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : isActive && video.vimeoId ? (
                  <iframe
                    className="gs-fb-video-player"
                    src={`https://player.vimeo.com/video/${encodeURIComponent(video.vimeoId)}?autoplay=1`}
                    title={`${video.name} sharing feedback`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {video.poster ? (
                      <Image
                        className="gs-fb-video-poster"
                        src={video.poster}
                        alt=""
                        width={320}
                        height={180}
                        unoptimized
                      />
                    ) : (
                      <svg
                        className="gs-fb-video-art"
                        viewBox="0 0 320 180"
                        aria-hidden="true"
                      >
                        <path d="M92 124c3-37 25-63 65-77 3 35-8 65-37 84" />
                        <path d="M160 137c-2-29 12-55 45-73 7 28-1 52-24 70" />
                        <path d="M80 138h164" />
                      </svg>
                    )}
                    {hasSource ? (
                      <button
                        className="gs-fb-video-play"
                        type="button"
                        aria-label={`Play ${video.name}'s feedback video`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5.5v13l10-6.5z" />
                        </svg>
                      </button>
                    ) : (
                      <span className="gs-fb-video-coming">Video coming soon</span>
                    )}
                  </>
                )}
                {isActive && !video.src && (
                  <button
                    className="gs-fb-video-close"
                    type="button"
                    aria-label="Stop video"
                    onClick={() => setActiveIndex(null)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                )}
              </div>
              <div className="gs-fb-video-caption">
                <h3>{video.name}</h3>
                <p>{video.course}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
