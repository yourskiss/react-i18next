import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Service() {
  const { t } = useTranslation();
  return (
    <div>
       <h1>{t('pageservice.heading')} </h1>
       <p>{t('pageservice.text')}</p>
    </div>
  )
}
