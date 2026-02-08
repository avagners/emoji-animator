import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  titleRu?: string;
  description?: string;
  descriptionRu?: string;
  keywords?: string;
  keywordsRu?: string;
  url?: string;
  image?: string;
}

const MetaTags = ({
  title = 'Emoji Animator - Create Animated Emojis',
  titleRu = 'Emoji Animator - Создание анимированных эмодзи',
  description = 'Create animated emojis from static images. Free online tool to generate animated GIFs from PNG, JPG, or GIF files with various animation effects.',
  descriptionRu = 'Создавайте анимированные эмодзи из статичных изображений. Бесплатный онлайн-инструмент для генерации анимированных GIF из PNG, JPG или GIF файлов с различными эффектами анимации.',
  keywords = 'emoji animator, animated emoji, gif maker, image animation, online gif creator, emoji generator',
  keywordsRu = 'аниматор эмодзи, анимированные эмодзи, создание гиф, анимация изображений, онлайн гиф редактор, генератор эмодзи',
  url = 'https://emoji-animator.vercel.app',
  image = '/assets/preview-image.jpg'
}: MetaTagsProps) => {
  useEffect(() => {
    // Обновляем заголовок страницы
    document.title = title;

    // Обновляем или создаем метатег description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Обновляем или создаем метатег keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    // Обновляем или создаем русский метатег description
    let metaDescriptionRu = document.querySelector('meta[name="description:ru"]');
    if (metaDescriptionRu) {
      metaDescriptionRu.setAttribute('name', 'description:ru');
      metaDescriptionRu.setAttribute('content', descriptionRu);
    } else {
      metaDescriptionRu = document.createElement('meta');
      metaDescriptionRu.setAttribute('name', 'description:ru');
      metaDescriptionRu.setAttribute('content', descriptionRu);
      document.head.appendChild(metaDescriptionRu);
    }

    // Обновляем или создаем русский метатег keywords
    let metaKeywordsRu = document.querySelector('meta[name="keywords:ru"]');
    if (metaKeywordsRu) {
      metaKeywordsRu.setAttribute('name', 'keywords:ru');
      metaKeywordsRu.setAttribute('content', keywordsRu);
    } else {
      metaKeywordsRu = document.createElement('meta');
      metaKeywordsRu.setAttribute('name', 'keywords:ru');
      metaKeywordsRu.setAttribute('content', keywordsRu);
      document.head.appendChild(metaKeywordsRu);
    }

    // Обновляем или создаем метатег og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
      document.head.appendChild(ogTitle);
    }

    // Обновляем или создаем метатег og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', description);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', description);
      document.head.appendChild(ogDescription);
    }

    // Обновляем или создаем русский метатег og:description
    let ogDescriptionRu = document.querySelector('meta[property="og:description:ru"]');
    if (ogDescriptionRu) {
      ogDescriptionRu.setAttribute('property', 'og:description:ru');
      ogDescriptionRu.setAttribute('content', descriptionRu);
    } else {
      ogDescriptionRu = document.createElement('meta');
      ogDescriptionRu.setAttribute('property', 'og:description:ru');
      ogDescriptionRu.setAttribute('content', descriptionRu);
      document.head.appendChild(ogDescriptionRu);
    }

    // Обновляем или создаем метатег og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', url);
    } else {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', url);
      document.head.appendChild(ogUrl);
    }

    // Обновляем или создаем метатег og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', image);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', image);
      document.head.appendChild(ogImage);
    }

    // Обновляем или создаем метатег twitter:title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', title);
    } else {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', title);
      document.head.appendChild(twitterTitle);
    }

    // Обновляем или создаем метатег twitter:description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', description);
    } else {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', description);
      document.head.appendChild(twitterDescription);
    }

    // Обновляем или создаем русский метатег twitter:description
    let twitterDescriptionRu = document.querySelector('meta[name="twitter:description:ru"]');
    if (twitterDescriptionRu) {
      twitterDescriptionRu.setAttribute('name', 'twitter:description:ru');
      twitterDescriptionRu.setAttribute('content', descriptionRu);
    } else {
      twitterDescriptionRu = document.createElement('meta');
      twitterDescriptionRu.setAttribute('name', 'twitter:description:ru');
      twitterDescriptionRu.setAttribute('content', descriptionRu);
      document.head.appendChild(twitterDescriptionRu);
    }

    // Обновляем или создаем метатег twitter:image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', image);
    } else {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', image);
      document.head.appendChild(twitterImage);
    }
  }, [title, titleRu, description, descriptionRu, keywords, keywordsRu, url, image]);

  return null;
};

export default MetaTags;