"use client";

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface PlayButtonOverlayProps {
    onPlay: () => void;
}

export function PlayButtonOverlay({ onPlay }: PlayButtonOverlayProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
                <Image
                    src="/start_game.png"
                    alt="Start Game Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                        size="lg"
                        onClick={onPlay}
                        className="flex items-center gap-2 text-xl px-8 py-6 bg-primary/90 hover:bg-primary transition-colors"
                    >
                        <Play className="h-8 w-8" />
                        Play Game
                    </Button>
                </div>
            </div>
        </div>
    );
}