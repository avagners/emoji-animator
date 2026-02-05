import { useState, useRef } from 'react'
import AnimationCanvas from './components/AnimationCanvas'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [animationType, setAnimationType] = useState<string>('rotate')
  const [animationSpeed, setAnimationSpeed] = useState<number>(10)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Emoji Animator</h1>
        <p>Создавайте анимированные эмодзи из одного изображения</p>
      </header>

      <main className="main-content">
        <section className="upload-section">
          <div className="upload-area" onClick={triggerFileSelect}>
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded preview" className="preview-image" />
            ) : (
              <div className="upload-placeholder">
                <p>Нажмите, чтобы загрузить изображение</p>
                <p className="subtitle">Поддерживаемые форматы: PNG, JPG, GIF</p>
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