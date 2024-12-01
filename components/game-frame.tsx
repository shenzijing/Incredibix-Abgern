"use client";

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';
import { ShareButtons } from './share-buttons';
import { PlayButtonOverlay } from './play-button-overlay';

export function GameFrame() {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2 mb-2">
        <span className="text-sm text-muted-foreground">
          Want a bigger view? Try fullscreen mode
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleFullscreen}
          className="flex items-center gap-2"
        >
          <Maximize2 className="h-4 w-4" />
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </Button>
      </div>
      <Card className="relative overflow-hidden rounded-lg shadow-xl">
        <div ref={containerRef} className="aspect-video relative">
          {!isLoaded ? (
            <PlayButtonOverlay onPlay={() => setIsLoaded(true)} />
          ) : (
            <iframe
              src="https://iframegame.com/embed/incredibox-abgerny/index.html"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              loading="lazy"
            />
          )}
        </div>
      </Card>
      <ShareButtons />
    </div>
  );
}