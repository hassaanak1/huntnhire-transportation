import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
};

/**
 * Sets page-level meta tags (title, description, keywords, canonical)
 * for SEO. Cleans up on unmount by restoring defaults.
 */
export function usePageMeta({ title, description, keywords, canonical }: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);

    if (keywords) {
      setMeta("keywords", keywords);
    }

    // Open Graph
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setOg("og:title", title);
    setOg("og:description", description);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    } else if (link) {
      link.remove();
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, keywords, canonical]);
}
