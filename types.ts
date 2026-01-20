
export type Language = 'en' | 'ar';

export interface Department {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  icon: string;
}

export interface ProgressStage {
  title: {
    en: string;
    ar: string;
  };
  details: {
    en: string[];
    ar: string[];
  };
}
