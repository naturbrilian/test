
const currentUrl = window.location.href;
const siteUrl = "https://naturbrilian.github.io";
let updatedUrl = currentUrl.replace("https://naturbrilian.github.io/test", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/test", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/test/";
    },
  },{id: "nav-friends",
          title: "friends",
          description: "List of my Friendlist",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/test/friends/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "Website owner side posts, tutorial and some collaboration or translation projects",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/test/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/test/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "I am a graphic designer and video editor who also knows about information technology, especially computers, operating systems, and others. I work at Kediri TV as a video editor and also as a contributor at Yuramedia as a graphic designer.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/test/cv/";
          },
        },{id: "nav-about",
          title: "about",
          description: "about me",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/test/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/test/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/test/blog/";
              },
            },{id: "dropdown-downloads",
              title: "downloads",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/test/downloads/";
              },
            },{id: "post-verifying-link-ownership-is-surprisingly-easy",
        
          title: "Verifying link ownership is surprisingly easy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2026/memverifikasi-kepemilikan-tautan-ternyata-mudah/";
          
        },
      },{id: "post-how-to-create-a-script-for-multi-color-support-on-your-own-skins",
        
          title: "How to create a script for multi-color support on your own skins",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2026/script-skin-tutorial/";
          
        },
      },{id: "post-at-the-end-of-the-year",
        
          title: "At the end of the year",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/di-penghujung-akhir-tahun/";
          
        },
      },{id: "post-what-are-the-characteristics-of-a-scammer",
        
          title: "What are the characteristics of a scammer?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/what-are-the-characteristics-of-a-scammer/";
          
        },
      },{id: "post-pengalaman-menyedihkan-saat-mau-open-komisi",
        
          title: "Pengalaman menyedihkan saat mau open komisi",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/pengalaman-menyedihkan-saat-mau-open-komisi/";
          
        },
      },{id: "post-karya-visual-novel-terbaru-dari-crystalia-nuansa-lagu-bergenre-edm-dan-cerita-berbalut-teknologi",
        
          title: "Karya Visual Novel terbaru dari Crystalia, nuansa lagu bergenre edm dan cerita berbalut...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/karya-visual-novel-terbaru-dari-crystalia-nuansa-lagu-bergenre-edm-dan-cerita-berbalut-teknologi/";
          
        },
      },{id: "post-sempat-frustasi-karena-masalah-driver-wifi-di-linux",
        
          title: "Sempat frustasi karena masalah driver wifi di Linux",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/sempat-frustasi/";
          
        },
      },{id: "post-permasalahan-502-bad-request-yang-sangat-mengganggu",
        
          title: "Permasalahan 502 bad request yang sangat mengganggu",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/permasalahan-502-bad-request-yang-sangat-mengganggu/";
          
        },
      },{id: "post-using-chatgpt-to-create-simple-code",
        
          title: "Using chatGPT to create simple code",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/lastfm-to-bsky/";
          
        },
      },{id: "post-tidak-bisa-lagi-bergantung-dengan-sosial-media-korporat-karena-kebobrokan-sistem-pada-iklan",
        
          title: "Tidak bisa lagi bergantung dengan sosial media korporat karena kebobrokan sistem pada iklan...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/kebobrokan-sosmed-korporat-dan-sistem-ads/";
          
        },
      },{id: "post-masalah-di-peladen-gratisan",
        
          title: "Masalah di peladen gratisan",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/masalah-di-server-gratisan/";
          
        },
      },{id: "post-the-migration-process-is-complete",
        
          title: "The migration process is complete",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/migrate-is-done/";
          
        },
      },{id: "post-memutuskan-untuk-menghentikan-proyek-gingalibadeidara-works",
        
          title: "Memutuskan untuk menghentikan proyek Gingalibadeidara Works",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/project-gingalibadeidara-works-dihentikan/";
          
        },
      },{id: "post-mengatasi-masalah-file-di-flashdisk-yang-ke-hidden-karena-virus",
        
          title: "Mengatasi masalah file di flashdisk yang ke hidden karena virus",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/mengatasi-file-di-flashdisk-yang-kehidden/";
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://ufal.my.id/2025/06/11/taiga/", "_blank");
          
        },
      },{id: "post-migrasi-lagi-tidak-tahu",
        
          title: "Migrasi lagi? tidak tahu",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/migrasi-lagi-tidak-tahu/";
          
        },
      },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/plotly/";
          
        },
      },{id: "post-this-blog-is-not-totally-dead",
        
          title: "This blog is not totally dead",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/this-blog-is-not-completed-dead/";
          
        },
      },{id: "post-masalah-heatsink-laptop-amp-fitur-hyper-v",
        
          title: "Masalah heatsink laptop &amp; Fitur Hyper-V",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2025/masalah-heatsink-laptop-fitur-hyper-v/";
          
        },
      },{id: "post-keabadian-atau-masa-depan-yang-kauharapkan-guci-39-s-mind",
        
          title: 'Keabadian (atau, Masa Depan) yang Kauharapkan | Guci&#39;s Mind <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Entah gimana, dari aku yang awalnya tertarik sama Owarinaki Natsu Towa Naru Shirabe, malah beralih ke nonton sedikit Muv-Luv Alternative (yang jelek banget), lalu malah berakhir nonton Kimi ga Nozomu Eien. Waktu bocah esema aku pernah membaca sinopsisnya yang mana “Protagonis pacaran sama Heroine 1 suatu hari Heroine 1 kecelakaan terus koma terus Protagonis pacaran…",
        section: "Posts",
        handler: () => {
          
            window.open("https://nectarinia99.wordpress.com/2025/01/18/keabadian-atau-masa-depan-yang-kauharapkan/", "_blank");
          
        },
      },{id: "post-last-post-in-this-year",
        
          title: "Last post in this year",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/postingan-akhir/";
          
        },
      },{id: "post-deciding-to-retiring-from-my-favourite-game",
        
          title: "Deciding to retiring from my favourite game",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/memutuskan-untuk-pensi-dari-gim-favorit/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/photo-gallery/";
          
        },
      },{id: "post-tutorial-tema-google-chrome",
        
          title: "Tutorial Tema Google Chrome",
        
        description: "how to create your own Google Chrome theme",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/tutorial-tema-google-chrome/";
          
        },
      },{id: "post-ada-rencana-mau-stay-di-blogspot-atau-pindah-ke-digitalpress",
        
          title: "Ada rencana mau stay di Blogspot atau pindah ke DigitalPress?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/ada-rencana-mau-stay-di-blogspot-atau-digitalpress/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2024/chartjs/";
          
        },
      },{id: "post-suka-suka-bahasa-indonesia-guci-39-s-mind",
        
          title: 'Suka-suka Bahasa Indonesia | Guci&#39;s Mind <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Ini bahasan yang agak jarang di perbindoan, tapi sering diucapkan orang-orang sampai mungkin ga sadar, yaitu penggunaan kata &quot;suka&quot;. Jadi aku tulis ini biar kita sama-sama &quot;oh iya juga ya&quot; bareng.Bahasa Indonesia, dengan segala keterbatasan jumlah katanya, memiliki salah satu keunikan dalam hal Pembicara - Pendengar yang saling memahami. Umumnya, &quot;suka&quot; memiliki makna KESENANGAN Subjek…",
        section: "Posts",
        handler: () => {
          
            window.open("https://nectarinia99.wordpress.com/2024/01/16/suka-suka-bahasa-indonesia/", "_blank");
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/tikzjax/";
          
        },
      },{id: "post-punya-blog-nganggur-fungsikan-aja-sebagai-blog-sharing-lagu",
        
          title: "Punya blog nganggur? fungsikan aja sebagai blog sharing lagu",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/punya-blog-nganggur/";
          
        },
      },{id: "post-don-39-t-know-if-you-want-to-put-a-domain-on-your-translation-project-but-you-can-39-t-afford-it-fansubid-provides-free-sub-domains-for-you",
        
          title: "Don&#39;t know if you want to put a domain on your translation project,...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/bingung-mau-pasang-domain-di-web-proyek/";
          
        },
      },{id: "post-alasan-aku-tidak-menggunakan-hatena-lagi-sebagai-cabang-blog-bahasa-inggris",
        
          title: "Alasan aku tidak menggunakan Hatena lagi sebagai cabang blog Bahasa Inggris",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/alasan-aku-tidak-menggunakan-hatena-lagi-sebagai-cabang-blog-bahasa-inggris/";
          
        },
      },{id: "post-proyek-unit-terjemahan-nanako-tidak-dilanjut-mengapa",
        
          title: "Proyek unit terjemahan Nanako tidak dilanjut, mengapa?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/proyek-unit-terjemahan-nanako-tidak-dilanjut-mengapa/";
          
        },
      },{id: "post-proyek-situs-web-hananako-dimulai-tidak-terealisasikan",
        
          title: "Proyek Situs Web Hananako dimulai (tidak terealisasikan)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/proyek-situs-web-hananako-dimulai/";
          
        },
      },{id: "post-pengumuman-dari-tetsuya-amano-dan-pemilik-blog",
        
          title: "Pengumuman dari Tetsuya Amano dan Pemilik Blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/pengumuman-dari-tetsuya-amano-dan-pemilik-blog/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/table-of-contents/";
          
        },
      },{id: "post-google-chrome-themes-shiroko-blue-archive",
        
          title: "Google Chrome Themes Shiroko Blue Archive",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/google-chrome-themes-shiroko-blue-archive/";
          
        },
      },{id: "post-can-windows-10-themes-still-be-used-when-you-are-using-windows-11",
        
          title: "Can Windows 10 themes still be used when you are using Windows 11?...",
        
        description: "how to apply windows 10 theme to 11",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2023/apakah-tema-windows-10-masih-bisa-digunakan-saat-kamu-mengunakan-windows-11/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/giscus-comments/";
          
        },
      },{id: "post-nanako-music-player-atau-nanako-skins",
        
          title: "Nanako Music Player atau Nanako Skins",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/nanako-music-player-concept-a-k-a-nanako-skins/";
          
        },
      },{id: "post-keluh-kesah-dan-penyesalan-soal-hubungan-pertemanan",
        
          title: "Keluh kesah dan penyesalan soal hubungan pertemanan",
        
        description: "cuma self rant aja :(",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/keluh-kesah-dan-penyesalan-soal-hubungan-pertemanan/";
          
        },
      },{id: "post-memulai-dari-awal",
        
          title: "Memulai dari awal",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/memulai-dari-awal/";
          
        },
      },{id: "post-mahjong-soul-on-desktop",
        
          title: "Mahjong Soul on Desktop",
        
        description: "how to run Mahjong Soul as a standalone application (tutorial is outdated)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/mahjong-soul-on-desktop/";
          
        },
      },{id: "post-anniversary-of-gingalibadeidara-works-8-years-from-blogging-until-translations-project",
        
          title: "Anniversary of gingalibadeidara works 8 years (from Blogging until Translations Project)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/anniversary-proyek-gingalibadeidara-works-yang-ke-8/";
          
        },
      },{id: "post-2022-dan-tutorial-seret-tarik-ke-bilah-tugas",
        
          title: "2022 dan Tutorial seret tarik ke bilah tugas",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/idk/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-post-pertama-di-tahun-2022",
        
          title: "Post pertama di tahun 2022",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2022/post-pertama-di-tahun-2022/";
          
        },
      },{id: "post-light-novel-moriarty-the-patriot-volume-1-3-bahasa-indonesia",
        
          title: 'Light Novel Moriarty The Patriot Volume 1-3 Bahasa Indonesia <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "JUST TO ANSWER YOUR CURIOSITY, ESPECIALLY ABOUT ANIME :)",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.shirayuki-chan.my.id/2021/08/light-novel-moriarty-patriot-volume-1-3.html", "_blank");
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/diagrams/";
          
        },
      },{id: "post-wallpaper-amp-tutorial-cara-buat-minimalist",
        
          title: "Wallpaper &amp; Tutorial cara buat minimalist",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/wallpaper-tutorial-cara-buat-minimalist/";
          
        },
      },{id: "post-tips-amp-tricks-how-to-lock-facebook-account-not-working-at-the-moment",
        
          title: "Tips &amp; Tricks how to lock Facebook account (Not working at the moment)...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/tips-trik-cara-mengunci-akun-facebook-tidak-bekerja-untuk-saat-ini/";
          
        },
      },{id: "post-it-39-s-been-a-long-time-since-updating-this-blog",
        
          title: "It&#39;s been a long time since updating this blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/its-been-a-long-time-since-updating-this-blog/";
          
        },
      },{id: "post-artikel-spesial-kustomisasi-tema-untuk-browser",
        
          title: "Artikel Spesial | Kustomisasi tema untuk browser",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/artikel-spesial-kustomisasi-tema-untuk-browser/";
          
        },
      },{id: "post-novel-the-failure-alchemist-of-the-royal-capital-my-job-is-a-failure-so-i-ll-manage-my-store-carefreely-bahasa-indonesia-rena-translations",
        
          title: '[Novel] The Failure Alchemist of the Royal Capital ~My job is a failure... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://renatl.blogspot.com/2021/04/novel-failure-alchemist-of-royal.html", "_blank");
          
        },
      },{id: "post-announcement-of-a-new-project",
        
          title: "Announcement of a new project",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2021/pengumuman-sebuah-proyek-baru/";
          
        },
      },{id: "post-apa-harapanmu-untuk-tahun-2021",
        
          title: "Apa harapanmu untuk tahun 2021?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/apa-harapanmu-untuk-tahun-2021/";
          
        },
      },{id: "post-apa-saja-yang-terjadi-selama-1-tahun-ini",
        
          title: "Apa saja yang terjadi selama 1 tahun ini",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/apa-saja-yang-terjadi-selama-1-tahun-ini/";
          
        },
      },{id: "post-migrating-to-a-new-blog-soon",
        
          title: "Migrating to a new blog, soon!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/migrating-to-a-new-blog-soon/";
          
        },
      },{id: "post-first-post-on-december-39-s",
        
          title: "First Post on December&#39;s",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/first-post-on-decembers/";
          
        },
      },{id: "post-tulisan-pertama-di-tahun-2020",
        
          title: "Tulisan pertama di tahun 2020",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/tulisan-pertama-di-tahun-2020/";
          
        },
      },{id: "post-the-old-project-was-suddenly-raised-again",
        
          title: "The old project was suddenly raised again",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/proyek-lama-tiba-tiba-di-angkat-kembali/";
          
        },
      },{id: "post-in-the-near-future-i-will-have-a-web-page",
        
          title: "In the near future, I will have a web page",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/in-the-near-future-i-will-have-a-web-page/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/twitter/";
          
        },
      },{id: "post-making-girls-frontline-themes-but-for-browsers-chrome",
        
          title: "Making Girls Frontline Themes but for Browsers Chrome",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/membuat-tema-girls-frontline-tetapi-untuk-browser-chrome/";
          
        },
      },{id: "post-i-returned-with-a-strange-strange-experiment",
        
          title: "I returned with a strange strange experiment",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/saya-kembali-dengan-sebuah-eksperimen-baru/";
          
        },
      },{id: "post-i-had-thought-about-stopping-the-activity-of-creating-vector-projects",
        
          title: "I had thought about stopping the activity of creating vector projects.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2020/sempat-kepikiran-kalau-ingin-menghentikan-aktivitas-dalam-pembuatan-proyek-vektor/";
          
        },
      },{id: "post-my-absurd-imaginations-the-big-five-team-of-miniature-program",
        
          title: '~MY ABSURD IMAGINATIONS~: THE BIG FIVE TEAM OF MINIATURE PROGRAM <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "HALOOOOO! APA KABAR KALIAN?! KALIAN PASTI MERINDUKANKU~ //TAMPAR",
        section: "Posts",
        handler: () => {
          
            window.open("https://yummyulia.blogspot.com/2019/03/the-big-five-team-of-miniature-program.html", "_blank");
          
        },
      },{id: "post-last-project-for-go-for-dream",
        
          title: "Last Project for Go For Dream",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2019/last-project-for-go-for-dream/";
          
        },
      },{id: "post-comics-project-is-done-go-for-dream",
        
          title: "Comics Project is Done (Go For Dream)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2018/proyek-komik-telah-selesai-go-for-dream/";
          
        },
      },{id: "post-last-project",
        
          title: "Last project",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2018/last-project/";
          
        },
      },{id: "post-welcome-to-new-blog",
        
          title: "Welcome to new blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2018/welcome/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2018/distill/";
          
        },
      },{id: "post-an-old-project-that-i-just-posted-on-my-personal-blog",
        
          title: "An old project that I just posted on my personal blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2018/proyek-lama-yang-baru-saja-saya-posting-di-blog-pribadi/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/math/";
          
        },
      },{id: "post-download-naruto-shippuden-ultimate-ninja-storm-revolution-for-pc",
        
          title: "DOWNLOAD NARUTO SHIPPUDEN ULTIMATE NINJA STORM REVOLUTION FOR PC",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/download-naruto-shippuden-ultimate-ninja-storm-revolution-for-pc/";
          
        },
      },{id: "post-definition-of-a-designer",
        
          title: "Definition of a Designer",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/pengertian-seorang-desainer/";
          
        },
      },{id: "post-types-and-features-of-cameras",
        
          title: "Types and Features of Cameras",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/jenis-dan-ciri-ciri-kamera/";
          
        },
      },{id: "post-definisi-fotografi",
        
          title: "Definisi Fotografi",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/definisi-fotografi/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/images/";
          
        },
      },{id: "post-show-by-rock-episode-1-subtitle-indonesia",
        
          title: "Show by Rock!! Episode 1 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/show-by-rock-episode-1-subtitle-indonesia/";
          
        },
      },{id: "post-ost-anime-spring-2015",
        
          title: "OST Anime Spring 2015",
        
        description: "Tautan yang semula menuju ke tautan unduhan yang sudah mati, diganti menuju ke Spotify atau YouTube jika tersedia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/ost-anime-spring/";
          
        },
      },{id: "post-nisekoi-season-2-episode-01-subtitle-indonesia",
        
          title: "Nisekoi Season 2 Episode 01 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/nisekoi-season-2-episode-01-subtitle-indonesia/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2015/formatting-and-links/";
          
        },
      },{id: "post-fairy-tail-episode-200-subtitle-indonesia",
        
          title: "Fairy Tail Episode 200 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/fairy-tail-episode-200-sub-indo/";
          
        },
      },{id: "post-naruto-shippuden-eps-379-sub-indonesia",
        
          title: "Naruto Shippuden Eps 379 Sub Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/naruto-shippuden-eps-379-sub-indonesia/";
          
        },
      },{id: "post-akame-ga-kill-episode-10-subtitle-indonesia",
        
          title: "Akame ga kill Episode 10 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/Akame-ga-kill-Episode-10-Subtitle-Indonesia/";
          
        },
      },{id: "post-naruto-shippuden-eps-37-sub-indonesia",
        
          title: "Naruto Shippuden Eps 37- Sub Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/naruto-shippuden-episode-370-subtitle-indonesia/";
          
        },
      },{id: "post-naruto-shippuden-episode-369-subtitle-indonesia",
        
          title: "Naruto Shippuden Episode 369 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/naruto-shippuden-episode-369-subtitle-indonesia/";
          
        },
      },{id: "post-aoyama-thelma-track-02",
        
          title: "aoyama thelma track 02",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/aoyama-thelma-track-02/";
          
        },
      },{id: "post-aoyama-thelma-kaeru-basho",
        
          title: "aoyama thelma - kaeru basho",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/aoyama-thelma-kaeru-basho/";
          
        },
      },{id: "post-one-piece-episode-651-subtitle-indonesia",
        
          title: "One Piece Episode 651 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/one-piece-episode-651-subtitle-indonesia/";
          
        },
      },{id: "post-keroro-2014-episode-5-subtitle-indonesia",
        
          title: "Keroro (2014) Episode 5 Subtitle Indonesia",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/test/blog/2014/keroro-2014-episode-5-subtitle-indonesia/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/test/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-gradual-migration",
          title: 'Gradual Migration',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/test/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-video-amp-commercial",
          title: 'Video &amp;amp; Commercial',
          description: "Video and Commercial Works Gallery",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/3_project/";
            },},{id: "projects-design",
          title: 'Design',
          description: "example design for private project",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/4_project/";
            },},{id: "projects-vector",
          title: 'Vector',
          description: "Vector galleries that have previously been uploaded to deviantart or pixiv",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/6_project/";
            },},{id: "projects-commision",
          title: 'Commision',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/test/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/me.naturbrilian.dpdns.org", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/test/assets/pdf/en-us//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/304313603253862401", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%6E%67%61%6C%69%62%61%64%65%69%64%61%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-lastfm',
        title: 'Last FM',
        section: 'Socials',
        handler: () => {
          window.open("https://www.last.fm/user/naturbrilian", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/naturbrilian", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mastodon.social/@naturbrilian", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/test/feed.xml", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/gingalibadeidara", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/naturbrilian", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: 'Languages',
          handler: () => {
            window.location.href = "/test/pt-br" + updatedUrl;
          },
        },{
          id: 'lang-fr-ca',
          title: 'fr-ca',
          section: 'Languages',
          handler: () => {
            window.location.href = "/test/fr-ca" + updatedUrl;
          },
        },{
          id: 'lang-id',
          title: 'id',
          section: 'Languages',
          handler: () => {
            window.location.href = "/test/id" + updatedUrl;
          },
        },{
          id: 'lang-ja-jp',
          title: 'ja-jp',
          section: 'Languages',
          handler: () => {
            window.location.href = "/test/ja-jp" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
