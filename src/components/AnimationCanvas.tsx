import { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import GifGenerator from './GifGenerator';

interface AnimationProps {
  imageUrl: string;
  type: string;
  speed: number;
}

const AnimationCanvas = ({ imageUrl, type, speed }: AnimationProps) => {
  const { t } = useLocale();
  const [gifUrl, setGifUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGifComplete = (url: string) => {
    setGifUrl(url);
    setIsGenerating(false);
  };

  return (
    <div className="animation-container">
      {!gifUrl ? (
        <div className="animation-placeholder">
          {isGenerating ? t('generating_gif') : t('animation_placeholder')}
        </div>
      ) : (
        <img src={gifUrl} alt="Generated animation" className="generated-gif" />
      )}

      <GifGenerator
        imageUrl={imageUrl}
        type={type}
        speed={speed}
        onComplete={handleGifComplete}
      />

      {gifUrl && (
        <div className="download-section">
          <a href={gifUrl} download="animated-emoji.gif" className="download-button">
            {t('download_button')}
          </a>
        </div>
      )}
    </div>
  );
};

export default AnimationCanvas;