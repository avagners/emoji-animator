import { useState, useRef } from 'react'
import { useLocale } from './contexts/LocaleContext'
import MetaTags from './components/MetaTags'
import AnimationCanvas from './components/AnimationCanvas'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'
import packageJson from '../package.json'

function App() {
  const { t } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [animationType, setAnimationType] = useState<string>('rotate')
  const [animationSpeed, setAnimationSpeed] = useState<number>(10)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Формируем динамическое описание для метатегов
  const getMetaDescription = () => {
    // Для сохранения конфиденциальности не включаем специфичные детали пользовательского контента
    if (selectedImage) {
      return t('title');
    }
    return t('title');
  };

  // Формируем русское описание для метатегов
  const getMetaDescriptionRu = () => {
    // Для сохранения конфиденциальности не включаем специфичные детали пользовательского контента
    if (selectedImage) {
      return t('title');
    }
    return t('title');
  };

  // Формируем ключевые слова для метатегов
  const getMetaKeywords = () => {
    const baseKeywords = 'emoji animator, animated emoji, gif maker, image animation, online gif creator, emoji generator';
    // Для сохранения конфиденциальности не добавляем специфичные параметры анимации
    return baseKeywords;
  };

  // Формируем русские ключевые слова для метатегов
  const getMetaKeywordsRu = () => {
    const baseKeywords = 'аниматор эмодзи, анимированные эмодзи, создание гиф, анимация изображений, онлайн гиф редактор, генератор эмодзи';
    // Для сохранения конфиденциальности не добавляем специфичные параметры анимации
    return baseKeywords;
  };

  const validateImage = (file: File): boolean => {
    // Проверяем размер файла (ограничим до 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError(t('error_large_file'))
      return false
    }

    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      setError(t('error_invalid_format'))
      return false
    }

    // Дополнительно проверим расширение файла
    const validExtensions = ['.png', '.jpg', '.jpeg', '.gif']
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!validExtensions.includes(fileExtension)) {
      setError(t('error_unsupported_format'))
      return false
    }

    setError(null)
    return true
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && validateImage(file)) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
      }
      reader.onerror = () => {
        setError(t('error_invalid_format')) // Используем локализованное сообщение
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="App">
      <MetaTags 
        title={t('title')} 
        titleRu={t('title')}
        description={getMetaDescription()}
        descriptionRu={getMetaDescriptionRu()}
        keywords={getMetaKeywords()}
        keywordsRu={getMetaKeywordsRu()}
      />
      <header className="header">
        <h1>{t('header_title')}</h1>
        <p>{t('header_subtitle')}</p>
        <div className="version-info">{t('version')}: {packageJson.version}</div>
        <LanguageSwitcher />
      </header>

      <main className="main-content">
        <section className="upload-section">
          <div className="upload-area" onClick={triggerFileSelect}>
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded preview" className="preview-image" />
            ) : (
              <div className="upload-placeholder">
                <p>{t('upload_area_click')}</p>
                <p className="subtitle">{t('upload_area_formats')}</p>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </section>

        {selectedImage && (
          <section className="controls-section">
            <div className="control-group">
              <label htmlFor="animation-type">{t('animation_type_label')}</label>
              <select
                id="animation-type"
                value={animationType}
                onChange={(e) => setAnimationType(e.target.value)}
              >
                <option value="rotate">{t('animation_types.rotate')}</option>
                <option value="blink">{t('animation_types.blink')}</option>
                <option value="pulse">{t('animation_types.pulse')}</option>
                <option value="color-change">{t('animation_types.color-change')}</option>
                <option value="fade">{t('animation_types.fade')}</option>
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="animation-speed">{t('animation_speed_label')}</label>
              <input
                type="range"
                id="animation-speed"
                min="1"
                max="30"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              />
              <span>{animationSpeed} FPS</span>
            </div>
          </section>
        )}

        {selectedImage && (
          <section className="preview-section">
            <h3>{t('preview_heading')}</h3>
            <div className="animation-preview">
              <AnimationCanvas
                imageUrl={selectedImage}
                type={animationType}
                speed={animationSpeed}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App