"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';
import { ShareButtons } from './share-buttons';

export function GameFrame() {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
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
      <Card className="relative overflow-hidden rounded-lg shadow-xl">
        <div className="aspect-video relative">
          <iframe
            src="https://iframegame.com/embed/incredibox-abgerny/index.html"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            loading="lazy"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 opacity-80 hover:opacity-100"
            onClick={toggleFullscreen}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </Card>
      <ShareButtons />
    </div>
  );
}