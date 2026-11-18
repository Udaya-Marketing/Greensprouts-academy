"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  NORMALIZE_NAME_CASE,
  STUDENT_FEEDBACK,
  type FeedbackGender,
  type StudentFeedbackEntry,
} from "./feedback-data";
import "./stories-feedback.css";

const ROW_ONE_SPEED_SECONDS = 70;
const ROW_TWO_SPEED_SECONDS = 85;
const MOBILE_SPEED_MULTIPLIER = 1.15;
const SHOW_PLACEHOLDER_WHEN_EMPTY = true;

const AVATAR_VARIANTS: Record<FeedbackGender, string[]> = {
  female: ["female-one", "female-two", "female-three"],
  male: ["male-one"],
  neutral: ["neutral-one"],
};

function StudentAvatar({ gender, index }: { gender: string; index: number }) {
  const normalizedGender: FeedbackGender =
    gender === "female" || gender === "male" ? gender : "neutral";
  const variants = AVATAR_VARIANTS[normalizedGender];
  const symbol = variants[index % variants.length];

  return (
    <svg
      className="gs-fb-avatar"
      viewBox="0 0 56 56"
      role="img"
      aria-label={`${normalizedGender} student avatar`}
    >
      <use href={`#gs-fb-avatar-${symbol}`} />
    </svg>
  );
}

function RatingStars({ rating }: { rating: number }) {
  const safeRating = Number.isFinite(rating)
    ? Math.max(0, Math.min(5, rating))
    : 0;

  return (
    <div
      className="gs-fb-stars"
      role="img"
      aria-label={`Rated ${safeRating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, safeRating - index));
        return (
          <span
            className="gs-fb-star"
            aria-hidden="true"
            key={index}
            style={{ "--gs-fb-star-fill-percent": `${fill * 100}%` } as CSSProperties}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

function getDisplayName(name: string) {
  if (!NORMALIZE_NAME_CASE || name !== name.toUpperCase()) return name;

  return name.replace(/[^\s.]+/g, (part) =>
    part.length === 1 ? part : `${part[0]}${part.slice(1).toLowerCase()}`
  );
}

function FeedbackCard({
  entry,
  index,
}: {
  entry: StudentFeedbackEntry;
  index: number;
}) {
  const hasText = Boolean(entry.text.trim());

  return (
    <article className="gs-fb-card">
      <svg className="gs-fb-quote-mark" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5C10.8 3.2 4.5 7.4 4.1 14.1c-.2 3.6 2 6.1 5.2 6 6.6-.2 10.1-7.3 11.2-16.6Z" />
        <path className="gs-fb-leaf-vein" d="M6.5 18c3.1-4 6.5-7.4 11-10.7" />
      </svg>
      <StudentAvatar gender={entry.gender} index={index} />
      <div className="gs-fb-student">
        <h3>{getDisplayName(entry.name) || "Student"}</h3>
        {entry.course.trim() && <p>{entry.course}</p>}
      </div>
      <RatingStars rating={entry.rating} />
      <div className="gs-fb-copy">
        {hasText ? (
          <p>{entry.text}</p>
        ) : SHOW_PLACEHOLDER_WHEN_EMPTY ? (
          <div className="gs-fb-skeleton" aria-label="Feedback text coming soon">
            <span />
            <span />
            <span />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function AvatarSymbols() {
  return (
    <svg className="gs-fb-avatar-defs" aria-hidden="true">
      <symbol id="gs-fb-avatar-female-one" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-mint-tint)" />
        <path d="M12 27c0-11 6-18 16-18s16 7 16 18v12H12z" fill="var(--text-muted)" />
        <path d="M15 27c0-9 5-15 13-15s13 6 13 15v7H15z" fill="#F2C9A8" />
        <path d="M15 26c0-10 5-17 13-17s13 7 13 17c-4-1-8-4-10-8-4 5-9 7-16 8z" fill="var(--text-muted)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="var(--leaf-green)" />
        <circle cx="23" cy="29" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="29" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 2 6 2 8 0" fill="none" stroke="#B56F62" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-female-two" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-soft-green)" />
        <path d="M11 28c0-12 6-19 17-19s17 7 17 19v13H11z" fill="var(--leaf-green)" />
        <path d="M15 28c0-9 5-14 13-14s13 5 13 14v8H15z" fill="#D99D76" />
        <path d="M15 25c1-9 6-13 13-13 7 0 12 4 13 13-6 0-10-3-13-7-3 4-7 6-13 7z" fill="var(--leaf-green)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="var(--deep-leaf-green)" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 2 6 2 8 0" fill="none" stroke="#A85F55" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-female-three" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-cream)" />
        <path d="M11 27c1-11 7-18 17-18s16 7 17 18v14H11z" fill="var(--deep-leaf-green)" />
        <path d="M15 27c0-9 5-14 13-14s13 5 13 14v9H15z" fill="#E8B98D" />
        <path d="M15 25c0-9 5-14 13-14s13 5 13 14c-6 0-10-3-13-7-3 4-7 6-13 7z" fill="var(--deep-leaf-green)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="#B5DF93" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 2 6 2 8 0" fill="none" stroke="#A85F55" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-male-one" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-mint-tint)" />
        <path d="M14 26c0-10 5-16 14-16s14 6 14 16v8H14z" fill="var(--text-muted)" />
        <path d="M16 28c0-8 4-12 12-12s12 4 12 12v8H16z" fill="#D8A47F" />
        <path d="M15 24c2-9 7-14 13-14s11 5 13 14c-8-3-18-3-26 0z" fill="var(--text-muted)" />
        <path d="M12 24c9-3 23-3 32 0-4 3-10 4-16 3-6 0-12-1-16-3z" fill="var(--text-muted)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="var(--leaf-green)" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 1 6 1 8 0" fill="none" stroke="#A85F55" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-male-two" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-soft-green)" />
        <path d="M13 26c0-11 6-17 15-17s15 6 15 17v9H13z" fill="var(--leaf-green)" />
        <path d="M16 28c0-8 4-12 12-12s12 4 12 12v8H16z" fill="#A96E50" />
        <path d="M15 27 12 19l7 3-1-8 7 5 3-9 4 9 7-5-1 8 7-3-3 8-5 2H20z" fill="var(--leaf-green)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="var(--deep-leaf-green)" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 1 6 1 8 0" fill="none" stroke="#8F554B" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-male-three" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-cream)" />
        <path d="M13 27c0-11 6-17 15-17s15 6 15 17v9H13z" fill="var(--deep-leaf-green)" />
        <path d="M16 28c0-8 4-12 12-12s12 4 12 12v8H16z" fill="#E3B58F" />
        <path d="M16 25c0-8 4-13 8-14l-1-3 6 3 3-4 3 5 6-1-1 14c-5-1-8-3-11-6-3 4-7 6-13 6z" fill="var(--deep-leaf-green)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="#B5DF93" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 1 6 1 8 0" fill="none" stroke="#A85F55" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="gs-fb-avatar-neutral-one" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" fill="var(--bg-mint-tint)" />
        <path d="M13 27c0-11 6-17 15-17s15 6 15 17v9H13z" fill="var(--text-muted)" />
        <path d="M16 28c0-8 4-12 12-12s12 4 12 12v8H16z" fill="#C98F6D" />
        <path d="M16 25c1-8 5-13 12-13s11 5 12 13c-5 0-9-2-12-6-3 4-7 6-12 6z" fill="var(--text-muted)" />
        <path d="M12 55c1-10 7-15 16-15s15 5 16 15" fill="var(--leaf-green)" />
        <circle cx="23" cy="30" r="1" fill="var(--logo-charcoal)" />
        <circle cx="33" cy="30" r="1" fill="var(--logo-charcoal)" />
        <path d="M24 35c2 1 6 1 8 0" fill="none" stroke="#A85F55" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
    </svg>
  );
}

function FeedbackRow({
  entries,
  reverse = false,
  rowIndex,
  indexOffset,
  onTouchPause,
}: {
  entries: StudentFeedbackEntry[];
  reverse?: boolean;
  rowIndex: number;
  indexOffset: number;
  onTouchPause: () => void;
}) {
  return (
    <div
      className="gs-fb-row"
      tabIndex={0}
      role="group"
      aria-label={`Student feedback row ${rowIndex + 1}`}
    >
      <div className={`gs-fb-track${reverse ? " gs-fb-track-reverse" : ""}`}>
        <div className="gs-fb-set">
          {entries.map((entry, index) => (
            <div
              className="gs-fb-card-wrap"
              key={`${entry.name}-${index}`}
              onPointerDown={(event) => {
                if (event.pointerType === "touch") onTouchPause();
              }}
            >
              <FeedbackCard entry={entry} index={index + indexOffset} />
            </div>
          ))}
        </div>
        <div className="gs-fb-set" aria-hidden="true">
          {entries.map((entry, index) => (
            <div
              className="gs-fb-card-wrap"
              key={`duplicate-${entry.name}-${index}`}
            >
              <FeedbackCard entry={entry} index={index + indexOffset} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StudentFeedback() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const visibleFeedback = STUDENT_FEEDBACK.filter((entry) => entry.show !== false);
  const rowOneCount = Math.ceil(visibleFeedback.length / 2);
  const rowOne = visibleFeedback.slice(0, rowOneCount);
  const rowTwo = visibleFeedback.slice(rowOneCount);
  const rowOneSpeed = ROW_ONE_SPEED_SECONDS * (rowOne.length / 20);
  const rowTwoSpeed = ROW_TWO_SPEED_SECONDS * (rowTwo.length / 20);

  return (
    <section
      className="gs-fb-feedback"
      ref={sectionRef}
      data-visible={isVisible}
      data-touch-paused={isTouchPaused}
      aria-labelledby="gs-fb-feedback-title"
      style={
        {
          "--gs-fb-row-one-speed": `${rowOneSpeed}s`,
          "--gs-fb-row-two-speed": `${rowTwoSpeed}s`,
          "--gs-fb-row-one-mobile-speed": `${rowOneSpeed * MOBILE_SPEED_MULTIPLIER}s`,
          "--gs-fb-row-two-mobile-speed": `${rowTwoSpeed * MOBILE_SPEED_MULTIPLIER}s`,
        } as React.CSSProperties
      }
    >
      <AvatarSymbols />
      <header className="gs-fb-feedback-heading">
        <h2 id="gs-fb-feedback-title" className="gs-fb-section-title heading-headline">
          Student feedback
        </h2>
        <p className="gs-fb-section-intro">
          Kind words and experiences from learners growing with Green Sprouts Academy.
        </p>
      </header>

      <div className="gs-fb-rows" aria-label="Student feedback cards">
        <FeedbackRow
          entries={rowOne}
          indexOffset={0}
          rowIndex={0}
          onTouchPause={() => setIsTouchPaused(true)}
        />
        <FeedbackRow
          entries={rowTwo}
          indexOffset={rowOne.length}
          rowIndex={1}
          reverse
          onTouchPause={() => setIsTouchPaused(true)}
        />
      </div>
      <button
        className="gs-fb-pause-toggle"
        type="button"
        aria-pressed={isTouchPaused}
        onClick={() => setIsTouchPaused((paused) => !paused)}
      >
        {isTouchPaused ? "Resume feedback movement" : "Pause feedback movement"}
      </button>
      <p className="gs-fb-swipe-hint">
        Hover or focus to pause · Tap a card to pause
      </p>
    </section>
  );
}
