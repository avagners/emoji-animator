import { useState, useRef } from 'react'
import MetaTags from './components/MetaTags'
import AnimationCanvas from './components/AnimationCanvas'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [animationType, setAnimationType] = useState<string>('rotate')
  const [animationSpeed, setAnimationSpeed] = useState<number>(10)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Формируем динамическое описание для метатегов
  const getMetaDescription = () => {
    // Для сохранения конфиденциальности не включаем специфичные детали пользовательского контента
    if (selectedImage) {
      return 'Create animated emojis from static images. Free online tool to generate animated GIFs from PNG, JPG, or GIF files with various animation effects.';
    }
    return 'Create animated emojis from static images. Free online tool to generate animated GIFs from PNG, JPG, or GIF files with various animation effects.';
  };

  // Формируем русское описание для метатегов
  const getMetaDescriptionRu = () => {
    // Для сохранения конфиденциальности не включаем специфичные детали пользовательского контента
    if (selectedImage) {
      return 'Создавайте анимированные эмодзи из статичных изображений. Бесплатный онлайн-инструмент для генерации анимированных GIF из PNG, JPG или GIF файлов с различными эффектами анимации.';
    }
    return 'Создавайте анимированные эмодзи из статичных изображений. Бесплатный онлайн-инструмент для генерации анимированных GIF из PNG, JPG или GIF файлов с различными эффектами анимации.';
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
      setError('Файл слишком большой. Максимальный размер: 5MB.')
      return false
    }

    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      setError('Пожалуйста, загрузите изображение (PNG, JPG, GIF)')
      return false
    }

    // Дополнительно проверим расширение файла
    const validExtensions = ['.png', '.jpg', '.jpeg', '.gif']
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!validExtensions.includes(fileExtension)) {
      setError('Неподдерживаемый формат файла. Поддерживаются: PNG, JPG, GIF')
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
        setError('Ошибка при загрузке изображения')
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
        title={'Emoji Animator - Create Animated Emojis'} 
        titleRu={'Emoji Animator - Создание анимированных эмодзи'}
        description={getMetaDescription()}
        descriptionRu={getMetaDescriptionRu()}
        keywords={getMetaKeywords()}
        keywordsRu={getMetaKeywordsRu()}
      />
      <header className="header">
        <h1>Emoji Animator</h1>
        <p>Создавайте анимированные эмодзи из одного изображения</p>
        <div className="version-info">Версия: 1.0.0</div>
      </header>

      <main className="main-content">
        <section className="upload-section">
          <div className="upload-area" onClick={triggerFileSelect}>
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded preview" className="preview-image" />
            ) : (
              <div className="upload-placeholder">
                <p>Нажмите, чтобы загрузить изображение</p>
                <p className="subtitle">Поддерживаемые форматы: PNG, JPG, GIF (макс. 5MB)</p>
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
              <label htmlFor="animation-type">Тип анимации:</label>
              <select
                id="animation-type"
                value={animationType}
                onChange={(e) => setAnimationType(e.target.value)}
              >
                <option value="rotate">Вращение</option>
                <option value="blink">Моргание</option>
                <option value="pulse">Пульсация</option>
                <option value="color-change">Переливание цветом</option>
                <option value="fade">Появление/исчезновение</option>
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="animation-speed">Скорость анимации:</label>
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
            <h3>Предварительный просмотр</h3>
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