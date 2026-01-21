'use client';

import { useEffect, useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import clsx from 'clsx';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://www.youtube.com/watch?v=R9YXHDyz3s4',
    poster:
      'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1280',
    background:
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop',
    title: 'مستقبل التجارة الإلكترونية',
    date: 'إصدار شتاء 2026',
    scrollToExpand: 'مرر للتوسيع',
    about: {
      overview:
        'هذا عرض توضيحي لمكون ScrollExpandMedia مع فيديو. أثناء التمرير، يتمدد الفيديو لملء المزيد من الشاشة، مما يخلق تجربة غامرة. هذا المكون مثالي لعرض محتوى الفيديو بطريقة حديثة وتفاعلية.',
      conclusion:
        'يوفر مكون ScrollExpandMedia طريقة فريدة لإشراك المستخدمين مع محتواك من خلال التمرير التفاعلي. جرب التبديل بين وضعي الفيديو والصورة لرؤية التطبيقات المختلفة.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    title: 'عرض الصور الديناميكي',
    date: 'إصدار شتاء 2026',
    scrollToExpand: 'مرر للتوسيع',
    about: {
      overview:
        'هذا عرض توضيحي لمكون ScrollExpandMedia مع صورة. يعمل نفس تأثير التمدد السلس بشكل جميل مع الصور الثابتة، مما يسمح لك بإنشاء تجارب بصرية جذابة بدون محتوى فيديو.',
      conclusion:
        'يعمل مكون ScrollExpandMedia بشكل متساوٍ مع الصور والفيديوهات. هذه المرونة تسمح لك باختيار نوع الوسائط الذي يناسب محتواك بشكل أفضل مع الحفاظ على نفس تجربة المستخدم الجذابة.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='font-heading text-3xl md:text-4xl font-black mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent'>
        حول هذا المكون
      </h2>
      <p className='text-lg mb-8 text-gray-300 font-body'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-gray-300 font-body'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-[#09001A] relative overflow-hidden'>
      <div className='fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0' />
      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={currentMedia.src}
          posterSrc={currentMedia.poster}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
          textBlend
        />
      </div>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-[#09001A] relative overflow-hidden'>
      <div className='fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0' />
      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={currentMedia.src}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
          textBlend
        />
      </div>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-[#09001A] relative overflow-hidden'>
      <div className='fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0' />
      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={currentMedia.src}
          posterSrc={currentMedia.poster}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
        />
      </div>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-[#09001A] relative overflow-hidden'>
      <div className='fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0' />
      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={currentMedia.src}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
        >
          <MediaContent mediaType={mediaType} />
        </ScrollExpandMedia>
      </div>
    </div>
  );
};

const Demo = () => {
  const currentMedia = sampleMediaContent.video;
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const isLight = theme === 'light';

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.dataset.theme = theme;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    body.style.backgroundColor = theme === 'light' ? '#f7f8fb' : '#09001A';
    body.style.color = theme === 'light' ? '#0f172a' : '#ffffff';

    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={clsx(
        'min-h-screen relative overflow-hidden transition-colors duration-500',
        isLight ? 'bg-[#f7f8fb] text-slate-900' : 'bg-[#09001A] text-white'
      )}
    >
      {/* WebGL Shader Background */}
      <WebGLShader />
      {isLight && (
        <div className='pointer-events-none absolute inset-0 bg-white/40 backdrop-blur-[2px]' />
      )}

      <button
        type='button'
        onClick={toggleTheme}
        className={clsx(
          'fixed top-4 right-4 z-30 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          isLight
            ? 'bg-slate-900 text-white focus-visible:ring-slate-900 focus-visible:ring-offset-white'
            : 'bg-white text-slate-900 focus-visible:ring-white focus-visible:ring-offset-slate-900'
        )}
        aria-label='Toggle theme'
      >
        {isLight ? 'الوضع الداكن' : 'الوضع الفاتح'}
      </button>

      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc={currentMedia.src}
          posterSrc={currentMedia.poster}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
        />
      </div>
    </div>
  );
};

export default Demo;

