
'use strict';

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  })
);

const video = document.getElementById('logoVideo');
const sound = document.getElementById('soundBtn');

sound.addEventListener('click', () => {
  video.muted = !video.muted;
  sound.textContent = video.muted ? '🔇 Aktive son' : '🔊 Koupe son';
  sound.setAttribute('aria-pressed', String(!video.muted));
});

// Lyen pwofil yo. Verifye yo anvan piblikasyon.
const social = [
  ['TikTok · Léogâne Info', 'https://www.tiktok.com/@y_me11'],
  ['Telegram · Léogâne Info', 'https://t.me/bss1815dmp'],
  ['Facebook · BSS1815', 'https://www.facebook.com/share/1By3KvYRrM/'],
  ['Instagram · BSS1815', 'https://www.instagram.com/lebaron072/'],
  ['WhatsApp · BSS1815', 'https://wa.me/50943437488'],
  ['YouTube · BSS1815', 'https://www.youtube.com/@BSS1815PROMAXDMP'],
  ['Spotify · BSS1815', 'https://open.spotify.com/user/31tjmtdar45qgcpjpiwps5rqrici'],
  ['LinkedIn · Maximax', 'https://www.linkedin.com/in/maximax-multi-services-075ba2314'],
  ['X · BSS1815', 'https://x.com/w05g2m'],
  ['Truth Social · BSS1815', 'https://truthsocial.com/@briyant_soley_1815']
];

const socialBox = document.getElementById('socialLinks');

social.forEach(([name, url]) => {
  const a = document.createElement('a');
  a.href = url;
  a.textContent = name;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  socialBox.appendChild(a);
});

const translations = {
  ht: [
    'YON VWA KI RASANBLE NOU',
    'Pon ant Léogâne, Florida ak dyaspora a. Nouvèl, kilti, kominote ak opòtinite.'
  ],
  fr: [
    'UNE VOIX QUI NOUS RASSEMBLE',
    'Un pont entre Léogâne, la Floride et la diaspora. Actualités, culture, communauté et opportunités.'
  ],
  en: [
    'A VOICE THAT UNITES US',
    'Connecting Léogâne, Florida and the diaspora through news, culture, community and opportunities.'
  ]
};

document.getElementById('lang').addEventListener('change', e => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  document.getElementById('tagline').textContent = translations[lang][0];
  document.getElementById('intro').textContent = translations[lang][1];
});

document.getElementById('year').textContent = new Date().getFullYear();
