declare module 'gif.js' {
  interface GifOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
  }

  interface GifInstance {
    addFrame(ctx: CanvasRenderingContext2D, options?: { copy: boolean; delay: number }): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }

  class Gif implements GifInstance {
    constructor(options: GifOptions);
    addFrame(ctx: CanvasRenderingContext2D, options?: { copy: boolean; delay: number }): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }

  export default Gif;
}