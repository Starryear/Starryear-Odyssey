const works = [
  ["线性艺术-奥德赛双联画.jpg", "THE BOW TRIAL"],
  ["三棱锥-奥德赛双联画.jpg", "THE HIDDEN KING"],
  ["樱花-奥德赛双联画.jpg", "ATHENA KEEPS WATCH"],
  ["红色椅子 2-奥德赛双联画.jpg", "HALL OF SUITORS"],
  ["IMG_9701-奥德赛双联画.jpg", "CALYPSO'S ISLAND"],
  ["IMG_5515-奥德赛双联画.jpg", "THE LONG RETURN"],
  ["DSCF3393-奥德赛双联画.jpg", "CIRCE'S ISLAND"],
  ["鹅鹅鹅-奥德赛双联画.jpg", "LOTUS SHORE"],
  ["马来西亚小猫-奥德赛双联画.jpg", "CYCLOPS CAVE"],
  ["DSCF1722-奥德赛双联画.jpg", "PENELOPE'S VIGIL"],
  ["odyssey-06-between-two-monsters.jpg", "BETWEEN TWO MONSTERS"],
  ["odyssey-10-after-troy.jpg", "AFTER TROY"],
  ["odyssey-11-penelopes-loom.jpg", "PENELOPE'S LOOM"],
  ["odyssey-12-waiting-house.jpg", "THE WAITING HOUSE"],
  ["眼睛.jpg", "THE WATCHFUL EYE"],
  ["Codex 图像 2026年8月24日 23_26_29.jpg", "ARCHIVE FRAGMENT I"],
  ["Codex 图像 2026年8月24日 23_27_24.jpg", "ARCHIVE FRAGMENT II"],
  ["Codex 图像 2026年8月24日 23_27_38.jpg", "ARCHIVE FRAGMENT III"],
  ["Codex 图像 2026年8月24日 23_27_42.jpg", "ARCHIVE FRAGMENT IV"],
  ["Codex 图像 2026年8月24日 23_28_09.jpg", "ARCHIVE FRAGMENT V"],
  ["Codex 图像 2026年8月24日 23_28_40.jpg", "ARCHIVE FRAGMENT VI"]
];

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxIndex = document.querySelector("#lightbox-index");

works.forEach(([file, title], index) => {
  const card = document.createElement("article");
  card.className = "work-card";
  card.tabIndex = 0;
  card.innerHTML = `<img src="site-assets/${encodeURIComponent(file)}" alt="${title} 奥德赛视觉作品" loading="lazy"><div><strong>${title}</strong><span>${String(index + 1).padStart(2, "0")}</span></div>`;
  const open = () => {
    lightboxImage.src = `site-assets/${encodeURIComponent(file)}`;
    lightboxImage.alt = `${title} 奥德赛视觉作品大图`;
    lightboxTitle.textContent = title;
    lightboxIndex.textContent = `NO. ${String(index + 1).padStart(3, "0")}`;
    lightbox.showModal();
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") open(); });
  gallery.append(card);
});

document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });

document.querySelector("#message-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#message-name").value.trim();
  const title = document.querySelector("#message-title").value.trim();
  const message = document.querySelector("#message-body").value.trim();
  const body = `来自：${name}\n\n${message}\n\n---\n通过 Starryear Odyssey 网站留言`;
  const url = new URL("https://github.com/Starryear/Starryear-Odyssey/issues/new");
  url.searchParams.set("title", `[网站留言] ${title}`);
  url.searchParams.set("body", body);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
  document.querySelector("#form-note").textContent = "已打开 GitHub 留言提交页，请在那里确认并提交。";
});
