import React from 'react';

// Inline SVG Icons for self-containment
// Generic Programming/Learning Icons
const IconCode = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="currentColor" d="M392.8 1.6c-11.9-4.8-25.2-2.3-34.9 6.7L192 182.2V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V329.8L357.9 503.4c9.7 9 23 11.5 34.9 6.7s20.3-16.6 15.5-28.5L256 256 408.3 24.5c4.8-11.9 2.3-25.2-6.7-34.9zM528 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H528z"/>
  </svg>
);

const IconLaptopCode = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="currentColor" d="M64 256V160H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V352H384c-17.7 0-32-14.3-32-32s14.3-32 32-32H576V256H64zM576 64H64C28.7 64 0 92.7 0 128V192H640V128c0-35.3-28.7-64-64-64z"/>
  </svg>
);

const IconBookOpen = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 120.2c-15.1 5.2-24.8 20.3-24.8 36.6V448c0 15.1 8.9 29.1 22.1 35.5l234 117c14.7 7.4 32.7 7.4 47.4 0l234-117c13.2-6.4 22.1-20.4 22.1-35.5V156.8c0-16.3-9.7-31.4-24.8-36.6L359.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1H320zm72 256h-.7l-104-52c-5.9-3-12.7-3-18.6 0l-104 52H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h.7l104 52c5.9 3 12.7 3 18.6 0l104-52h.7c13.3 0 24-10.7 24-24s-10.7-24-24-24z"/>
  </svg>
);

const IconPalette = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M384 128c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128zM160 192h192v192H160V192zm-32 0V128c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64H128zM384 128c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128zM160 192h192v192H160V192zm-32 0V128c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64H128z"/>
  </svg>
);

const IconVideo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM576 128c0-17.7-14.3-32-32-32s-32 14.3-32 32V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128z"/>
  </svg>
);


// Tech Specific Icons (re-using existing ones or creating new simple ones)
const IconSiPython = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm48 80h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32z"/>
  </svg>
);

const IconSiTypescript = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M120.1 208H48c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h72.1c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm17.5 240H224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H137.6c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16zm169.8-160h-72.1c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h72.1c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zM416 64H32C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"/>
  </svg>
);

const IconSiJavascript = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M0 32v448h448V32H0zm243.8 344.9L194 285.7l-42.1 42.1-34.9-34.9 86.1-86.1 86.1 86.1-34.9 34.9-42.1-42.1z"/>
  </svg>
);

const IconSiHtml5 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6.2-88.5h48.1l3.1 36.3 50.1 13.7 50.2-13.7 3.4-40.3H125.5l-4.1-49.4h184.7l-16.6-182.4z"/>
  </svg>
);

const IconSiReact = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 0c-17.7 0-32 14.3-32 32V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM0 256c0-17.7 14.3-32 32-32H192c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm256 256c0-17.7 14.3-32 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32zM512 256c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32z"/>
  </svg>
);

const IconSiTailwindcss = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="currentColor" d="M192 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm0 64V416h256V96H192zm64 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"/>
  </svg>
);

const IconSiMongodb = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M16 128C16 57.3 73.3 0 144 0H304c70.7 0 128 57.3 128 128V384c0 70.7-57.3 128-128 128H144c-70.7 0-128-57.3-128-128V128zm128 0V384h160V128H144z"/>
  </svg>
);

const IconSiNodedotjs = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M192 32c-17.7 0-32 14.3-32 32V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 192c0-17.7 14.3-32 32-32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm192 128c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32zM352 288c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32zM32 288c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32z"/>
  </svg>
);

const IconSiFirebase = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M192 32c-17.7 0-32 14.3-32 32V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 192c0-17.7 14.3-32 32-32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm192 128c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32zM352 288c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32zM32 288c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32z"/>
  </svg>
);

const IconSiGithub = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path fill="currentColor" d="M165.9 397.4c-7.7 12.1-23.4 16.3-38.3 11.4s-25.7-17.1-18-29.2c7.7-12.1 23.4-16.3 38.3-11.4s25.7 17.1 18 29.2zM448 397.4c-7.7 12.1-23.4 16.3-38.3 11.4s-25.7-17.1-18-29.2c7.7-12.1 23.4-16.3 38.3-11.4s25.7 17.1 18 29.2zM248 8C111 8 0 119 0 256c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1v-42.5c-65.3 14.1-79.3-32.1-79.3-32.1C89 328.6 71.5 321 71.5 321c-21.3-14.6 1.7-14.3 1.7-14.3 23.6 1.7 36 24.1 36 24.1 21 35.7 55 25.4 68.4 19.4 2.3-15.1 8.3-25.4 15.1-31.3-52.5-5.9-107.6-26.2-107.6-117.3 0-25.9 9.1-47 24.1-63.7-2.3-5.9-10.5-30.1 2.3-62.7 0 0 19.6-6.1 64.3 24.1 18.6-5.1 38.4-7.6 58.2-7.9 19.8 .3 39.6 2.9 58.2 7.9 44.7-30.2 64.3-24.1 64.3-24.1 12.8 32.6 4.6 56.8 2.3 62.7 15 16.7 24.1 37.8 24.1 63.7 0 91.2-55.1 111.4-107.6 117.3 8.3 7.2 15.6 21.8 15.6 44v65.3c0 6.5 4.5 14.4 17.3 12.1C426.2 461.8 496 366.9 496 256c0-137-111-248-248-248z"/>
  </svg>
);

const IconSiC = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm48 80h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32z"/>
  </svg>
);

const IconSiCsharp = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm48 80h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32z"/>
  </svg>
);

const IconSiCplusplus = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm48 80h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm128 0h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32z"/>
  </svg>
);


interface Course {
  id: number;
  title: string;
  description: string;
  platform: string;
  icon?: React.ReactNode; // Optional icon
  thumbnailUrl?: string; // Optional for image thumbnails
}

const courses: Course[] = [
  {
    id: 1,
    title: 'DSA in Python: Algorithms & Data Structures',
    description: 'Master essential algorithms and data structures using Python for efficient problem-solving and coding interviews.',
    platform: 'UniLearn LMS',
    icon: <IconSiPython className="text-blue-400 text-5xl" />,
    thumbnailUrl: 'https://img.youtube.com/vi/pkYVOMyhrzo/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
    id: 2,
    title: 'TypeScript for Modern Web Development',
    description: 'Learn TypeScript from scratch to build robust, scalable, and maintainable web applications with strong typing.',
    platform: 'UniLearn LMS',
    icon: <IconSiTypescript className="text-blue-500 text-5xl" />,
    thumbnailUrl: 'https://img.youtube.com/vi/gp5H0V39VaM/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 3,
  title: 'JavaScript: The Complete Guide (ES6+)',
  description: 'Become a JavaScript expert, covering everything from fundamental concepts to advanced topics like asynchronous JS and modern frameworks.',
  platform: 'UniLearn LMS',
  icon: <IconSiJavascript className="text-yellow-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5sks/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 4,
  title: 'HTML & CSS: Build Responsive Websites',
  description: 'Learn the foundational languages of the web. Create stunning, responsive web pages that look great on any device.',
  platform: 'UniLearn LMS',
  icon: <IconSiHtml5 className="text-orange-500 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/G3e-cpL7ofc/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 5,
  title: 'React.js: Build Dynamic User Interfaces',
  description: 'Master React.js, the most popular JavaScript library for building interactive and component-based user interfaces.',
  platform: 'UniLearn LMS',
  icon: <IconSiReact className="text-cyan-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/Ke9c0tJ6t1Y/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 6,
  title: 'Tailwind CSS: Rapid UI Development',
  description: 'Accelerate your web design with Tailwind CSS. Learn to build beautiful, custom designs directly in your HTML.',
  platform: 'UniLearn LMS',
  icon: <IconSiTailwindcss className="text-teal-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/UBOj6rqRkag/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 7,
  title: 'MongoDB: NoSQL Database Essentials',
  description: 'Explore MongoDB, a powerful NoSQL database. Learn data modeling, querying, and aggregation for modern applications.',
  platform: 'UniLearn LMS',
  icon: <IconSiMongodb className="text-green-500 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/E-1xI8gV4MU/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 8,
  title: 'Node.js & Express: Backend Development',
  description: 'Build scalable and efficient backend APIs with Node.js and the Express.js framework.',
  platform: 'UniLearn LMS',
  icon: <IconSiNodedotjs className="text-green-600 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/Oe421EPjeWM/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 9,
  title: 'Firebase: Full-Stack App Development',
  description: 'Develop full-stack applications quickly using Firebase for authentication, real-time database, and cloud functions.',
  platform: 'UniLearn LMS',
  icon: <IconSiFirebase className="text-yellow-600 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/a_wP1t1QzN8/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 10,
  title: 'Git & GitHub: Version Control Mastery',
  description: 'Learn Git for version control and GitHub for collaborative development. Essential skills for any developer.',
  platform: 'UniLearn LMS',
  icon: <IconSiGithub className="text-white text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/RGOj5yH7evk/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 11,
  title: 'Python Programming: From Zero to Hero',
  description: 'A comprehensive introduction to Python programming, covering basics, data structures, functions, and object-oriented concepts.',
  platform: 'UniLearn LMS',
  icon: <IconSiPython className="text-blue-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/rfscVS0vtbw/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 12,
  title: 'C Programming: Fundamentals & Beyond',
  description: 'Understand the core concepts of C programming, memory management, and pointers. Foundation for system-level programming.',
  platform: 'UniLearn LMS',
  icon: <IconSiC className="text-blue-600 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/KJgsSFOSAXk/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 13,
  title: 'C#: Object-Oriented Programming',
  description: 'Learn C# for building robust applications on the .NET platform, including desktop, web, and game development.',
  platform: 'UniLearn LMS',
  icon: <IconSiCsharp className="text-purple-500 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/GhQdlIFLjlY/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 14,
  title: 'C++: Advanced Concepts & STL',
  description: 'Dive into advanced C++ features, object-oriented design, and the Standard Template Library (STL) for high-performance applications.',
  platform: 'UniLearn LMS',
  icon: <IconSiCplusplus className="text-blue-700 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/vLnPwxZdW4Y/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 15,
  title: 'Video Editing Masterclass: Adobe Premiere Pro',
  description: 'Learn professional video editing techniques, from basic cuts to advanced color grading and motion graphics using Premiere Pro.',
  platform: 'UniLearn LMS',
  icon: <IconVideo className="text-red-500 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/r_yM9D3iY4E/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 16,
  title: 'Graphic Design Fundamentals: Adobe Photoshop & Illustrator',
  description: 'Master the basics of graphic design, including typography, color theory, and layout, using industry-standard tools.',
  platform: 'UniLearn LMS',
  icon: <IconPalette className="text-pink-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/q-gRk12c22k/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 17,
  title: 'Machine Learning with Python',
  description: 'Introduction to machine learning concepts, algorithms, and practical implementation using Python libraries like Scikit-learn and TensorFlow.',
  platform: 'UniLearn LMS',
  icon: <IconLaptopCode className="text-orange-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/L3g9T_J-p00/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 18,
  title: 'Cloud Computing Basics: AWS & Azure',
  description: 'Understand the fundamentals of cloud computing and get hands-on experience with services from Amazon Web Services (AWS) and Microsoft Azure.',
  platform: 'UniLearn LMS',
  icon: <IconBookOpen className="text-yellow-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/k1_b4Jp3j-c/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 19,
  title: 'Cybersecurity: Introduction to Network Security',
  description: 'Learn about common cyber threats, network vulnerabilities, and basic security measures to protect systems and data.',
  platform: 'UniLearn LMS',
  icon: <IconCode className="text-gray-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/a_wP1t1QzN8/mqdefault.jpg', // Placeholder, use a relevant video if possible
  },
  {
  id: 20,
  title: 'Mobile App Development: React Native',
  description: 'Build cross-platform mobile applications for iOS and Android using JavaScript and React Native.',
  platform: 'UniLearn LMS',
  icon: <IconSiReact className="text-purple-400 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/0-S5a0eXPZM/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 21,
  title: 'UI/UX Design: Principles and Best Practices',
  description: 'Explore the principles of user interface (UI) and user experience (UX) design to create intuitive and engaging digital products.',
  platform: 'UniLearn LMS',
  icon: <IconPalette className="text-cyan-300 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/W4zQ_1qD68M/mqdefault.jpg', // Example YouTube thumbnail
  },
  {
  id: 22,
  title: 'Data Science with R',
  description: 'An introduction to data science concepts, statistical analysis, and data visualization using the R programming language.',
  platform: 'UniLearn LMS',
  icon: <IconBookOpen className="text-green-300 text-5xl" />,
  thumbnailUrl: 'https://img.youtube.com/vi/r_yM9D3iY4E/mqdefault.jpg', // Placeholder, use a relevant video if possible
  },
];


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-inter text-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="bg-slate-800 shadow-md rounded-lg p-4 mb-6 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-400">
          Explore Our Courses
        </h1>
      </header>

      {/* Introduction */}
      <main className="bg-slate-800 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <p className="mb-10 text-lg sm:text-xl text-slate-200 leading-relaxed text-center">
          Dive into a world of knowledge with UniLearn LMS! We offer a diverse range of courses designed to empower you with in-demand skills in technology, design, and more.
        </p>

        {/* Course Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-700 rounded-lg shadow-lg p-5 border border-slate-600 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              {/* Thumbnail/Icon */}
              <div className="flex justify-center items-center h-20 mb-4 overflow-hidden rounded-md">
                {course.thumbnailUrl ? (
                  <img
                    src={course.thumbnailUrl}
                    alt={`${course.title} Thumbnail`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/100x100/1e293b/a5f3fc?text=${encodeURIComponent(course.title.split(' ')[0])}`; }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {course.icon || <IconCode className="text-gray-400 text-5xl" />}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-100 mb-2 leading-tight">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 flex-grow">
                {course.description}
              </p>

              {/* Platform Name */}
              <p className="text-slate-400 text-xs font-medium mb-4">
                Platform: {course.platform}
              </p>

              {/* Enroll Button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md">
                View Course
              </button>
            </div>
          ))}
        </section>

        {/* Call to Action for more courses */}
        <section className="mt-12 p-6 bg-blue-700 rounded-lg border border-blue-600 text-slate-100 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-200 mb-4">
            Didn't find what you're looking for?
          </h2>
          <p className="text-slate-200 mb-6">
            Our course catalog is constantly expanding. Check back soon for new additions, or suggest a course you'd like to see!
          </p>
          <button className="bg-teal-500 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-teal-600 transition-colors duration-300 shadow-lg">
            Suggest a Course
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
