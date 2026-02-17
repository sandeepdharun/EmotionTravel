import { useEffect } from "react";
import type { Destination } from "@/data/destinations";

interface SEOTagsProps {
  destination: Destination;
}

export const SEOTags = ({ destination }: SEOTagsProps) => {
  useEffect(() => {
    // Set page title
    const pageTitle = `${destination.name} - ${destination.country} | Destination Details`;
    document.title = pageTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    const description = `${destination.name} in ${destination.country}: ${destination.description}`.slice(0, 155);
    
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const newMetaDesc = document.createElement("meta");
      newMetaDesc.setAttribute("name", "description");
      newMetaDesc.setAttribute("content", description);
      document.head.appendChild(newMetaDesc);
    }

    // Set canonical URL
    const canonicalHref = `${window.location.origin}/destination/${encodeURIComponent(
      destination.country,
    )}/${encodeURIComponent(destination.name)}`;
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // Add Open Graph tags for better social sharing
    const setOpenGraphTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOpenGraphTag("og:title", pageTitle);
    setOpenGraphTag("og:description", description);
    setOpenGraphTag("og:image", destination.image);
    setOpenGraphTag("og:url", canonicalHref);
    setOpenGraphTag("og:type", "website");

    // Add Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", pageTitle);
    setTwitterTag("twitter:description", description);
    setTwitterTag("twitter:image", destination.image);

  }, [destination]);

  // This component doesn't render anything
  return null;
};