'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    className?: string;
    poster?: string;
}

export default function VideoPlayer({ src, className, poster }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch((error) => {
                            console.log("Auto-play was prevented:", error);
                        });
                        setIsPlaying(true);
                    } else {
                        videoRef.current?.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.5 } // Play when at least 50% of the video is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className={`relative group/player ${className}`}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                loop
                preload="metadata"
            />

            {/* Mute/Unmute Overlay */}
            <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-[var(--brand-gold)] text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                ) : (
                    <Volume2 className="w-5 h-5" />
                )}
            </button>

            {/* Optional: Indicator that it's playing/hover state */}
            <div className="absolute inset-0 bg-black/10 group-hover/player:bg-transparent transition-colors pointer-events-none" />
        </div>
    );
}
