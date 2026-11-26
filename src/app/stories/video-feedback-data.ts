export type VideoOrientation = "horizontal" | "vertical";

export interface VideoFeedbackEntry {
  name: string;
  course: string;
  orientation: VideoOrientation;
  src: string;
  youtubeId: string;
  vimeoId: string;
  poster: string;
}

export const VIDEO_FEEDBACK: VideoFeedbackEntry[] = [
  { name: "Student 01", course: "Hydroponics", orientation: "vertical", src: "/videos/feedback-video-1.mp4", youtubeId: "", vimeoId: "", poster: "/images/gallery/IMG_0581.webp" },
  { name: "Student 02", course: "Microgreens", orientation: "vertical", src: "/videos/feedback-video-2.mp4", youtubeId: "", vimeoId: "", poster: "/images/gallery/IMG_0603.webp" },
  { name: "Student 03", course: "Microgreens", orientation: "vertical", src: "/videos/feedback-video-3.mp4", youtubeId: "", vimeoId: "", poster: "/images/gallery/IMG_0563.webp" },
  // { name: "Sample Student 04", course: "Hydroponics", orientation: "vertical", src: "", youtubeId: "", vimeoId: "", poster: "" },
  // { name: "Sample Student 05", course: "Microgreens", orientation: "horizontal", src: "", youtubeId: "", vimeoId: "", poster: "" },
  // { name: "Sample Student 06", course: "Mushroom Cultivation", orientation: "horizontal", src: "", youtubeId: "", vimeoId: "", poster: "" },
];
