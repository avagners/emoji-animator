// src/components/LanguageSwitcher.tsx
import { useLocale } from '../contexts/LocaleContext';

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select 
        value={currentLanguage} 
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;