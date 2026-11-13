(() => {
  const words = {
    "Language":"Bahasa","Home":"Beranda","About Me":"Tentang Saya","Services":"Layanan","Contact":"Kontak",
    "PHP DEVELOPER · CONTENT CREATOR · TECH ENTHUSIAST":"DEVELOPER PHP · KREATOR KONTEN · ANTUSIAS TEKNOLOGI",
    "I Build for the Web.":"Saya membangun solusi digital.","I Create for People.":"Saya berbagi cerita lewat konten.",
    "Hello, I'm Riyadi — a PHP developer and content creator. I build web experiences and create content, sharing ideas shaped by technology and creativity.":"Hai, saya Riyadi—developer PHP dan kreator konten. Saya membuat website dan konten yang memadukan teknologi, kreativitas, dan ide-ide yang dekat dengan keseharian.",
    "Explore My Services":"Lihat Layanan Saya","More About Me":"Kenali Saya","Contact Me":"Mari Terhubung",
    "GET TO KNOW ME":"KENALI SAYA","Code, Content & Curiosity":"Antara Kode, Konten, dan Rasa Ingin Tahu",
    "Readi here. I am a PHP developer, content creator, and tech enthusiast with more than six years of experience in social media. My work in the creative industry has also helped me develop skills in copywriting, digital content, and communication.":"Hai, saya Readi. Saya developer PHP dan kreator konten, dengan pengalaman lebih dari enam tahun di bidang media sosial. Pengalaman di industri kreatif juga mengasah kemampuan saya dalam copywriting, produksi konten digital, dan komunikasi.",
    "I am also completing my bachelor's degree in Informatics Engineering. My interest in technology began in 2019, when I started exploring how to build web-based systems.":"Saya juga sedang menyelesaikan studi S1 Teknik Informatika. Ketertarikan saya pada teknologi tumbuh sejak 2019, saat saya mulai belajar membangun sistem berbasis web.",
    "I enjoy combining creative ideas with technical solutions to create meaningful digital experiences.":"Saya senang menggabungkan ide kreatif dan solusi teknologi untuk menghadirkan pengalaman digital yang berguna dan berkesan.","Let's connect":"Mari terhubung",
    "WHAT I CAN DO":"LAYANAN YANG BISA SAYA BANTU","My Services":"Layanan Saya","Creative services designed to bring your ideas to life.":"Layanan kreatif dan digital yang membantu mewujudkan ide Anda.",
    "Web Development":"Pengembangan Web","Custom, responsive websites built for your personal brand or business.":"Website responsif yang dirancang sesuai kebutuhan personal brand maupun bisnis Anda.",
    "Videography & Content":"Videografi & Konten","Video content for personal profiles, product presentations, and social media.":"Video untuk memperkenalkan diri, menampilkan produk, atau mengisi konten media sosial.",
    "Social Media Management":"Pengelolaan Media Sosial","Content planning and account management for Instagram, TikTok, and Facebook.":"Saya bantu merencanakan konten dan mengelola akun Instagram, TikTok, serta Facebook.",
    "Photography & Event Coverage":"Fotografi & Dokumentasi Acara","Photography for products, weddings, and event documentation.":"Foto produk, pernikahan, dan berbagai acara—dikemas dengan cerita yang berkesan.",
    "Pricing varies with project scope and deliverables; contact me for a custom quote.":"Biaya menyesuaikan kebutuhan dan cakupan proyek. Hubungi saya untuk mendiskusikan penawaran yang sesuai.",
    "HAVE A PROJECT IN MIND?":"ADA IDE YANG INGIN DIWUJUDKAN?","Let's Talk":"Mari Berdiskusi","Have an idea or project? I'd love to hear from you.":"Punya ide atau proyek? Saya ingin mendengar ceritanya.",
    "Let's create something meaningful.":"Mari wujudkan ide Anda.","Tell me about your idea, project, or collaboration. We can discuss how to bring it to life.":"Ceritakan ide, proyek, atau rencana kolaborasi Anda. Kita bisa membahas langkah terbaik untuk mewujudkannya.",
    "I’m currently based in Yogyakarta, Indonesia. Here are a few selected projects from my portfolio.":"Saya berkarya dari Yogyakarta, Indonesia. Berikut beberapa proyek pilihan dari portofolio saya.",
    "01 · WEB DEVELOPMENT":"01 · PENGEMBANGAN WEB","Portfolio Website":"Website Portofolio","A web-based decision support system that helps you explore and rank career options using the Analytic Hierarchy Process (AHP).":"Sistem pendukung keputusan berbasis web yang membantu menjelajahi dan menyusun prioritas pilihan karier dengan metode Analytic Hierarchy Process (AHP).",
    "02 · VIDEOGRAPHY":"02 · VIDEOGRAFI","Video & Content":"Video & Konten","Video storytelling for personal profiles, products, and social media.":"Video untuk memperkenalkan profil, menampilkan produk, dan berbagi cerita di media sosial.",
    "03 · SOCIAL MEDIA":"03 · MEDIA SOSIAL","Social Content":"Konten Media Sosial","Creative content and account support for Instagram, TikTok, and Facebook.":"Konten kreatif untuk mendukung akun dan kampanye di Instagram, TikTok, dan Facebook.",
    "04 · PHOTOGRAPHY":"04 · FOTOGRAFI","Photo & Event Work":"Fotografi & Acara","Product, wedding, and event photography documentation.":"Dokumentasi fotografi produk, pernikahan, dan berbagai acara.",
    "Your Name":"Nama","Enter your name":"Masukkan nama","Email Address":"Email","Phone Number (Optional)":"Nomor telepon (opsional)","Enter your phone number":"Masukkan nomor telepon","Your Message":"Pesan","Tell me about your project":"Ceritakan sedikit tentang proyek Anda","Send a Message":"Kirim pesan",
    "Creative ideas. Thoughtful solutions. Meaningful experiences.":"Ide segar, solusi tepat, pengalaman digital yang berkesan.",
    "Riyadi. All rights reserved.":"Riyadi. Hak cipta dilindungi.",
    "Open navigation menu":"Buka menu navigasi","Close navigation menu":"Tutup menu navigasi","Main navigation":"Navigasi utama","Scroll to About Me":"Gulir ke Tentang Saya",
    "Selected project work":"Pilihan proyek","Previous project":"Proyek sebelumnya","Choose a project":"Pilih proyek","Show project 1":"Tampilkan proyek 1","Show project 2":"Tampilkan proyek 2","Show project 3":"Tampilkan proyek 3","Show project 4":"Tampilkan proyek 4","Pause slideshow":"Jeda tayangan","Play slideshow":"Putar tayangan"
  };
  const attrs={"Open navigation menu":"Buka menu navigasi","Close navigation menu":"Tutup menu navigasi","Main navigation":"Navigasi utama","Riyadi Home":"Beranda Riyadi","Scroll to About Me":"Gulir ke Tentang Saya","Selected project work":"Pilihan proyek","Previous project":"Proyek sebelumnya","Choose a project":"Pilih proyek","Show project 1":"Tampilkan proyek 1","Show project 2":"Tampilkan proyek 2","Show project 3":"Tampilkan proyek 3","Show project 4":"Tampilkan proyek 4","Pause slideshow":"Jeda tayangan","Play slideshow":"Putar tayangan","Next project":"Lihat proyek berikutnya"};
  const saved=localStorage.getItem("site-language");
  let lang=(saved==="id"||saved==="en")?saved:((navigator.language||"").toLowerCase().startsWith("id")?"id":"en");
  const english=new WeakMap();
  const collect=()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const out=[];while(w.nextNode())out.push(w.currentNode);return out;};
  const label=document.createElement("label");label.className="language-switch";label.innerHTML='<span>Language</span><select aria-label="Choose language"><option value="en">English</option><option value="id">Bahasa Indonesia</option></select>';
  const select=label.querySelector("select");select.value=lang;
  const nav=document.getElementById("navbar-nav");if(nav)nav.parentNode.insertBefore(label,nav);
  const apply=()=>{
    document.documentElement.lang=lang;
    collect().forEach(node=>{let original=english.get(node);if(original===undefined){original=node.nodeValue.replace(/\s+/g," ").trim();english.set(node,original);}if(words[original]){const lead=node.nodeValue.match(/^\s*/)?.[0]||"";const tail=node.nodeValue.match(/\s*$/)?.[0]||"";node.nodeValue=lead+(lang==="id"?words[original]:original)+tail;}});
    document.querySelectorAll("[aria-label]").forEach(el=>{if(!el.dataset.englishAria)el.dataset.englishAria=el.getAttribute("aria-label");const v=el.dataset.englishAria;if(attrs[v])el.setAttribute("aria-label",lang==="id"?attrs[v]:v);});
    document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el=>{if(!el.dataset.englishPlaceholder)el.dataset.englishPlaceholder=el.placeholder;const v=el.dataset.englishPlaceholder;const pair=Object.entries(words).find(([k])=>k===v);if(pair)el.placeholder=lang==="id"?pair[1]:v;});
    document.title=lang==="id"?"Portofolio Riyadi — Developer & Kreator Konten":"Ready me by Riyadi.dev";
    const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=lang==="id"?"Riyadi adalah developer PHP, kreator konten, dan pencinta teknologi yang membangun untuk web dan berbagi ide kreatif.":"Riyadi is a PHP developer, content creator, and tech enthusiast building for the web and sharing creative ideas.";
    select.setAttribute("aria-label",lang==="id"?"Pilih bahasa":"Choose language");
    label.querySelector("span").textContent=lang==="id"?"Bahasa":"Language";
  };
  select.addEventListener("change",()=>{lang=select.value;localStorage.setItem("site-language",lang);apply();});
  apply();
  const status=document.getElementById("form-status");if(status)new MutationObserver(()=>{const raw=status.textContent.trim();if(lang==="id"){const match=Object.entries(words).find(([en])=>en===raw);if(match&&match[1]!==raw)status.textContent=match[1];}else{const match=Object.entries(words).find(([,id])=>id===raw);if(match)status.textContent=match[0];}}).observe(status,{childList:true,characterData:true,subtree:true});
})();
