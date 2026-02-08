# Emoji Animator

Emoji Animator is a web application that allows you to create animated emojis (GIFs) from a single image. The application works completely in the browser, requires no registration, and does not send your images to the server.

## Features

- 🖼️ Image upload (PNG, JPG, GIF)
- 🌀 Support for various animation types:
  - Rotation
  - Blinking
  - Pulsing
  - Color change
  - Fade in/out
- ⚙️ Animation speed adjustment
- 🛡️ Image validation (max 5MB, supported formats)
- 💾 Ability to download the finished GIF
- 🌐 Works completely in the browser (no server data transfer)
- 🏷️ Displays application version
- 🎨 Custom favicon
- 🌍 Multilingual interface (English/Russian)

## How to use

1. Upload an image (click on the upload area)
2. Select the animation type from the dropdown list
3. Adjust the animation speed
4. Preview the animation
5. Click "Download GIF" to get the finished file

## Use cases

- Creating animated emojis for chats (Slack, Mattermost, Discord, etc.)
- Animating logos and branded images
- Creating fun and attractive icons

## Technologies

- React
- TypeScript
- Canvas API
- gif.js
- Vite
- Single Page Application (SPA)

## Running locally

1. Clone the repository:
```bash
git clone https://github.com/avagners/emoji-animator.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm run dev
```

The application will be available at http://localhost:5173

## License

MIT