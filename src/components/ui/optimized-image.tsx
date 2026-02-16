import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string; // For the wrapper div
    imageClassName?: string; // For the img element
    priority?: boolean; // If true, sets loading="eager"
}

export const OptimizedImage = ({
    src,
    alt,
    className,
    imageClassName,
    priority = false,
    ...props
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (priority) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setError(true);
        }
    }, [src, priority]);

    return (
        <div className={cn("relative overflow-hidden bg-muted/20", className)}>
            {/* Blur Placeholder / Skeleton */}
            {!isLoaded && !error && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse dark:bg-gray-800" />
            )}

            <img
                src={error ? "/placeholder.svg" : src}
                alt={alt}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
                className={cn(
                    "h-full w-full object-cover transition-opacity duration-700 ease-in-out",
                    isLoaded ? "opacity-100" : "opacity-0",
                    imageClassName
                )}
                {...props}
            />
        </div>
    );
};
