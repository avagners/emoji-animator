# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2026-02-08

### Changed
- Updated README.md with English content
- Added information about SPA architecture
- Clarified multilingual interface support

### Fixed
- Corrected README files to have appropriate languages
- Added SPA designation to technology stack

## [1.2.1] - 2026-02-08

### Fixed
- Corrected localization implementation using React Context
- Improved language switching mechanism without page reload
- Fixed translation fallback mechanism
- Enhanced locale context provider

### Changed
- Upgraded version to 1.2.1
- Refactored i18n implementation for better performance

## [1.2.0] - 2026-02-08

### Added
- Full localization support for English and Russian languages
- Translation files and utility functions
- Language switcher component in UI
- Localized error messages and UI elements
- Internationalization (i18n) infrastructure

### Changed
- Upgraded version to 1.2.0
- Migrated hardcoded UI strings to localized equivalents
- Enhanced accessibility with multilingual support

## [1.1.2] - 2026-02-08

### Added
- Verification file for Google Search Console

### Changed
- Upgraded version to 1.1.2

## [1.1.1] - 2026-02-08

### Added
- Verification file for Yandex.Webmaster
- Dynamic version display from package.json

### Changed
- Upgraded version to 1.1.1
- Removed hardcoded version in UI

## [1.1.0] - 2026-02-08

### Added
- SEO optimization for Russian-speaking audience
- Multilingual meta tags (en/ru) with hreflang attributes
- Dynamic meta tag management component
- Sitemap.xml with language alternatives
- Robots.txt for search engine crawling
- Russian language README (README_RU.md)
- Structured data (JSON-LD) with Russian translations
- Updated URLs to Vercel domain

### Changed
- Upgraded version to 1.1.0
- Enhanced privacy compliance in meta tag generation
- Improved search engine visibility for Russian segment

## [1.0.0] - 2026-02-05

### Added
- Initial release of Emoji Animator
- Support for creating animated emojis from single images
- Multiple animation types: rotation, blinking, pulsing, color change, fade
- Image upload with validation (max 5MB, PNG/JPG/GIF)
- Download functionality for generated GIFs
- Responsive UI with Russian language interface
- Client-side processing (no server uploads)
- TypeScript type safety
- Vercel deployment configuration

### Changed
- Upgraded to semantic versioning
- Added version display in UI

## [0.1.0] - 2026-02-05

### Added
- Basic emoji animation functionality
- UI for uploading images and selecting animations
- GIF generation using gif.js
- Preview functionality