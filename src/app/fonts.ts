import localFont from 'next/font/local'

export const calibre = localFont({
  src: [
    {
      path: '../../public/font/TestCalibre-Regular-BF661746edbee52.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/TestCalibre-Medium-BF661746ed8cff9.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/TestCalibre-Semibold-BF661746ed9242e.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/TestCalibre-Bold-BF661746ed7c530.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/TestCalibre-RegularItalic-BF661746edb584e.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-calibre',
  display: 'swap',
})