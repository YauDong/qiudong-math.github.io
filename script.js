const content = {
  en: {
    siteName: 'Dong Qiu',
    name: 'Dong Qiu',
    altName: '邱冬',
    about: 'About',
    bio: 'I am a PhD Candidate in Mathematics at Zhejiang University. My research lies at the intersection of inverse problems, partial differential equations, scientific machine learning, and scientific computing, with a particular interest in inverse boundary value problems for nonlinear wave-type equations.',
    affiliation: 'Zhejiang University',
    title: 'PhD Candidate in Mathematics',
    interestsTitle: 'Research Interests',
    interests: ['Inverse Problems', 'PDEs', 'Scientific Machine Learning', 'Scientific Computing'],
    linksTitle: 'Links',
    cvLabel: 'CV',
    cvText: 'Download CV',
    contactTitle: 'Contact',
    emailLabel: 'Email',
    footer: 'Minimal academic homepage for research presentation and contact.',
    toggle: '中文'
  },
  zh: {
    siteName: '邱冬',
    name: '邱冬',
    altName: 'Dong Qiu',
    about: '个人简介',
    bio: '我目前为浙江大学数学博士研究生，研究兴趣位于反问题、偏微分方程、科学机器学习与科学计算的交叉方向，尤其关注非线性波动方程相关的反边值问题。',
    affiliation: '浙江大学',
    title: '数学博士研究生',
    interestsTitle: '研究方向',
    interests: ['Inverse Problems', 'PDEs', 'Scientific Machine Learning', 'Scientific Computing'],
    linksTitle: '相关链接',
    cvLabel: '简历',
    cvText: '下载简历',
    contactTitle: '联系方式',
    emailLabel: '邮箱',
    footer: '用于学术展示与联系的极简学术主页。',
    toggle: 'English'
  }
};

let lang = 'en';

function render() {
  const t = content[lang];
  document.getElementById('site-name').textContent = t.siteName;
  document.getElementById('name').textContent = t.name;
  document.getElementById('alt-name').textContent = t.altName;
  document.getElementById('about-title-side').textContent = t.about;
  document.getElementById('bio').textContent = t.bio;
  document.getElementById('affiliation').textContent = t.affiliation;
  document.getElementById('title').textContent = t.title;
  document.getElementById('interests-title').textContent = t.interestsTitle;
  document.getElementById('links-title').textContent = t.linksTitle;
  document.getElementById('cv-label').textContent = t.cvLabel;
  document.getElementById('cv-text').textContent = t.cvText;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('email-label').textContent = t.emailLabel;
  document.getElementById('footer-text').textContent = t.footer;
  document.getElementById('lang-toggle').textContent = t.toggle;

  const interestsEl = document.getElementById('interests-list');
  interestsEl.innerHTML = '';
  t.interests.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'chip';
    div.textContent = item;
    interestsEl.appendChild(div);
  });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'zh' : 'en';
  render();
});

render();
