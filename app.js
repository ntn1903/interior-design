const projects = [
  {
    slug: "nha-ben-doi",
    title: "Nhà bên đồi",
    category: "residential",
    categoryLabel: "NHÀ Ở",
    year: "2024",
    location: "Đà Lạt, Lâm Đồng",
    area: "218 m²",
    role: "Thiết kế & giám sát",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Trên một triền dốc thoai thoải ở Đà Lạt, ngôi nhà được tổ chức thành những lớp không gian thấp, mở dần về phía vườn. Mái hiên sâu, đá địa phương và những ô cửa rộng giúp ngôi nhà đón khí trời nhưng vẫn giữ được sự riêng tư. Chúng tôi muốn mỗi buổi sáng ở đây bắt đầu bằng ánh sáng dịu và mùi thông ngoài hiên."
  },
  {
    slug: "nha-trong-hem",
    title: "Nhà trong hẻm",
    category: "residential",
    categoryLabel: "NHÀ Ở",
    year: "2023",
    location: "Quận 3, TP. Hồ Chí Minh",
    area: "146 m²",
    role: "Thiết kế kiến trúc",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Lô đất nhỏ trong một con hẻm đông đúc đặt ra câu hỏi về ánh sáng và khoảng thở. Một giếng trời xuyên suốt kết nối các tầng, đưa nắng và gió vào giữa nhà. Những khoảng xanh nhỏ được đặt đúng nơi sinh hoạt thường ngày, để thiên nhiên hiện diện như một thành viên của gia đình."
  },
  {
    slug: "nha-hang-lang",
    title: "Nhà hàng Lặng",
    category: "commercial",
    categoryLabel: "THƯƠNG MẠI",
    year: "2024",
    location: "Thảo Điền, TP. Hồ Chí Minh",
    area: "320 m²",
    role: "Thiết kế nội thất",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Lặng là một nhà hàng nhỏ tìm kiếm sự tĩnh tại giữa nhịp sống đô thị. Bảng màu đất, gỗ sẫm và ánh sáng gián tiếp tạo nên phông nền ấm áp cho những bữa ăn kéo dài. Không gian được chia bằng các lớp rèm và vách thấp để mỗi bàn vừa riêng tư vừa gần gũi."
  },
  {
    slug: "nha-ben-song",
    title: "Nhà bên sông",
    category: "residential",
    categoryLabel: "NHÀ Ở",
    year: "2022",
    location: "Cần Thơ",
    area: "265 m²",
    role: "Thiết kế & giám sát",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Ngôi nhà hướng về dòng sông, nơi nhịp nước lên xuống là một phần của đời sống. Hệ hiên và cửa chớp giúp công trình thích nghi với nắng gió miền Tây. Vật liệu mộc mạc được lựa chọn để theo thời gian trở nên thân thuộc, thay vì chỉ đẹp trong ngày đầu tiên."
  },
  {
    slug: "can-ho-muoi",
    title: "Căn hộ Muối",
    category: "interior",
    categoryLabel: "NỘI THẤT",
    year: "2023",
    location: "Quận 2, TP. Hồ Chí Minh",
    area: "92 m²",
    role: "Thiết kế nội thất",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Căn hộ được làm mới từ những điều căn bản: ánh sáng, lưu thông và thói quen sống. Các món đồ được tuyển chọn vừa đủ, bề mặt gỗ sáng cân bằng cùng đá mài màu cát. Một không gian nhỏ nhưng không chật, gọn gàng mà vẫn có chỗ cho những món đồ mang theo ký ức."
  },
  {
    slug: "tiem-ca-phe-hien",
    title: "Hiên — tiệm cà phê",
    category: "renovation",
    categoryLabel: "CẢI TẠO",
    year: "2021",
    location: "Quận 1, TP. Hồ Chí Minh",
    area: "118 m²",
    role: "Cải tạo & nhận diện không gian",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90"
    ],
    story: "Từ một căn nhà phố cũ, Hiên giữ lại cấu trúc hiện hữu và mở thêm những khoảng kết nối với con phố. Gạch cũ, khung cửa gỗ và lớp sơn vôi được phục hồi thay vì thay mới. Sự cải tạo nhẹ nhàng giúp công trình tiếp tục sống cùng ký ức của khu phố."
  }
];

const grid = document.querySelector("#project-grid");
const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector(".dialog-content");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
let activeProject = null;
let activeImage = 0;

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter(project => filter === "all" || project.category === filter);
  grid.innerHTML = visibleProjects.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-image-wrap" role="button" tabindex="0" aria-label="Xem dự án ${project.title}" data-open-project="${project.slug}">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-image-shade"></span>
        <span class="project-view" aria-hidden="true">↗</span>
      </div>
      <div class="project-meta">
        <div>
          <button class="project-title" type="button" data-open-project="${project.slug}">${project.title}</button>
          <div class="project-location">${project.location} <span>·</span> ${project.year}</div>
        </div>
        <span class="project-category">${project.categoryLabel}</span>
      </div>
    </article>`).join("");
  document.querySelector(".project-count").textContent = `${String(visibleProjects.length).padStart(2, "0")} DỰ ÁN`;
}

function openProject(slug) {
  activeProject = projects.find(project => project.slug === slug);
  if (!activeProject) return;
  const dialogAlreadyOpen = projectDialog.open;
  const nextProject = projects[(projects.indexOf(activeProject) + 1) % projects.length];
  dialogContent.innerHTML = `
    <img class="dialog-cover" src="${activeProject.image}" alt="${activeProject.title}">
    <div class="dialog-info">
      <span class="dialog-kicker">${activeProject.categoryLabel} &nbsp;·&nbsp; ${activeProject.year}</span>
      <h2>${activeProject.title}</h2>
      <div class="dialog-specs">
        <div><span>ĐỊA ĐIỂM</span><strong>${activeProject.location}</strong></div>
        <div><span>DIỆN TÍCH</span><strong>${activeProject.area}</strong></div>
        <div><span>LOẠI CÔNG TRÌNH</span><strong>${activeProject.categoryLabel}</strong></div>
        <div><span>VAI TRÒ</span><strong>${activeProject.role}</strong></div>
      </div>
      <p class="dialog-story">${activeProject.story}</p>
      <div class="dialog-gallery">${activeProject.gallery.map((image, index) => `
        <button type="button" data-lightbox-index="${index}" aria-label="Phóng to ảnh ${index + 1} của ${activeProject.title}">
          <img src="${image}" alt="${activeProject.title} — hình ${index + 1}" loading="lazy">
        </button>`).join("")}</div>
      <button class="dialog-next" type="button" data-open-project="${nextProject.slug}">
        <span><small>DỰ ÁN TIẾP THEO</small><strong>${nextProject.title}</strong></span><span>↗</span>
      </button>
    </div>`;
  if (!dialogAlreadyOpen) projectDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeProject() {
  projectDialog.close();
  document.body.classList.remove("dialog-open");
}

function showLightbox(index) {
  if (!activeProject) return;
  activeImage = (index + activeProject.gallery.length) % activeProject.gallery.length;
  lightboxImage.src = activeProject.gallery[activeImage];
  lightboxImage.alt = `${activeProject.title} — hình ${activeImage + 1}`;
  lightboxCaption.textContent = `${activeProject.title.toUpperCase()}  ·  ${String(activeImage + 1).padStart(2, "0")} / ${String(activeProject.gallery.length).padStart(2, "0")}`;
  lightbox.showModal();
}

function changeLightboxImage(amount) {
  showLightbox(activeImage + amount);
}

renderProjects();

document.querySelector(".filters").addEventListener("click", event => {
  const button = event.target.closest(".filter-button");
  if (!button) return;
  document.querySelectorAll(".filter-button").forEach(item => {
    const isActive = item === button;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  renderProjects(button.dataset.filter);
});

grid.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-project]");
  if (trigger) openProject(trigger.dataset.openProject);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-project][role='button']")) {
    event.preventDefault();
    openProject(event.target.dataset.openProject);
  }
});

projectDialog.addEventListener("click", event => {
  if (event.target.closest(".dialog-close")) closeProject();
  const imageButton = event.target.closest("[data-lightbox-index]");
  if (imageButton) showLightbox(Number(imageButton.dataset.lightboxIndex));
  const next = event.target.closest(".dialog-next");
  if (next) openProject(next.dataset.openProject);
});
projectDialog.addEventListener("click", event => {
  if (event.target === projectDialog) closeProject();
});
projectDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

document.querySelector(".dialog-close").addEventListener("click", closeProject);
document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => changeLightboxImage(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => changeLightboxImage(1));
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") changeLightboxImage(-1);
  if (event.key === "ArrowRight") changeLightboxImage(1);
});

const themeButton = document.querySelector(".theme-toggle");
themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("nep-theme", nextTheme);
  document.querySelector('meta[name="theme-color"]').content = nextTheme === "dark" ? "#151713" : "#f5f3ee";
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
});
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
  }
});

document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.querySelector("#contact-message").value.trim();
  if (!message) return;
  window.location.href = `mailto:hello@uy.studio?subject=${encodeURIComponent("Lời nhắn từ website Uy Studio")}&body=${encodeURIComponent(message)}`;
});
