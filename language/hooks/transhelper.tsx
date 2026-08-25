// hooks/useTransHelper.ts
import { useTranslation } from 'react-i18next';

export const useTransHelper = () => {
  const { t } = useTranslation();

  const trans = (key: string, options?: Record<string, any>): string => {
    return t(key, options);
  };

  return { trans };
};
