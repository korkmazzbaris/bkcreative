const projects = [
  {
    id: "amphi",
    title: "Amphi Social",
    category: "Sosyal Medya Yönetimi",
    description: "Amphi Social sosyal medya hesabı için oluşturduğum post tasarımları. Modern ve etkileyici görsellerle marka kimliğini güçlendiren, kullanıcı etkileşimini artıran tasarımlar. Adobe Illustrator, Photoshop ve Canva kullanılarak hazırlanmıştır.",
    image: "img/amphi-sunum.jpg",
    tags: ["Adobe Illustrator", "Adobe Photoshop", "Canva"]
  },
  {
    id: "nesin",
    title: "Nesin Sanat Köyü",
    category: "UI/UX Tasarımı",
    description: "Nesin Sanat Köyü için hazırlamış olduğum landing page tasarımı. Minimal ve şık bir tasarım yaklaşımı benimsenerek, kullanıcı deneyimini ön planda tutan modern bir arayüz oluşturuldu. Figma üzerinden tasarlanmıştır.",
    image: "img/nmk-sunum.jpg",
    tags: ["Figma"]
  },
  {
    id: "homeros",
    title: "Homeros",
    category: "UI/UX Tasarımı",
    description: "Custom GPT olan Homeros için gerçekleştirmiş olduğum minimal ana sayfa tasarımı. Kullanıcı dostu ve temiz bir arayüz ile AI destekli hizmetin öne çıkarılması hedeflenmiştir. Figma kullanılarak tasarlanmıştır.",
    image: "img/homeros-sunum.jpg",
    tags: ["Figma"]
  },
  {
    id: "tedsa",
    title: "Sakarya Ted Koleji - TEDSA",
    category: "Video Kurgu",
    description: "NASA SPACEAPP CHALLENGE yarışmasında Sakarya Ted Koleji ekibi TEDSA'ya 1.lik kazandıran projenin hikayesi. Adobe Premiere Pro ve After Effects kullanılarak hazırlanan etkileyici video kurgu çalışması.",
    video: "img/7GU38aiTXOo71k5Pf9.mp4",
    tags: ["Adobe Premiere Pro", "Adobe After Effects"]
  },
  {
    id: "kidonki",
    title: "Kidonki",
    category: "UI/UX Tasarımı",
    description: "Booking projesi için gerçekleştirdiğim arayüz tasarımı. Kullanıcı deneyimini optimize eden, modern ve işlevsel bir tasarım yaklaşımı benimsenmiştir. Figma ve Adobe XD kullanılarak hazırlanmıştır.",
    image: "img/kidonki-sunum.jpg",
    tags: ["Figma", "Adobe XD"]
  },
  {
    id: "cpr-logistic",
    title: "CPR Logistic",
    category: "Sosyal Medya Yönetimi",
    description: "Lojistik şirketi için hazırlamış olduğum sosyal medya post tasarımları. Modern ve etkileyici görsellerle marka kimliğini güçlendiren, kullanıcı etkileşimini artıran tasarımlar.",
    image: "img/cpr-sunum.jpg",
    tags: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "broccoli-app",
    title: "Broccoli Mobile App",
    category: "UI/UX Tasarımı",
    description: "Broccoli App bir diyet uygulamasıdır. Ben de bu uygulamanın arayüzünü tasarladım.",
    image: "img/broccoli-sunum.jpg",
    tags: ["Figma"]
  },
  {
    id: "dentalbuddy",
    title: "DentalBuddy",
    category: "UI/UX Tasarımı",
    description: "DentalBuddy için hazırlamış olduğum landing page tasarımı.",
    image: "img/dentalbuddy-sunum.jpg",
    tags: ["Figma"]
  },
  {
    id: "amphi-landing",
    title: "Amphi Social Landing Page",
    category: "UI/UX Tasarımı",
    description: "Amphi Social için hazırlamış olduğum ana sayfa tasarımı. Modern ve etkileyici bir landing page ile marka kimliğini güçlendiren tasarım. Figma üzerinden gerçekleştirilmiştir.",
    image: "img/amphi-landing-sunum.jpg",
    tags: ["Figma"]
  },
  {
    id: "golden-mane",
    title: "GoldenMane Services",
    category: "Kurumsal Kimlik Tasarımı",
    description: "Bir temizlik şirketi olan GoldenMane için hazırlamış olduğum logo tasarımı. Kurumsal kimlik tasarımı kapsamında, marka değerlerini yansıtan profesyonel bir logo oluşturulmuştur. Adobe Illustrator ve Photoshop kullanılarak tasarlanmıştır.",
    image: "img/goldenmane-sunum.jpg",
    tags: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "patern",
    title: "Patern Eğitim",
    category: "Kurumsal Kimlik Tasarımı",
    description: "Patern Eğitim için hazırlamış olduğum antetli kağıt çalışmaları. Kurumsal kimlik tasarımı kapsamında, profesyonel görünüm sağlayan antetli kağıt tasarımları. Adobe Illustrator kullanılarak hazırlanmıştır.",
    image: "img/patern.jpg",
    tags: ["Adobe Illustrator"]
  }
];

// Dışa aktarım
if (typeof window !== 'undefined') {
  window.projects = projects;
} 