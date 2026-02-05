import Gif from 'gif.js';
import { useEffect, useRef } from 'react';

interface GifGeneratorProps {
  imageUrl: string;
  type: string;
  speed: number;
  onComplete: (gifUrl: string) => void;
}

const GifGenerator = ({ imageUrl, type, speed, onComplete }: GifGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      // Устанавливаем размеры canvas
      canvas.width = img.width;
      canvas.height = img.height;
      
      generateGif(ctx, img, type, speed);
    };
  }, [imageUrl, type, speed]);

  const generateGif = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, type: string, speed: number) => {
    // Создаем экземпляр gif.js
    const gif = new Gif({
      workers: 2,
      quality: 10,
      width: img.width,
      height: img.height,
      workerScript: '/assets/gif.worker.js' // Путь к воркеру
    });

    // Определяем количество кадров в зависимости от типа анимации
    const frameCount = 30; // Для примера, 30 кадров
    
    // Генерируем кадры в зависимости от типа анимации
    for (let i = 0; i < frameCount; i++) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      // Применяем трансформации в зависимости от типа анимации
      switch(type) {
        case 'rotate':
          applyRotationFrame(ctx, img, i, frameCount);
          break;
        case 'blink':
          applyBlinkFrame(ctx, img, i, frameCount);
          break;
        case 'pulse':
          applyPulseFrame(ctx, img, i, frameCount);
          break;
        case 'color-change':
          applyColorChangeFrame(ctx, img, i, frameCount);
          break;
        case 'fade':
          applyFadeFrame(ctx, img, i, frameCount);
          break;
        default:
          ctx.drawImage(img, 0, 0);
      }
      
      // Добавляем текущий кадр в гифку
      gif.addFrame(ctx, { copy: true, delay: 1000 / speed });
    }

    // Когда все кадры добавлены, генерируем гифку
    gif.on('finished', (blob: Blob) => {
      const gifUrl = URL.createObjectURL(blob);
      onComplete(gifUrl);
    });

    gif.render();
  };

  // Функции для генерации отдельных кадров
  const applyRotationFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, frame: number, totalFrames: number) => {
    ctx.save();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    const rotation = (frame / totalFrames) * Math.PI * 2; // Полный оборот за все кадры
    ctx.rotate(rotation);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  };

  const applyBlinkFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, frame: number, totalFrames: number) => {
    // Моргание: изображение появляется и исчезает
    const blinkCycle = Math.floor((frame / totalFrames) * 10); // 10 циклов за анимацию
    const show = (blinkCycle % 2 === 0);
    
    if (show) {
      ctx.drawImage(img, 0, 0);
    }
    // Если !show, то изображение не рисуется (пустой кадр)
  };

  const applyPulseFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, frame: number, totalFrames: number) => {
    ctx.save();
    const scale = 0.8 + 0.2 * Math.sin((frame / totalFrames) * Math.PI * 4); // 4 пульсации за анимацию
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(scale, scale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  };

  const applyColorChangeFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, frame: number, totalFrames: number) => {
    // Для изменения цвета мы можем использовать ImageData и манипуляции с пикселями
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    
    // Изменяем цвет в зависимости от кадра
    const hueShift = Math.floor((frame / totalFrames) * 360); // Сдвиг оттенка
    
    for (let i = 0; i < data.length; i += 4) {
      // data[i] = red, data[i+1] = green, data[i+2] = blue, data[i+3] = alpha
      // Простая конвертация RGB в HSL и изменение оттенка
      // Для упрощения в этом примере просто меняем яркость
      const brightness = 0.8 + 0.2 * Math.sin((frame / totalFrames) * Math.PI * 6);
      data[i] *= brightness;     // R
      data[i + 1] *= brightness; // G
      data[i + 2] *= brightness; // B
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  const applyFadeFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, frame: number, totalFrames: number) => {
    const opacity = Math.abs(Math.sin((frame / totalFrames) * Math.PI)); // От 0 до 1 и обратно
    
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, 0, 0);
    ctx.restore();
  };

  return (
    <canvas ref={canvasRef} style={{ display: 'none' }} />
  );
};

export default GifGenerator;