const fs = require('fs');

const THUMB_IMGS = {
  // Continue Learning & Development
  'Full Stack Web Development for Beginners': 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&q=80',
  'Prompt Engineering Tutorial – Master ChatGPT and LLM Responses': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',
  'Next.js Full Course 2024': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
  'Python Full Course for Beginners': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80',
  
  // Popular & Trending Variations
  'UI/UX Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
  'Machine Learning': 'https://media.istockphoto.com/id/1202870693/photo/future-artificial-intelligence-robot-and-cyborg.jpg?s=1024x1024&w=is&k=20&c=6-MuVlX1v0N60gsZCqHc53NqZUPFGLoJf7TwciG3QbU=',
  'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  'Java Programming': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80',
  'Cloud Computing Fundamentals': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
  'Cybersecurity Essentials': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
  'Mobile App Development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
  
  // Trending Only
  'Generative AI Masterclass': 'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=400&q=80',
  'Cybersecurity Fundamentals': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',
  'Digital Marketing': 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80',
  'Blockchain Development': 'https://media.istockphoto.com/id/1484912807/photo/cloud-computing-concept-digital-cloud-solutions-on-pcb-futuristic-background.jpg?s=1024x1024&w=is&k=20&c=-jJPPzh1NAhYf_o2UbPXBL3-kUrluP_oCjbUzhivv28=',
  'DevOps Engineering': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80',
  'Ethical Hacking': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80',
  'AI Agent Development': 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=400&q=80',
  'Prompt Engineering Pro': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80',
  
  // Recently Added
  'Photography Fundamentals': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
  'Blender 3D Modeling': 'https://images.unsplash.com/photo-1667657633515-fc26aed922f6?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Video Editing Masterclass': 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
  'Motion Graphics & Animation': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
  'Adobe Photoshop Essentials': 'https://images.unsplash.com/photo-1637519290541-0a12b3185485?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Content Creation Masterclass': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80',
  
  // Specific Development & AI Additions
  'Java Programming Essentials': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
  'C++ Programming': 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=80',
  'Data Structures & Algorithms': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80',
  'Node.js Backend Development': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
  'TypeScript Complete Guide': 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'REST API Development': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
  'Software Engineering Fundamentals': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
  'Machine Learning with Python': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80',
  'Deep Learning Fundamentals': 'https://plus.unsplash.com/premium_photo-1682124672287-522dc636dd83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Computer Vision Basics': 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&q=80',
  'Natural Language Processing': 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80',
  'Data Science Bootcamp': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
  
  // Specific Design Additions
  'UI/UX Design Mastery': 'https://images.unsplash.com/photo-1581291518655-9523c932ded7?w=400&q=80',
  'Figma Complete Course': 'https://images.unsplash.com/photo-1746014600929-8e4bf8d370f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Graphic Design Essentials': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80',
  'Adobe Photoshop Masterclass': 'https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Adobe Illustrator Fundamentals': 'https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '3D Modeling with Blender': 'https://plus.unsplash.com/premium_photo-1681879210391-04c05503b135?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  // Specific Business Additions
  'Digital Marketing Strategy': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
  'SEO Fundamentals': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80',
  'Social Media Marketing': 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&q=80',
  'Business Analytics': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
  'Entrepreneurship Essentials': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  'Project Management Professional': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
  'Personal Finance & Investing': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80',
  'Sales & Negotiation Skills': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80'
};

function getThumb(title) {
  for (const k in THUMB_IMGS) { if (title.includes(k.substring(0,14))) return THUMB_IMGS[k]; }
  return null;
}

const allCourses = [
  // Continue Learning
  {
    cat: 'Continue Learning',
    title: 'Full Stack Web Development for Beginners',
    url: 'https://youtube.com/watch?v=nu_pCVPKzTk',
    progress: 78,
    icon: '🌐',
    bg: '#e0f2fe',
    rating: 4.8,
    hours: '40h',
    videoDuration: '7h 29m',
    level: 'Beginner',
    desc: 'Master HTML, CSS, JavaScript, and Node.js from scratch.',
    students: 12500
  },
  {
    cat: 'Continue Learning',
    title: 'Prompt Engineering Tutorial – Master ChatGPT and LLM Responses',
    url: 'https://youtube.com/watch?v=_ZvnD73m40o',
    progress: 56,
    icon: '🤖',
    bg: '#f0fdf4',
    rating: 4.9,
    hours: '18h',
    videoDuration: '41m 36s',
    level: 'Beginner',
    desc: 'Learn the art of crafting powerful prompts for AI models.',
    students: 8400
  },
  {
    cat: 'Continue Learning',
    title: 'Next.js Full Course 2024',
    url: 'https://youtube.com/watch?v=wm5gMKuwSYk',
    progress: 64,
    icon: '⚛',
    bg: '#eef2ff',
    rating: 4.7,
    hours: '28h',
    videoDuration: '3h 26m',
    level: 'Intermediate',
    desc: 'Build scalable full-stack React applications with Next.js.',
    students: 9200
  },
  {
    cat: 'Continue Learning',
    title: 'Python Full Course for Beginners',
    url: 'https://youtube.com/watch?v=_uQrJ0TkZlc',
    progress: 82,
    icon: '🐍',
    bg: '#fef9c3',
    rating: 4.8,
    hours: '32h',
    videoDuration: '6h 14m 07s',
    level: 'Beginner',
    desc: 'Go from absolute zero to building your first Python applications.',
    students: 15300
  },

  // Popular
  {
    cat: 'Popular Courses',
    title: 'Next.js Full Course 2024',
    url: 'https://youtube.com/watch?v=wm5gMKuwSYk',
    icon: '⚛',
    bg: '#eef2ff',
    rating: 4.7,
    hours: '28h',
    videoDuration: '3h 26m',
    level: 'Intermediate',
    desc: 'Build scalable full-stack React applications with Next.js.',
    students: 9200
  },
  {
    cat: 'Popular Courses',
    title: 'UI/UX Design',
    url: 'https://youtube.com/watch?v=c9Wg6Cb_YlU',
    icon: '🎨',
    bg: '#fdf2f8',
    rating: 4.8,
    hours: '20h',
    videoDuration: '1h 26m',
    level: 'Beginner',
    desc: 'Understand the fundamentals of user research and wireframing.',
    students: 11400
  },
  {
    cat: 'Popular Courses',
    title: 'Machine Learning',
    url: 'https://youtube.com/watch?v=i_LwzRVP7bg',
    icon: '🧠',
    bg: '#f0fdf4',
    rating: 4.9,
    hours: '35h',
    videoDuration: '3h 53m',
    level: 'Advanced',
    desc: 'Dive into predictive algorithms, regressions, and classification tasks.',
    students: 7600
  },
  {
    cat: 'Popular Courses',
    title: 'Data Science',
    url: 'https://youtube.com/watch?v=ua-CiDNNj30',
    icon: '📊',
    bg: '#ede9fe',
    rating: 4.7,
    hours: '30h',
    videoDuration: '5h 52m',
    level: 'Intermediate',
    desc: 'Analyze complex datasets and generate interactive visual insights.',
    students: 8900
  },
  {
    cat: 'Popular Courses',
    title: 'Java Programming',
    url: 'https://youtube.com/watch?v=eIrMbAQSU34',
    icon: '☕',
    bg: '#fff7ed',
    rating: 4.6,
    hours: '25h',
    videoDuration: '2h 30m',
    level: 'Beginner',
    desc: 'Master object-oriented programming concepts using Java.',
    students: 10200
  },
  {
    cat: 'Popular Courses',
    title: 'Cloud Computing Fundamentals',
    url: 'https://youtube.com/watch?v=2LaAJq1lB1Q',
    icon: '☁',
    bg: '#e0f2fe',
    rating: 4.5,
    hours: '15h',
    videoDuration: '10h 17m',
    level: 'Beginner',
    desc: 'Explore AWS, Azure, and the foundational architecture of the cloud.',
    students: 6800
  },
  {
    cat: 'Popular Courses',
    title: 'Cybersecurity Essentials',
    url: 'https://youtube.com/watch?v=U_P23SqJaDc',
    icon: '🔐',
    bg: '#fef2f2',
    rating: 4.7,
    hours: '20h',
    videoDuration: '4h 58m',
    level: 'Beginner',
    desc: 'Protect networks and user data from dangerous digital threats.',
    students: 7300
  },
  {
    cat: 'Popular Courses',
    title: 'Mobile App Development',
    url: 'https://youtube.com/watch?v=fis26HvvDII',
    icon: '📱',
    bg: '#f0fdf4',
    rating: 4.6,
    hours: '22h',
    videoDuration: '11h 36m',
    level: 'Intermediate',
    desc: 'Build high-performance cross-platform applications for iOS and Android.',
    students: 5400
  },

  // Trending
  {
    cat: 'Trending Now',
    title: 'Generative AI Masterclass',
    url: 'https://youtube.com/watch?v=mEsleV16qdo',
    icon: '✨',
    bg: '#fdf4ff',
    rating: 4.9,
    hours: '12h',
    videoDuration: '1d 6h 18m',
    level: 'Advanced',
    desc: 'Build and fine-tune state-of-the-art generative AI pipelines.',
    students: 14100
  },
  {
    cat: 'Trending Now',
    title: 'Cybersecurity Fundamentals',
    url: 'https://youtube.com/watch?v=U_P23SqJaDc',
    icon: '🔐',
    bg: '#fef2f2',
    rating: 4.7,
    hours: '20h',
    videoDuration: '4h 58m',
    level: 'Beginner',
    desc: 'Protect networks and user data from dangerous digital threats.',
    students: 7300
  },
  {
    cat: 'Trending Now',
    title: 'Digital Marketing',
    url: 'https://youtube.com/watch?v=nU-IIXBWlS4',
    icon: '📣',
    bg: '#fff7ed',
    rating: 4.5,
    hours: '16h',
    videoDuration: '10h 50m',
    level: 'Beginner',
    desc: 'Master SEO, SEM, and modern online consumer acquisition strategies.',
    students: 9800
  },
  {
    cat: 'Trending Now',
    title: 'Blockchain Development',
    url: 'https://youtube.com/watch?v=gyMwXuJrbJQ',
    icon: '⛓',
    bg: '#f0fdf4',
    rating: 4.6,
    hours: '18h',
    videoDuration: '1d 7h 54m',
    level: 'Advanced',
    desc: 'Write robust smart contracts and build decentralized apps (dApps).',
    students: 3900
  },
  {
    cat: 'Trending Now',
    title: 'DevOps Engineering',
    url: 'https://youtube.com/watch?v=0yWAtQ6wYNM',
    icon: '⚙',
    bg: '#f1f5f9',
    rating: 4.8,
    hours: '24h',
    videoDuration: '35m',
    level: 'Intermediate',
    desc: 'Automate software deployments utilizing Docker, Kubernetes, and CI/CD.',
    students: 6200
  },
  {
    cat: 'Trending Now',
    title: 'Ethical Hacking',
    url: 'https://youtube.com/watch?v=3Kq1MIfTWCE',
    icon: '🕵',
    bg: '#1a1a2e',
    color: '#fff',
    rating: 4.7,
    hours: '20h',
    videoDuration: '14h 51m',
    level: 'Advanced',
    desc: 'Conduct penetration testing to legally identify system vulnerabilities.',
    students: 8100
  },
  {
    cat: 'Trending Now',
    title: 'AI Agent Development',
    url: 'https://youtube.com/watch?v=F8NKVhkZZWI',
    icon: '🤖',
    bg: '#ede9fe',
    rating: 4.9,
    hours: '14h',
    videoDuration: '12m',
    level: 'Advanced',
    desc: 'Design autonomous software agents driven by large language models.',
    students: 11200
  },
  {
    cat: 'Trending Now',
    title: 'Prompt Engineering Pro',
    url: 'https://youtube.com/watch?v=dOxUroR57xs',
    icon: '💬',
    bg: '#fef9c3',
    rating: 4.8,
    hours: '10h',
    videoDuration: '1h 4m',
    level: 'Intermediate',
    desc: 'Advanced prompt design patterns, chains, and multi-turn layouts.',
    students: 5700
  },

  // Recently Added
  {
    cat: 'Recently Added',
    title: 'Photography Fundamentals',
    url: 'https://youtube.com/watch?v=V7z7BAZdt2M',
    icon: '📷',
    bg: '#f1f5f9',
    rating: 4.6,
    hours: '12h',
    videoDuration: '11m',
    level: 'Beginner',
    desc: 'Control your camera exposure, framing, and dynamic lighting styles.',
    students: 2300
  },
  {
    cat: 'Recently Added',
    title: 'Blender 3D Modeling',
    url: 'https://youtube.com/watch?v=nIoXOplUvAw',
    icon: '🎲',
    bg: '#fff7ed',
    rating: 4.7,
    hours: '20h',
    videoDuration: '16m',
    level: 'Intermediate',
    desc: 'Shape and sculpt beautiful objects and low-poly environments.',
    students: 3100
  },
  {
    cat: 'Recently Added',
    title: 'Video Editing Masterclass',
    url: 'https://youtube.com/watch?v=8eDsvKwM40U',
    icon: '🎬',
    bg: '#fdf2f8',
    rating: 4.6,
    hours: '18h',
    videoDuration: '2h 26m',
    level: 'Beginner',
    desc: 'Cut compelling video projects using timeline best practices.',
    students: 4500
  },
  {
    cat: 'Recently Added',
    title: 'Motion Graphics & Animation',
    url: 'https://www.youtube.com/watch?v=0iaodKMxxWc',
    icon: '🎞',
    bg: '#ede9fe',
    rating: 4.5,
    hours: '16h',
    videoDuration: '35m',
    level: 'Intermediate',
    desc: 'Bring static interface elements to life using vector animation.',
    students: 2800
  },
  {
    cat: 'Recently Added',
    title: 'Adobe Photoshop Essentials',
    url: 'https://youtube.com/watch?v=IyR_uYsRdPs',
    icon: '🖼',
    bg: '#e0f2fe',
    rating: 4.7,
    hours: '14h',
    videoDuration: '3h 7m',
    level: 'Beginner',
    desc: 'Master layer masking, canvas sizing, and foundational asset design.',
    students: 6100
  },
  {
    cat: 'Recently Added',
    title: 'Content Creation Masterclass',
    url: 'https://www.youtube.com/watch?v=EwVfILFo1wQ',
    icon: '📝',
    bg: '#f0fdf4',
    rating: 4.5,
    hours: '10h',
    videoDuration: '3h 5m',
    level: 'Beginner',
    desc: 'Write scripts and establish a structured pipeline for publishing.',
    students: 3400
  },

  // Development
  {
    cat: 'Development',
    title: 'Full Stack Web Development for Beginners',
    url: 'https://youtube.com/watch?v=nu_pCVPKzTk',
    icon: '🌐',
    bg: '#e0f2fe',
    rating: 4.8,
    hours: '40h',
    videoDuration: '7h 29m',
    level: 'Beginner',
    desc: 'Master HTML, CSS, JavaScript, and Node.js from scratch.',
    students: 12500
  },
  {
    cat: 'Development',
    title: 'Next.js Full Course 2024',
    url: 'https://youtube.com/watch?v=wm5gMKuwSYk',
    icon: '⚛',
    bg: '#eef2ff',
    rating: 4.7,
    hours: '28h',
    videoDuration: '3h 26m',
    level: 'Intermediate',
    desc: 'Build scalable full-stack React applications with Next.js.',
    students: 9200
  },
  {
    cat: 'Development',
    title: 'Python Full Course for Beginners',
    url: 'https://youtube.com/watch?v=_uQrJ0TkZlc',
    icon: '🐍',
    bg: '#fef9c3',
    rating: 4.8,
    hours: '32h',
    videoDuration: '6h 14m 07s',
    level: 'Beginner',
    desc: 'Go from absolute zero to building your first Python applications.',
    students: 15300
  },
  {
    cat: 'Development',
    title: 'Java Programming Essentials',
    url: 'https://youtube.com/watch?v=eIrMbAQSU34',
    icon: '☕',
    bg: '#fff7ed',
    rating: 4.6,
    hours: '25h',
    videoDuration: '2h 30m',
    level: 'Beginner',
    desc: 'Master object-oriented programming concepts using Java.',
    students: 10200
  },
  {
    cat: 'Development',
    title: 'C++ Programming',
    url: 'https://youtube.com/watch?v=vLnPwxZdW4Y',
    icon: '⚡',
    bg: '#fdf2f8',
    rating: 4.5,
    hours: '20h',
    videoDuration: '4h 1m',
    level: 'Intermediate',
    desc: 'Deepen system-level execution speed memory management principles.',
    students: 4800
  },
  {
    cat: 'Development',
    title: 'Data Structures & Algorithms',
    url: 'https://youtube.com/watch?v=8hly31xKli0',
    icon: '🔢',
    bg: '#f0fdf4',
    rating: 4.9,
    hours: '30h',
    videoDuration: '5h 22m',
    level: 'Advanced',
    desc: 'Optimize custom backend processes for performance and technical interviews.',
    students: 13900
  },
  {
    cat: 'Development',
    title: 'Node.js Backend Development',
    url: 'https://youtube.com/watch?v=Oe421EPjeBE',
    icon: '🟢',
    bg: '#f0fdf4',
    rating: 4.7,
    hours: '22h',
    videoDuration: '8h 16m',
    level: 'Intermediate',
    desc: 'Manage asynchronous servers and production database connectors.',
    students: 7900
  },
  {
    cat: 'Development',
    title: 'TypeScript Complete Guide',
    url: 'https://youtube.com/watch?v=30LWjhZzg50',
    icon: '🔷',
    bg: '#eef2ff',
    rating: 4.8,
    hours: '18h',
    videoDuration: '4h 46m',
    level: 'Intermediate',
    desc: 'Incorporate strict static typing safety to eliminate runtime JavaScript bugs.',
    students: 6600
  },
  {
    cat: 'Development',
    title: 'REST API Development',
    url: 'https://youtube.com/watch?v=GZvSYJDk-us',
    icon: '🔗',
    bg: '#f1f5f9',
    rating: 4.6,
    hours: '14h',
    videoDuration: '2h 19m',
    level: 'Intermediate',
    desc: 'Architect robust routing, secure middlewares, and data patterns.',
    students: 5300
  },
  {
    cat: 'Development',
    title: 'Software Engineering Fundamentals',
    url: 'https://youtube.com/watch?v=AKeUssuu3Is',
    icon: '💻',
    bg: '#ede9fe',
    rating: 4.7,
    hours: '16h',
    videoDuration: '10h 1m',
    level: 'Beginner',
    desc: 'Learn agile sprints, system architectures, and git delivery patterns.',
    students: 8400
  },

  // AI
  {
    cat: 'Artificial Intelligence',
    title: 'Prompt Engineering Tutorial – Master ChatGPT and LLM Responses',
    url: 'https://youtube.com/watch?v=_ZvnD73m40o',
    icon: '🤖',
    bg: '#f0fdf4',
    rating: 4.9,
    hours: '18h',
    videoDuration: '41m 36s',
    level: 'Beginner',
    desc: 'Learn the art of crafting powerful prompts for AI models.',
    students: 8400
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Machine Learning with Python',
    url: 'https://youtube.com/watch?v=i_LwzRVP7bg',
    icon: '🧠',
    bg: '#fef9c3',
    rating: 4.9,
    hours: '35h',
    videoDuration: '3h 53m',
    level: 'Advanced',
    desc: 'Dive into predictive algorithms, regressions, and classification tasks.',
    students: 7600
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Deep Learning Fundamentals',
    url: 'https://youtube.com/watch?v=aircAruvnKk',
    icon: '🔬',
    bg: '#ede9fe',
    rating: 4.8,
    hours: '28h',
    videoDuration: '18m',
    level: 'Advanced',
    desc: 'Train structural neural network frameworks on visual and text data.',
    students: 4200
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Generative AI Masterclass',
    url: 'https://youtube.com/watch?v=mEsleV16qdo',
    icon: '✨',
    bg: '#fdf4ff',
    rating: 4.9,
    hours: '12h',
    videoDuration: '1d 6h 18m',
    level: 'Advanced',
    desc: 'Build and fine-tune state-of-the-art generative AI pipelines.',
    students: 14100
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Computer Vision Basics',
    url: 'https://youtube.com/watch?v=01sAkU_NvOY',
    icon: '👁',
    bg: '#e0f2fe',
    rating: 4.7,
    hours: '20h',
    videoDuration: '6h 40m',
    level: 'Intermediate',
    desc: 'Process visual frameworks via image classification and edge detection models.',
    students: 3100
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Natural Language Processing',
    url: 'https://youtube.com/watch?v=fOvTtapxa9c',
    icon: '💬',
    bg: '#f1f5f9',
    rating: 4.8,
    hours: '22h',
    videoDuration: '11m',
    level: 'Advanced',
    desc: 'Tokenize text strings and engineer language parsing mechanisms.',
    students: 2900
  },
  {
    cat: 'Artificial Intelligence',
    title: 'AI Agent Development',
    url: 'https://youtube.com/watch?v=F8NKVhkZZWI',
    icon: '🤖',
    bg: '#ede9fe',
    rating: 4.9,
    hours: '14h',
    videoDuration: '12m',
    level: 'Advanced',
    desc: 'Design autonomous software agents driven by large language models.',
    students: 11200
  },
  {
    cat: 'Artificial Intelligence',
    title: 'Data Science Bootcamp',
    url: 'https://youtube.com/watch?v=ua-CiDNNj30',
    icon: '📊',
    bg: '#fef9c3',
    rating: 4.7,
    hours: '30h',
    videoDuration: '5h 52m',
    level: 'Intermediate',
    desc: 'Analyze complex datasets and generate interactive visual insights.',
    students: 8900
  },

  // Design
  {
    cat: 'Design & Creativity',
    title: 'UI/UX Design Mastery',
    url: 'https://youtube.com/watch?v=c9Wg6Cb_YlU',
    icon: '🎨',
    bg: '#fdf2f8',
    rating: 4.8,
    hours: '20h',
    videoDuration: '1h 6m',
    level: 'Beginner',
    desc: 'Understand the fundamentals of user research and wireframing.',
    students: 11400
  },
  {
    cat: 'Design & Creativity',
    title: 'Figma Complete Course',
    url: 'https://youtube.com/watch?v=jwCmIBJ8Jtc',
    icon: '✏',
    bg: '#eef2ff',
    rating: 4.9,
    hours: '16h',
    videoDuration: '10h 16m',
    level: 'Beginner',
    desc: 'Map structural user interface designs, dynamic styles, and component systems.',
    students: 12100
  },
  {
    cat: 'Design & Creativity',
    title: 'Graphic Design Essentials',
    url: 'https://youtube.com/watch?v=WONZVnlam6U',
    icon: '🖌',
    bg: '#fff7ed',
    rating: 4.6,
    hours: '14h',
    videoDuration: '3m',
    level: 'Beginner',
    desc: 'Analyze balance, visual hierarchies, color profiles, and typography.',
    students: 5900
  },
  {
    cat: 'Design & Creativity',
    title: 'Motion Graphics & Animation',
    url: 'https://www.youtube.com/watch?v=0iaodKMxxWc',
    icon: '🎞',
    bg: '#ede9fe',
    rating: 4.5,
    hours: '16h',
    videoDuration: '35m',
    level: 'Intermediate',
    desc: 'Bring static interface elements to life using vector animation.',
    students: 2800
  },
  {
    cat: 'Design & Creativity',
    title: 'Adobe Photoshop Masterclass',
    url: 'https://youtube.com/watch?v=IyR_uYsRdPs',
    icon: '🖼',
    bg: '#e0f2fe',
    rating: 4.7,
    hours: '18h',
    videoDuration: '3h 7m',
    level: 'Intermediate',
    desc: 'Master asset composite maps, image manipulations, and complex brushes.',
    students: 6100
  },
  {
    cat: 'Design & Creativity',
    title: 'Adobe Illustrator Fundamentals',
    url: 'https://youtube.com/watch?v=Ib8UBwu3yGA',
    icon: '🎭',
    bg: '#fff7ed',
    rating: 4.6,
    hours: '12h',
    videoDuration: '3h 17m',
    level: 'Beginner',
    desc: 'Form modern vector patterns, typography maps, and corporate branding.',
    students: 4400
  },
  {
    cat: 'Design & Creativity',
    title: 'Photography Fundamentals',
    url: 'https://youtube.com/watch?v=V7z7BAZdt2M',
    icon: '📷',
    bg: '#f1f5f9',
    rating: 4.6,
    hours: '12h',
    videoDuration: '11m',
    level: 'Beginner',
    desc: 'Control your camera exposure, framing, and dynamic lighting styles.',
    students: 2300
  },
  {
    cat: 'Design & Creativity',
    title: 'Video Editing Masterclass',
    url: 'https://youtube.com/watch?v=8eDsvKwM40U',
    icon: '🎬',
    bg: '#fdf2f8',
    rating: 4.6,
    hours: '18h',
    videoDuration: '2h 26m',
    level: 'Beginner',
    desc: 'Cut compelling video projects using timeline best practices.',
    students: 4500
  },
  {
    cat: 'Design & Creativity',
    title: '3D Modeling with Blender',
    url: 'https://youtube.com/watch?v=nIoXOplUvAw',
    icon: '🎲',
    bg: '#fff7ed',
    rating: 4.7,
    hours: '20h',
    videoDuration: '16m',
    level: 'Intermediate',
    desc: 'Shape and sculpt beautiful objects and low-poly environments.',
    students: 3100
  },

  // Business
  {
    cat: 'Business & Marketing',
    title: 'Digital Marketing Strategy',
    url: 'https://youtube.com/watch?v=nU-IIXBWlS4',
    icon: '📣',
    bg: '#fff7ed',
    rating: 4.5,
    hours: '16h',
    videoDuration: '10h 15m',
    level: 'Beginner',
    desc: 'Leverage multichannel ad funnels to sustainably capture new audiences.',
    students: 7200
  },
  {
    cat: 'Business & Marketing',
    title: 'SEO Fundamentals',
    url: 'https://youtube.com/watch?v=xsVTqzratPs',
    icon: '🔍',
    bg: '#f0fdf4',
    rating: 4.4,
    hours: '10h',
    videoDuration: '1h 57m',
    level: 'Beginner',
    desc: 'Structure keyword hierarchies to rank organically on engine indexes.',
    students: 6500
  },
  {
    cat: 'Business & Marketing',
    title: 'Social Media Marketing',
    url: 'https://www.youtube.com/watch?v=1WTD-V2F_N8',
    icon: '📲',
    bg: '#fdf2f8',
    rating: 4.5,
    hours: '12h',
    videoDuration: '25m',
    level: 'Beginner',
    desc: 'Plan asset calendars and build community retention indicators.',
    students: 8300
  },
  {
    cat: 'Business & Marketing',
    title: 'Business Analytics',
    url: 'https://youtube.com/watch?v=HXV3zeQKqGY',
    icon: '📈',
    bg: '#eef2ff',
    rating: 4.6,
    hours: '20h',
    videoDuration: '4h 20m',
    level: 'Intermediate',
    desc: 'Data-driven decisions for business growth.',
    students: 4900
  },
  {
    cat: 'Business & Marketing',
    title: 'Entrepreneurship Essentials',
    url: 'https://www.youtube.com/watch?v=9VlvbpXwLJs',
    icon: '🚀',
    bg: '#fef9c3',
    rating: 4.5,
    hours: '14h',
    videoDuration: '2h 26m',
    level: 'Intermediate',
    desc: 'Validate unique market fits, model finances, and draft pitches.',
    students: 3800
  },
  {
    cat: 'Business & Marketing',
    title: 'Project Management Professional',
    url: 'https://youtube.com/watch?v=GC7pN8Mjot8',
    icon: '📋',
    bg: '#f1f5f9',
    rating: 4.7,
    hours: '18h',
    videoDuration: '53m',
    level: 'Intermediate',
    desc: 'Organize dynamic task roadmaps across engineering groups.',
    students: 5400
  },
  {
    cat: 'Business & Marketing',
    title: 'Personal Finance & Investing',
    url: 'https://www.youtube.com/watch?v=vJabNEwZIuc',
    icon: '💰',
    bg: '#f0fdf4',
    rating: 4.6,
    hours: '12h',
    videoDuration: '54m',
    level: 'Beginner',
    desc: 'Understand diversified asset configurations and compounding tools.',
    students: 9600
  },
  {
    cat: 'Business & Marketing',
    title: 'Sales & Negotiation Skills',
    url: 'https://www.youtube.com/watch?v=NxsVb08vDmI',
    icon: '🤝',
    bg: '#fff7ed',
    rating: 4.4,
    hours: '10h',
    videoDuration: '12m',
    level: 'Intermediate',
    desc: 'Manage pipelines and discover value-add alignments with clients.',
    students: 4100
  }
];

const enrichedCourses = allCourses.map(c => ({...c, image: getThumb(c.title)}));

const CONTINUE_LEARNING = enrichedCourses.filter(c => c.cat === 'Continue Learning');
const POPULAR_COURSES = enrichedCourses.filter(c => c.cat === 'Popular Courses');

const COURSE_SECTIONS = [];
const grouped = {};
enrichedCourses.forEach(c => {
  if (c.cat !== 'Continue Learning' && c.cat !== 'Popular Courses' && c.cat !== 'Trending Now' && c.cat !== 'Recently Added') {
    if (!grouped[c.cat]) grouped[c.cat] = [];
    grouped[c.cat].push(c);
  }
});
for (const cat in grouped) {
  COURSE_SECTIONS.push({ cat, courses: grouped[cat] });
}

let orig = fs.readFileSync('c:/Users/tamba/Downloads/indexxxx/edu/src/components/home-page/data.js', 'utf8');

let navPart = orig.substring(0, orig.indexOf('export const CONTINUE_LEARNING'));
let botPart = orig.substring(orig.indexOf('export const GRADEBOOK_ROWS'));

const clStr = 'export const CONTINUE_LEARNING = ' + JSON.stringify(CONTINUE_LEARNING, null, 2) + ';\n\n';
const pStr = 'export const POPULAR_COURSES = ' + JSON.stringify(POPULAR_COURSES, null, 2) + ';\n\n';
const sStr = 'export const COURSE_SECTIONS = ' + JSON.stringify(COURSE_SECTIONS, null, 2) + ';\n\n';
const recStr = 'export const RECENTLY_VIEWED = CONTINUE_LEARNING.slice(0, 3).map(c => ({\n  title: c.title,\n  icon: c.icon,\n  progress: c.progress,\n  bg: c.bg\n}));\n\n';

botPart = botPart.replace(/export const RECENTLY_VIEWED[\s\S]*?(?=export const SUBTITLES)/, recStr);

const newContent = navPart + clStr + pStr + sStr + botPart;

fs.writeFileSync('c:/Users/tamba/Downloads/indexxxx/edu/src/components/home-page/data.js', newContent);
console.log('done');
