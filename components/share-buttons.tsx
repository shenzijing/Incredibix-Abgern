"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Share2 } from 'lucide-react';
import { TwitterIcon, DiscordIcon, WhatsAppIcon } from './icons';

export function ShareButtons() {
  const [mounted, setMounted] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  if (!mounted) {
    return null;
  }

  const shareUrl = window.location.href;
  const shareText = 'Check out Incredibox Abgerny - Create amazing beats!';

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank'
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      '_blank'
    );
  };

  const shareOnDiscord = () => {
    const fullText = `${shareText}\n${shareUrl}`;
    navigator.clipboard.writeText(fullText).then(() => {
      alert('Link copied! Now you can paste it in Discord.');
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = fullText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Link copied! Now you can paste it in Discord.');
    });
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Incredibox Abgerny',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg font-semibold">Share with friends</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          onClick={shareOnTwitter}
          className="flex items-center gap-2 min-w-[120px]"
        >
          <TwitterIcon className="h-4 w-4" />
          X (Twitter)
        </Button>

        <Button
          variant="outline"
          onClick={shareOnFacebook}
          className="flex items-center gap-2 min-w-[120px]"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>

        <Button
          variant="outline"
          onClick={shareOnWhatsApp}
          className="flex items-center gap-2 min-w-[120px]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </Button>

        <Button
          variant="outline"
          onClick={shareOnDiscord}
          className="flex items-center gap-2 min-w-[120px]"
        >
          <DiscordIcon className="h-4 w-4" />
          Discord
        </Button>

        {canShare && (
          <Button
            variant="outline"
            onClick={shareNative}
            className="flex items-center gap-2 min-w-[120px]"
          >
            <Share2 className="h-4 w-4" />
            More Options
          </Button>
        )}
      </div>
    </div>
  );
}