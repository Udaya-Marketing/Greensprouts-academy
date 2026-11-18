"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely in browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ==========================================================================
   MOTION CONFIGURATION BLOCK
   Customize animation timing, stagger, easing, and trigger positions globally.
   ========================================================================== */
export const REVEAL_CONFIG = {
  // Global Easing & Trigger
  ease: "power3.out", // Smooth, gentle deceleration without bounce
  triggerStart: "top 88%", // Triggers when the element reaches 88% of viewport height (near scroll cursor)
  triggerStartMobile: "top 90%",
  once: true, // Animations play ONCE and never hide content on scroll-up

  // 1. Headlines (h1, h2, h3, h4, display text in Gilton Light / Cormorant)
  headlineDuration: 0.8,
  headlineY: 36, // translateY 36px (down) to 0 (up)
  headlineYMobile: 22,

  // 2. Paragraphs & Body Copy (SF Marilis Book / Manrope)
  paragraphDuration: 0.7,
  paragraphY: 24, // translateY 24px (down) to 0 (up)
  paragraphYMobile: 16,

  // 3. Small Labels, Eyebrows & Badges ("SEED TO SUCCESS", tags, pills)
  labelDuration: 0.55,
  labelY: 16,
  labelYMobile: 12,

  // 4. Numbers & Stats Count-up (₹999, ₹1,499, 3–5 Days, 10+ Years)
  countDuration: 1.2,

  // 5. Buttons & Action Links
  buttonDuration: 0.6,
  buttonY: 18,
  buttonYMobile: 14,

  // 6. Lists (pricing features, starter kit items, FAQ rows)
  listDuration: 0.55,
  listStagger: 0.05,
  listY: 18,

  // 7. Cards & Content Containers
  cardDuration: 0.75,
  cardY: 32,
  cardYMobile: 20,

  // 8. Images
  imageDuration: 0.85,
  imageY: 24,

  // 9. Safety Fallback Timeout (forces all content visible if script hangs)
  safetyTimeoutMs: 800,

  // 10. Mobile Breakpoint
  mobileBreakpoint: 768,
};

/* ==========================================================================
   HELPER UTILITIES
   ========================================================================== */

/** Check if reduced motion is requested */
function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Check if on a mobile or low-power device */
function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < REVEAL_CONFIG.mobileBreakpoint;
}

/** Check if an element should be excluded from scroll reveal mutations */
function isExcluded(el: Element): boolean {
  return (
    !el.isConnected ||
    !!el.closest("header") ||
    !!el.closest("#top-announcement") ||
    !!el.closest("#floating-whatsapp") ||
    !!el.closest("[role='dialog']") ||
    !!el.closest(".no-reveal") ||
    !!el.closest("[data-reveal='none']") ||
    !!el.closest("#scroll-experience-section") ||
    el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT" ||
    el.tagName === "OPTION"
  );
}

/** Parse numeric stats or currency and count-up smoothly */
function setupNumberCountUp(el: HTMLElement) {
  if (!el || !el.isConnected) return;

  // Store the canonical final text on the element the first time (before animation mutates it)
  // so onComplete always has access to the exact original value even after re-renders.
  const originalText = (el.dataset.countTarget ??= el.textContent?.trim() ?? "");
  if (!originalText) return;

  // Matches: ₹999, ₹1,499, 90%, 10+, 500+ — leading currency/symbol, digits, optional suffix
  // Intentionally does NOT match non-numeric text like "3–5 Days", "B.Sc / B.E", "3 Nations"
  const match = originalText.match(/^(₹|\$|€|£)?(\d[\d,]*)(\+|%)?$/);
  if (!match) return;

  const prefix = match[1] || "";
  const rawNumStr = match[2].replace(/,/g, "");
  const targetNum = parseFloat(rawNumStr);
  const suffix = match[3] || "";

  if (isNaN(targetNum) || targetNum <= 0) return;

  // Kill any previous countup animation on this exact element before starting a new one
  gsap.killTweensOf(el);

  const counter = { val: 0 };
  gsap.to(counter, {
    val: targetNum,
    duration: REVEAL_CONFIG.countDuration,
    ease: "power2.out",
    // snap: force integer steps — no floating-point flicker on any frame
    snap: { val: 1 },
    overwrite: true,
    onUpdate: () => {
      if (!el.isConnected) return;
      el.textContent = `${prefix}${counter.val.toLocaleString("en-IN")}${suffix}`;
    },
    onComplete: () => {
      if (!el.isConnected) return;
      // Always write the exact original text as the final value — guaranteed correct
      el.textContent = originalText;
    },
  });
}

/* ==========================================================================
   MAIN REVEAL ENGINE
   ========================================================================== */

let safetyTimer: ReturnType<typeof setTimeout> | null = null;
let activeTriggers: ScrollTrigger[] = [];
let currentRunId = 0;

/** Force all elements fully visible in case of error or timeout */
export function forceAllVisible() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("reveal-fallback");
  const hiddenElements = document.querySelectorAll<HTMLElement>(
    "h1, h2, h3, h4, p, span, div, img, button, a, li, .card-fresh"
  );
  hiddenElements.forEach((el) => {
    if (el.style.opacity === "0" || el.style.visibility === "hidden") {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.visibility = "visible";
    }
  });
}

/** Initialize the Motion Reveal System across all pages & sections */
export async function initRevealSystem(scopeElement?: HTMLElement) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Track invocation runId to abort stale async calls if route changes rapidly
  const runId = ++currentRunId;

  // 1. Reduced Motion Accessibility Check
  if (isReducedMotion()) {
    forceAllVisible();
    return;
  }

  // 2. Mark HTML as JS-Reveal active
  document.documentElement.classList.add("js-reveal");
  document.documentElement.classList.remove("reveal-fallback");

  // 3. Safety Fallback Timeout (3.5s safety net)
  if (safetyTimer) clearTimeout(safetyTimer);
  safetyTimer = setTimeout(() => {
    forceAllVisible();
  }, REVEAL_CONFIG.safetyTimeoutMs);

  // 4. Wait for custom web fonts — but only briefly; don't let font loading
  //    block the entire reveal system and leave content invisible for seconds.
  if (document.fonts && document.fonts.ready) {
    try {
      // Race against a 400ms timeout so font loading never blocks reveals
      await Promise.race([
        document.fonts.ready,
        new Promise<void>((resolve) => setTimeout(resolve, 400)),
      ]);
    } catch {
      // Continue even if font metric measurement fails
    }
  }

  // If route changed while waiting for fonts, cancel stale execution immediately
  if (runId !== currentRunId) return;

  const root = scopeElement || document.body;

  // Kill previous triggers safely without triggering faulty style reverts on unmounted nodes
  try {
    ScrollTrigger.getAll().forEach((t) => {
      try {
        t.kill(false);
      } catch {}
    });
  } catch {}
  activeTriggers = [];

  const isMobile = isMobileDevice();
  const triggerStart = isMobile ? REVEAL_CONFIG.triggerStartMobile : REVEAL_CONFIG.triggerStart;
  const headlineY = isMobile ? REVEAL_CONFIG.headlineYMobile : REVEAL_CONFIG.headlineY;
  const paragraphY = isMobile ? REVEAL_CONFIG.paragraphYMobile : REVEAL_CONFIG.paragraphY;
  const labelY = isMobile ? REVEAL_CONFIG.labelYMobile : REVEAL_CONFIG.labelY;
  const buttonY = isMobile ? REVEAL_CONFIG.buttonYMobile : REVEAL_CONFIG.buttonY;
  const cardY = isMobile ? REVEAL_CONFIG.cardYMobile : REVEAL_CONFIG.cardY;
  const imageY = isMobile ? 16 : REVEAL_CONFIG.imageY;

  // Set to keep track of elements already assigned to an animation
  const animatedElements = new Set<HTMLElement>();

  try {
    /* ------------------------------------------------------------------------
       1. INTRO / SECTION HEADER BLOCKS
       Choreograph badge -> headline -> paragraph -> CTA button as a staggered unit.
       ------------------------------------------------------------------------ */
    const headerContainers = root.querySelectorAll<HTMLElement>(
      "main .text-center, main header, main [class*='max-w-3xl'][class*='mx-auto'], main [class*='max-w-2xl'][class*='mx-auto'], main [class*='max-w-4xl'][class*='mx-auto']"
    );

    headerContainers.forEach((container) => {
      try {
        if (isExcluded(container) || animatedElements.has(container)) return;

        // Check if this container contains at least one heading
        const headings = container.querySelectorAll<HTMLElement>(
          "h1, h2, h3, h4, .heading-headline, .font-heading"
        );
        if (headings.length === 0) return;

        const badges = container.querySelectorAll<HTMLElement>(
          ".eyebrow, .font-eyebrow, .badge-pill, [data-reveal='fade']"
        );
        const paragraphs = container.querySelectorAll<HTMLElement>(
          "p:not(.eyebrow):not([data-reveal='none']):not(button p):not(a p)"
        );
        const buttons = container.querySelectorAll<HTMLElement>(
          ".btn-primary:not(header *), .btn-secondary:not(header *), a.link-expert"
        );

        // Create timeline first, attach ScrollTrigger AFTER tweens are added so duration is known
        const tl = gsap.timeline();
        let offset = 0;

    // A. Badge / Eyebrow (slides up from down)
    if (badges.length > 0) {
      tl.fromTo(
        badges,
        { y: labelY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: REVEAL_CONFIG.labelDuration,
          stagger: 0.04,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        offset
      );
      badges.forEach((b) => animatedElements.add(b));
      offset += 0.06;
    }

    // B. Heading (slides up from down)
    if (headings.length > 0) {
      tl.fromTo(
        headings,
        { y: headlineY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: REVEAL_CONFIG.headlineDuration,
          stagger: 0.08,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        offset
      );
      headings.forEach((h) => animatedElements.add(h));
      offset += 0.08;
    }

    // C. Paragraph / Subtitle (slides up from down)
    if (paragraphs.length > 0) {
      tl.fromTo(
        paragraphs,
        { y: paragraphY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: REVEAL_CONFIG.paragraphDuration,
          stagger: 0.05,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        offset
      );
      paragraphs.forEach((p) => animatedElements.add(p));
      offset += 0.08;
    }

    // D. Action Buttons (slides up from down)
    if (buttons.length > 0) {
      tl.fromTo(
        buttons,
        { y: buttonY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: REVEAL_CONFIG.buttonDuration,
          stagger: 0.06,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        offset
      );
      buttons.forEach((btn) => animatedElements.add(btn));
    }

        if (tl.getChildren().length > 0) {
          try {
            const st = ScrollTrigger.create({
              trigger: container,
              start: triggerStart,
              once: REVEAL_CONFIG.once,
              animation: tl,
            });
            activeTriggers.push(st);
          } catch {}
        }

        animatedElements.add(container);
      } catch {}
    });

  /* ------------------------------------------------------------------------
     2. CARDS & GRID ITEMS
     Each card smoothly slides up from down as the user scrolls to it.
     Direct gsap.fromTo with scrollTrigger ensures full lifecycle safety.
     ------------------------------------------------------------------------ */
  const cardCandidates = root.querySelectorAll<HTMLElement>(
    "main .card-fresh, main article, main [class*='rounded-3xl'][class*='p-'], main [class*='rounded-2xl'][class*='p-'], main [class*='bg-white'][class*='rounded-3xl'], main [class*='bg-white'][class*='rounded-2xl']"
  );

  cardCandidates.forEach((card) => {
    try {
      if (isExcluded(card) || animatedElements.has(card)) return;

      // Check if parent card is already candidate to avoid double-wrapping
      const parentCard = card.parentElement?.closest<HTMLElement>(
        ".card-fresh, article, [class*='rounded-3xl'][class*='p-'], [class*='rounded-2xl'][class*='p-']"
      );
      if (parentCard && animatedElements.has(parentCard)) return;

      const numbers = card.querySelectorAll<HTMLElement>(".font-num, [data-reveal='count']");

      const tween = gsap.fromTo(
        card,
        { y: cardY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: REVEAL_CONFIG.cardDuration,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
          onComplete: () => {
            // Fire number countup AFTER card is fully visible so the animation is actually seen
            numbers.forEach((num) => setupNumberCountUp(num));
          },
          scrollTrigger: {
            trigger: card,
            start: triggerStart,
            once: REVEAL_CONFIG.once,
          },
        }
      );

      if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
      animatedElements.add(card);

      // Mark internal headings and paragraphs as animated
      card.querySelectorAll<HTMLElement>("h1, h2, h3, h4, p, span.badge-pill, .btn-primary, .btn-secondary").forEach((child) => {
        animatedElements.add(child);
      });
    } catch {}
  });

  /* ------------------------------------------------------------------------
     3. LISTS & FEATURE CHECKLISTS
     Slide up list items smoothly with light stagger.
     ------------------------------------------------------------------------ */
  const listContainers = root.querySelectorAll<HTMLElement>(
    "main ul:not(nav ul):not(header ul):not([role='dialog'] ul)"
  );

  listContainers.forEach((ul) => {
    if (isExcluded(ul) || animatedElements.has(ul)) return;

    const items = ul.querySelectorAll<HTMLElement>(":scope > li");
    if (items.length === 0 || items.length > 20) return;

    const tween = gsap.fromTo(
      items,
      { y: REVEAL_CONFIG.listY, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: REVEAL_CONFIG.listDuration,
        stagger: REVEAL_CONFIG.listStagger,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,willChange",
        scrollTrigger: {
          trigger: ul,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(ul);
    items.forEach((li) => animatedElements.add(li));
  });

  /* ------------------------------------------------------------------------
     4. STANDALONE HEADINGS
     Any remaining headings slide up from down when reaching scroll cursor.
     ------------------------------------------------------------------------ */
  const remainingHeadings = root.querySelectorAll<HTMLElement>(
    "main h1, main h2, main h3, main h4, main .heading-headline, main .font-heading"
  );

  remainingHeadings.forEach((hl) => {
    if (isExcluded(hl) || animatedElements.has(hl)) return;

    const tween = gsap.fromTo(
      hl,
      { y: headlineY, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: REVEAL_CONFIG.headlineDuration,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,willChange",
        scrollTrigger: {
          trigger: hl,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(hl);
  });

  /* ------------------------------------------------------------------------
     5. STANDALONE PARAGRAPHS & BODY COPY
     All remaining text paragraphs slide up from down.
     ------------------------------------------------------------------------ */
  const remainingParagraphs = root.querySelectorAll<HTMLElement>(
    "main p:not(.eyebrow):not([data-reveal='none']):not(button p):not(a p)"
  );

  remainingParagraphs.forEach((p) => {
    if (isExcluded(p) || animatedElements.has(p)) return;

    const tween = gsap.fromTo(
      p,
      { y: paragraphY, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: REVEAL_CONFIG.paragraphDuration,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,willChange",
        scrollTrigger: {
          trigger: p,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(p);
  });

  /* ------------------------------------------------------------------------
     6. STANDALONE ACTION BUTTONS & LINKS
     ------------------------------------------------------------------------ */
  const remainingButtons = root.querySelectorAll<HTMLElement>(
    "main .btn-primary:not(header *), main .btn-secondary:not(header *), main a.link-expert"
  );

  remainingButtons.forEach((btn) => {
    if (isExcluded(btn) || animatedElements.has(btn)) return;

    const tween = gsap.fromTo(
      btn,
      { y: buttonY, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: REVEAL_CONFIG.buttonDuration,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,willChange",
        scrollTrigger: {
          trigger: btn,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(btn);
  });

  /* ------------------------------------------------------------------------
     7. NUMBERS & STATS COUNTERS OUTSIDE CARDS
     ------------------------------------------------------------------------ */
  const remainingNumbers = root.querySelectorAll<HTMLElement>(
    "main .font-num, main [data-reveal='count']"
  );

  remainingNumbers.forEach((num) => {
    if (isExcluded(num) || animatedElements.has(num)) return;

    const tween = gsap.fromTo(
      num,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,willChange",
        onComplete: () => {
          // Fire countup AFTER the number is fully visible
          setupNumberCountUp(num);
        },
        scrollTrigger: {
          trigger: num,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(num);
  });

  /* ------------------------------------------------------------------------
     8. IMAGES & SHOWCASE TILES
     Slide up gently from down with subtle settle scale (1.05 to 1.0).
     ------------------------------------------------------------------------ */
  const images = root.querySelectorAll<HTMLImageElement>(
    "main img:not(header img):not(#top-announcement img):not([role='dialog'] img):not([data-reveal='none'])"
  );

  images.forEach((img) => {
    if (isExcluded(img) || animatedElements.has(img)) return;
    // Exclude tiny inline icons
    if (img.width > 0 && img.width < 40) return;

    const tween = gsap.fromTo(
      img,
      { y: imageY, opacity: 0, scale: 1.05 },
      {
        y: 0,
        opacity: 1,
        scale: 1.0,
        duration: REVEAL_CONFIG.imageDuration,
        ease: REVEAL_CONFIG.ease,
        clearProps: "transform,opacity,scale,willChange",
        scrollTrigger: {
          trigger: img,
          start: triggerStart,
          once: REVEAL_CONFIG.once,
        },
      }
    );

    if (tween.scrollTrigger) activeTriggers.push(tween.scrollTrigger);
    animatedElements.add(img);
  });

  /* ------------------------------------------------------------------------
     9. FOOTER CHOREOGRAPHY
     Footer mission card, 5 columns, and copyright bar slide up from down.
     ------------------------------------------------------------------------ */
  const footer = root.querySelector<HTMLElement>("footer");
  if (footer && !animatedElements.has(footer) && footer.isConnected) {
    const footerCard = footer.querySelector<HTMLElement>(".bg-white.rounded-3xl");
    const footerColumns = footer.querySelectorAll<HTMLElement>(".grid > div");
    const footerBottom = footer.querySelector<HTMLElement>(".border-b, .border-t, .text-center");

    const footerTl = gsap.timeline();

    if (footerCard) {
      footerTl.fromTo(
        footerCard,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        0
      );
    }

    if (footerColumns.length > 0) {
      footerTl.fromTo(
        footerColumns,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        0.12
      );
    }

    if (footerBottom) {
      footerTl.fromTo(
        footerBottom,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: REVEAL_CONFIG.ease,
          clearProps: "transform,opacity,willChange",
        },
        0.28
      );
    }

    if (footerTl.getChildren().length > 0) {
      try {
        const st = ScrollTrigger.create({
          trigger: footer,
          start: "top 92%",
          once: REVEAL_CONFIG.once,
          animation: footerTl,
        });
        activeTriggers.push(st);
      } catch {}
    }

    animatedElements.add(footer);
  }

  // 10. Clear safety timer if successfully initialized
  if (safetyTimer) {
    clearTimeout(safetyTimer);
    safetyTimer = null;
  }

  // 11. Refresh ScrollTrigger calculations
  try {
    ScrollTrigger.refresh();
  } catch {}

  // Listen for lazy-loading images to ensure triggers update if image loads expand height
  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", () => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, { once: true });
    }
  });
  } catch (err) {
    console.warn("RevealEngine initialization warning:", err);
    forceAllVisible();
  }
}

/** Cleanup all reveal animations on route changes */
export function cleanupRevealSystem() {
  if (typeof window === "undefined") return;
  currentRunId++; // Invalidate any running async operations
  try {
    ScrollTrigger.getAll().forEach((t) => {
      try {
        t.kill(false);
      } catch {}
    });
  } catch {}
  activeTriggers = [];
}
