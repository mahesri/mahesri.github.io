(() => {
  const words = {
    "Language":"Bahasa","Home":"Beranda","About Me":"Tentang Saya","Services":"Layanan","Contact":"Kontak",
    "PHP DEVELOPER · CONTENT CREATOR · TECH ENTHUSIAST":"DEVELOPER PHP · KREATOR KONTEN · PENCINTA TEKNOLOGI",
    "I Build for the Web.":"Saya Membangun untuk Web.","I Create for People.":"Saya Berkarya untuk Sesama.",
    "Hello, I'm Riyadi — a PHP developer and content creator. I build web experiences and create content, sharing ideas shaped by technology and creativity.":"Halo, saya Riyadi — developer PHP dan kreator konten. Saya membangun pengalaman web dan membuat konten, berbagi gagasan yang terinspirasi teknologi dan kreativitas.",
    "Explore My Services":"Jelajahi Layanan","More About Me":"Tentang Saya","Contact Me":"Hubungi Saya",
    "GET TO KNOW ME":"KENALI SAYA","Code, Content & Curiosity":"Kode, Konten & Rasa Ingin Tahu",
    "Readi here. I am a PHP developer, content creator, and tech enthusiast with more than six years of experience in social media. My work in the creative industry has also helped me develop skills in copywriting, digital content, and communication.":"Saya Readi, seorang developer PHP, kreator konten, dan pencinta teknologi dengan pengalaman lebih dari enam tahun di media sosial. Pengalaman di industri kreatif juga mengasah kemampuan saya dalam penulisan naskah, konten digital, dan komunikasi.",
    "I am also completing my bachelor's degree in Informatics Engineering. My interest in technology began in 2019, when I started exploring how to build web-based systems.":"Saya juga sedang menyelesaikan studi S1 Teknik Informatika. Ketertarikan saya pada teknologi dimulai pada 2019, saat mulai mempelajari cara membangun sistem berbasis web.",
    "I enjoy combining creative ideas with technical solutions to create meaningful digital experiences.":"Saya senang memadukan ide kreatif dengan solusi teknis untuk menciptakan pengalaman digital yang bermakna.","Let's connect":"Mari terhubung",
    "WHAT I CAN DO":"YANG BISA SAYA KERJAKAN","My Services":"Layanan Saya","Creative services designed to bring your ideas to life.":"Layanan kreatif untuk membantu mewujudkan ide Anda.",
    "Web Development":"Pengembangan Web","Custom, responsive websites built for your personal brand or business.":"Website responsif yang dirancang khusus untuk personal brand atau bisnis Anda.",
    "Videography & Content":"Videografi & Konten","Video content for personal profiles, product presentations, and social media.":"Konten video untuk profil pribadi, presentasi produk, dan media sosial.",
    "Social Media Management":"Pengelolaan Media Sosial","Content planning and account management for Instagram, TikTok, and Facebook.":"Perencanaan konten dan pengelolaan akun Instagram, TikTok, dan Facebook.",
    "Photography & Event Coverage":"Fotografi & Dokumentasi Acara","Photography for products, weddings, and event documentation.":"Fotografi produk, pernikahan, dan dokumentasi berbagai acara.",
    "Pricing varies with project scope and deliverables; contact me for a custom quote.":"Harga menyesuaikan cakupan dan hasil proyek; hubungi saya untuk penawaran khusus.",
    "HAVE A PROJECT IN MIND?":"PUNYA PROYEK?","Let's Talk":"Mari Bicara","Have an idea or project? I'd love to hear from you.":"Punya ide atau proyek? Saya ingin mendengarnya.",
    "Let's create something meaningful.":"Mari ciptakan sesuatu yang bermakna.","Tell me about your idea, project, or collaboration. We can discuss how to bring it to life.":"Ceritakan ide, proyek, atau rencana kolaborasi Anda. Mari diskusikan cara mewujudkannya.",
    "I’m currently based in Yogyakarta, Indonesia. Here are a few selected projects from my portfolio.":"Saya berdomisili di Yogyakarta, Indonesia. Berikut beberapa proyek pilihan dari portofolio saya.",
    "01 · WEB DEVELOPMENT":"01 · PENGEMBANGAN WEB","Portfolio Website":"Website Portofolio","A web-based decision support system that helps you explore and rank career options using the Analytic Hierarchy Process (AHP).":"Sistem pendukung keputusan berbasis web untuk mengeksplorasi dan mengurutkan pilihan karier dengan metode Analytic Hierarchy Process (AHP).",
    "02 · VIDEOGRAPHY":"02 · VIDEOGRAFI","Video & Content":"Video & Konten","Video storytelling for personal profiles, products, and social media.":"Cerita visual dalam bentuk video untuk profil pribadi, produk, dan media sosial.",
    "03 · SOCIAL MEDIA":"03 · MEDIA SOSIAL","Social Content":"Konten Media Sosial","Creative content and account support for Instagram, TikTok, and Facebook.":"Konten kreatif dan dukungan pengelolaan akun Instagram, TikTok, dan Facebook.",
    "04 · PHOTOGRAPHY":"04 · FOTOGRAFI","Photo & Event Work":"Fotografi & Acara","Product, wedding, and event photography documentation.":"Fotografi produk, pernikahan, dan dokumentasi acara.",
    "Your Name":"Nama Anda","Enter your name":"Masukkan nama Anda","Email Address":"Alamat Email","Phone Number (Optional)":"Nomor Telepon (Opsional)","Enter your phone number":"Masukkan nomor telepon Anda","Your Message":"Pesan Anda","Tell me about your project":"Ceritakan tentang proyek Anda","Send a Message":"Kirim Pesan",
    "Creative ideas. Thoughtful solutions. Meaningful experiences.":"Ide kreatif. Solusi matang. Pengalaman bermakna.",
    "Open navigation menu":"Buka menu navigasi","Close navigation menu":"Tutup menu navigasi","Main navigation":"Navigasi utama","Scroll to About Me":"Gulir ke Tentang Saya",
    "Selected project work":"Pilihan proyek","Previous project":"Proyek sebelumnya","Choose a project":"Pilih proyek","Show project 1":"Tampilkan proyek 1","Show project 2":"Tampilkan proyek 2","Show project 3":"Tampilkan proyek 3","Show project 4":"Tampilkan proyek 4","Pause slideshow":"Jeda tayangan","Play slideshow":"Putar tayangan"
  };
  const attrs={"Open navigation menu":"Buka menu navigasi","Close navigation menu":"Tutup menu navigasi","Main navigation":"Navigasi utama","Riyadi Home":"Beranda Riyadi","Scroll to About Me":"Gulir ke Tentang Saya","Selected project work":"Pilihan proyek","Previous project":"Proyek sebelumnya","Choose a project":"Pilih proyek","Show project 1":"Tampilkan proyek 1","Show project 2":"Tampilkan proyek 2","Show project 3":"Tampilkan proyek 3","Show project 4":"Tampilkan proyek 4","Pause slideshow":"Jeda tayangan","Play slideshow":"Putar tayangan"};
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
