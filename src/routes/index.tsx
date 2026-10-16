import { createFileRoute } from "@tanstack/react-router";
import html from "../site/smart.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMART Property & Facility Services" },
      { name: "description", content: "Integrated project management and facility services across India." },
      { property: "og:title", content: "SMART Property & Facility Services" },
      { property: "og:description", content: "Spaces that work better." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe srcDoc={html} title="SMART website" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }} />;
}
