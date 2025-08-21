import fs from 'fs'
import path from 'path'

const languages = [
  { code: 'de', path: '/', title: 'Medizinische Assistenz - Schnelle Termine in Deutschland', description: 'Professionelle medizinische Assistenz in Deutschland. Terminvereinbarung, Übersetzung und Begleitung bei Arztbesuchen.' },
  { code: 'ru', path: '/ru', title: 'Медицинская Консультация - Быстрая запись к врачу в Германии', description: 'Профессиональная медицинская помощь в Германии. Запись к врачу, переводы и сопровождение на приёмах.' },
  { code: 'en', path: '/en', title: 'Medical Assistance - Quick Appointments in Germany', description: 'Professional medical assistance in Germany. Appointment scheduling, translation and accompaniment to doctor visits.' }
]

const baseTemplate = `<!doctype html>
<html lang="{{LANG}}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/icons/medical-icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESCRIPTION}}" />
    <meta name="keywords" content="medizinische assistenz, terminvereinbarung, übersetzung, arzttermin, deutschland" />
    <meta name="author" content="Yelyzaveta" />
    <meta property="og:title" content="{{TITLE}}" />
    <meta property="og:description" content="{{DESCRIPTION}}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{URL}}" />
    <link rel="canonical" href="{{URL}}" />
    <link rel="alternate" hreflang="de" href="/" />
    <link rel="alternate" hreflang="ru" href="/ru" />
    <link rel="alternate" hreflang="en" href="/en" />
    <link rel="alternate" hreflang="x-default" href="/" />
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

function generateLanguagePages() {
  const distDir = path.join(process.cwd(), 'dist')
  
  if (!fs.existsSync(distDir)) {
    console.error('Build directory not found. Run "npm run build" first.')
    return
  }

  languages.forEach(lang => {
    const htmlContent = baseTemplate
      .replace(/{{LANG}}/g, lang.code)
      .replace(/{{TITLE}}/g, lang.title)
      .replace(/{{DESCRIPTION}}/g, lang.description)
      .replace(/{{URL}}/g, lang.path)

    if (lang.code === 'de') {
      // Update the main index.html
      fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent)
    } else {
      // Create language directories
      const langDir = path.join(distDir, lang.code)
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true })
      }
      fs.writeFileSync(path.join(langDir, 'index.html'), htmlContent)
    }
  })

  console.log('SEO language pages generated successfully!')
}

generateLanguagePages()