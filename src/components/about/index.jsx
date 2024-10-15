import React from 'react'
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
       <h1>{t('pageabout.heading')} </h1>
       <p>{t('pageabout.text')}</p>
    </div>
  )
}
