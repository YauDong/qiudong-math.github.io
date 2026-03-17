const content = {
  en: {
    siteName: "Dong Qiu",
    name: "Dong Qiu",
    cnName: "邱冬",
    aboutTitle: "About",
    bio: "I am a PhD Candidate in Mathematics at Zhejiang University. My research lies at the intersection of inverse problems, partial differential equations, scientific machine learning, and scientific computing, with a particular interest in inverse boundary value problems for nonlinear wave-type equations.",
    affiliation: "Zhejiang University",
    title: "PhD Candidate in Mathematics",
    interestsTitle: "Research Interests",
    linksTitle: "Links",
    contactTitle: "Contact",
    emailLabel: "Email",
    cvLabel: "CV",
    cvText: "Download CV",
    footerText: "Minimal academic homepage for research presentation and contact.",
    toggleText: "中文"
  },
  zh: {
    siteName: "邱冬",
    name: "邱冬",
    cnName: "Dong Qiu",
    aboutTitle: "个人简介",
    bio: "我目前为浙江大学数学博士研究生，研究兴趣主要包括反问题、偏微分方程、科学机器学习与科学计算，尤其关注非线性波动方程相关的反边值问题。",
    affiliation: "浙江大学",
    title: "数学博士研究生",
    interestsTitle: "研究方向",
    linksTitle: "相关链接",
    contactTitle: "联系方式",
    emailLabel: "邮箱",
    cvLabel: "简历",
    cvText: "下载简历",
    footerText: "用于学术展示与联系的极简学术主页。",
    toggleText: "English"
  }
};

let lang = "en";
const ids = ["siteName","name","cnName","aboutTitle","bio","affiliation","title","interestsTitle","linksTitle","contactTitle","emailLabel","cvLabel","cvText","footerText"];
const toggle = document.getElementById("langToggle");

function applyLang() {
  const t = content[lang];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  });
  document.querySelectorAll(".pill").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  toggle.textContent = t.toggleText;
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
}
toggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  applyLang();
});
applyLang();
