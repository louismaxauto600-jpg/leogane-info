
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const video = document.getElementById('heroVideo');
  const sound = document.getElementById('soundToggle');

  if (video && sound) {
    sound.addEventListener('click', async () => {
      video.muted = !video.muted;
      sound.setAttribute('aria-pressed', String(!video.muted));
      sound.setAttribute('data-i18n',
        video.muted ? 'soundOn' : 'soundOff');

      try {
        if (video.paused) await video.play();
      } catch (error) {
        console.warn('Videyo pa kapab jwe:', error);
      }

      updateLanguage(currentLanguage);
    });
  }

  const translations = {
    ht: {
      home: 'Akèy',
      news: 'Nouvèl',
      culture: 'Kilti',
      business: 'Biznis',
      community: 'Kominote',
      social: 'Rezo Sosyal',
      contact: 'Kontak',
      tagline: 'YON VWA KI RASANBLE NOU',
      heroDescription: 'Pon ant Léogâne, Florida ak dyaspora a. Nouvèl, kilti, kominote ak opòtinite.',
      discover: 'Dekouvri rezo nou yo',
      soundOn: 'Aktive son',
      soundOff: 'Koupe son',
      newsTitle: 'NOUVÈL & ENFÒMASYON',
      newsDescription: 'Nouvèl ki verifye, analiz ak rapò sou Léogâne, Ayiti ak dyaspora a.',
      localNews: 'Nouvèl Lokal',
      localNewsDescription: 'Enfòmasyon sou lavi ak aktivite kominote Léogâne.',
      diasporaNews: 'Nouvèl Dyaspora',
      diasporaDescription: 'Enfòmasyon pou kominote ayisyen Florida ak lòt kote.',
      cultureTitle: 'KILTI & ERITAJ',
      cultureDescription: 'Rara, istwa Léogâne, mizik, tradisyon ak eritaj kiltirèl.',
      businessTitle: 'BUSINESS DIRECTORY',
      businessDescription: 'Yon espas pou prezante biznis Léoganèz Ayiti ak dyaspora a.',
      communityTitle: 'KOMINOTE',
      communityDescription: 'Yon platfòm ki rasanble Léoganèz toupatou nan mond lan.',
      socialTitle: 'REZO SOSYAL OFISYÈL LÉOGÂNE INFOS',
      socialDescription: 'Swiv nou sou rezo sosyal nou yo.',
      contactTitle: 'KONTAK LÉOGÂNE INFOS'
    },

    fr: {
      home: 'Accueil',
      news: 'Actualités',
      culture: 'Culture',
      business: 'Entreprises',
      community: 'Communauté',
      social: 'Réseaux sociaux',
      contact: 'Contact',
      tagline: 'UNE VOIX QUI NOUS RASSEMBLE',
      heroDescription: 'Un pont entre Léogâne, la Floride et la diaspora. Actualités, culture, communauté et opportunités.',
      discover: 'Découvrir nos réseaux',
      soundOn: 'Activer le son',
      soundOff: 'Couper le son',
      newsTitle: 'ACTUALITÉS & INFORMATIONS',
      newsDescription: 'Actualités vérifiées, analyses et reportages sur Léogâne, Haïti et la diaspora.',
      localNews: 'Actualités locales',
      localNewsDescription: 'Informations sur la vie et les activités de Léogâne.',
      diasporaNews: 'Actualités de la diaspora',
      diasporaDescription: 'Informations pour la communauté haïtienne en Floride et ailleurs.',
      cultureTitle: 'CULTURE & PATRIMOINE',
      cultureDescription: 'Rara, histoire de Léogâne, musique, traditions et patrimoine culturel.',
      businessTitle: 'ANNUAIRE DES ENTREPRISES',
      businessDescription: 'Un espace pour présenter les entreprises de Léogâne, en Haïti et dans la diaspora.',
      communityTitle: 'COMMUNAUTÉ',
      communityDescription: 'Une plateforme qui rassemble les Léogânais du monde entier.',
      socialTitle: 'RÉSEAUX SOCIAUX OFFICIELS LÉOGÂNE INFOS',
      socialDescription: 'Suivez-nous sur nos réseaux sociaux.',
      contactTitle: 'CONTACT LÉOGÂNE INFOS'
    },

    en: {
      home: 'Home',
      news: 'News',
      culture: 'Culture',
      business: 'Business',
      community: 'Community',
      social: 'Social Networks',
      contact: 'Contact',
      tagline: 'A VOICE THAT UNITES US',
      heroDescription: 'Connecting Léogâne, Florida and the diaspora through news, culture, community and opportunities.',
      discover: 'Explore our networks',
      soundOn: 'Turn sound on',
      soundOff: 'Mute sound',
      newsTitle: 'NEWS & INFORMATION',
      newsDescription: 'Verified news, analysis and reports about Léogâne, Haiti and the diaspora.',
      localNews: 'Local News',
      localNewsDescription: 'Information about life and community activities in Léogâne.',
      diasporaNews: 'Diaspora News',
      diasporaDescription: 'Information for Haitian communities in Florida and beyond.',
      cultureTitle: 'CULTURE & HERITAGE',
      cultureDescription: 'Rara, Léogâne history, music, traditions and cultural heritage.',
      businessTitle: 'BUSINESS DIRECTORY',
      businessDescription: 'A space to showcase businesses from Léogâne, Haiti and the diaspora.',
      communityTitle: 'COMMUNITY',
      communityDescription: 'A platform connecting people from Léogâne around the world.',
      socialTitle: 'OFFICIAL LÉOGÂNE INFOS SOCIAL NETWORKS',
      socialDescription: 'Follow us on our social networks.',
      contactTitle: 'CONTACT LÉOGÂNE INFOS'
    }
  };

  let currentLanguage = 'ht';

  function updateLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    try {
      localStorage.setItem('leogane-infos-lang', lang);
    } catch (_) {}
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      updateLanguage(button.dataset.lang);
    });
  });

  let savedLanguage = 'ht';
  try {
    savedLanguage = localStorage.getItem('leogane-infos-lang') || 'ht';
  } catch (_) {}

  updateLanguage(savedLanguage);

  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  // Lyen pwofil ki te bay nan pwojè a.
  // Verifye chak pwofil anvan lansman piblik.
  const socialLinks = {
    tiktok: 'https://www.tiktok.com/@y_me11',
    telegram: 'https://t.me/bss1815dmp',
    facebook: 'https://www.facebook.com/share/1By3KvYRrM/',
    instagram: 'https://www.instagram.com/lebaron072/',
    whatsapp: 'https://wa.me/14076405166',
    youtube: 'https://www.youtube.com/@BSS1815PROMAXDMP',
    spotify: 'https://open.spotify.com/user/31tjmtdar45qgcpjpiwps5rqrici',
    linkedin: 'https://www.linkedin.com/in/maximax-multi-services-075ba2314',
    x: 'https://x.com/w05g2m',
    truthsocial: 'https://truthsocial.com/@briyant_soley_1815'
  };

  document.querySelectorAll('[data-network]').forEach(link => {
    const network = link.dataset.network;
    if (socialLinks[network]) {
      link.href = socialLinks[network];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

});
