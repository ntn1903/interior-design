# Kiến trúc website Portfolio cho Kiến trúc sư  
*(Tổng hợp: ý tưởng, hiệu ứng, theme sáng/tối, ngôn ngữ & thư viện đề xuất)*

## 1) Mục tiêu dự án
- Xây dựng website portfolio giúp kiến trúc sư trưng bày dự án chuyên nghiệp.
- Tập trung vào hình ảnh, câu chuyện thiết kế, thông tin kỹ thuật của từng dự án.
- Trải nghiệm xem ảnh mượt, cảm xúc cao cấp, tối ưu trên mobile.
- Dễ mở rộng và dễ cập nhật nội dung trong tương lai.

---

## 2) Cấu trúc trang đề xuất

### 2.1 Home
- Hero full-screen (ảnh/video công trình nổi bật)
- Tagline ngắn + CTA “Xem dự án”
- Featured projects (3–6 dự án tiêu biểu)
- Đoạn giới thiệu ngắn về kiến trúc sư/studio
- CTA liên hệ

### 2.2 Projects (Danh sách dự án)
- Grid dạng masonry hoặc card lớn
- Bộ lọc theo loại:
  - Nhà ở
  - Nội thất
  - Thương mại
  - Cải tạo
- Có thể thêm sort theo năm / quy mô

### 2.3 Project Detail (Chi tiết dự án)
- Cover image nổi bật
- Thông tin chuẩn:
  - Tên dự án
  - Năm hoàn thành
  - Địa điểm
  - Diện tích
  - Loại công trình
  - Vai trò
- Storytelling: Bối cảnh → Bài toán → Giải pháp → Kết quả
- Gallery ảnh + bản vẽ + vật liệu
- Khu vực “Dự án tiếp theo”

### 2.4 About
- Hồ sơ kiến trúc sư
- Triết lý thiết kế
- Kinh nghiệm, giải thưởng, chứng chỉ

### 2.5 Contact
- Form liên hệ
- Email / số điện thoại / social links
- Bản đồ studio (tuỳ chọn)

---

## 3) Định hướng UI/UX
- Phong cách tối giản (minimal), dùng khoảng trắng lớn.
- Typography rõ ràng, ảnh là trung tâm.
- Điều hướng đơn giản, dễ tập trung vào nội dung dự án.
- Tối ưu trải nghiệm xem ảnh trên cả desktop và mobile.

---

## 4) Hiệu ứng nên có

## 4.1 Hiệu ứng xem ảnh
- Hover zoom nhẹ (`scale 1.03–1.08`)
- Parallax nhẹ khi cuộn ảnh lớn
- Lightbox fullscreen + swipe/arrow navigation
- Progressive loading (blur-up)
- Before/After slider (đặc biệt hữu ích cho dự án cải tạo)

## 4.2 Hiệu ứng chuyển qua dự án khác
- Page transition: fade + slide (300–600ms)
- Shared element transition: ảnh card mở rộng thành cover trang chi tiết
- “Next project” preview ở cuối trang
- (Tuỳ chọn) Horizontal rail cho danh sách dự án nổi bật

## 4.3 Micro-interactions
- Hover hiện nhanh metadata (địa điểm, năm, diện tích)
- Cursor custom “View Project” (tuỳ chọn)
- Sticky project meta khi cuộn qua gallery

---

## 5) Hỗ trợ Theme Sáng/Tối

## 5.1 Mục tiêu
- Light mode: sạch, sáng, editorial.
- Dark mode: ảnh nổi bật, cảm giác premium.
- Không làm sai màu ảnh kiến trúc (chỉ đổi màu UI, không filter ảnh).

## 5.2 Color tokens gợi ý
```css
:root {
  --bg: #F7F7F5;
  --surface: #FFFFFF;
  --text: #111111;
  --muted: #6B7280;
  --accent: #8B7355;
}

.dark {
  --bg: #0F1115;
  --surface: #171A21;
  --text: #F2F3F5;
  --muted: #9CA3AF;
  --accent: #8B7355;
}
```

## 5.3 Logic bật/tắt theme
Ưu tiên theo thứ tự:
1. Theme người dùng đã chọn (lưu trong `localStorage`)
2. Nếu chưa có, theo hệ điều hành (`prefers-color-scheme`)
3. Có nút toggle rõ ràng (sun/moon icon)

## 5.4 UX lưu ý
- Lightbox nên luôn nền tối để xem ảnh tốt nhất.
- Chuyển theme mượt (200–300ms), tránh flash.
- Kiểm tra độ tương phản đạt WCAG AA.

---

## 6) Ngôn ngữ & công nghệ nên dùng

## 6.1 Ngôn ngữ
- **TypeScript** (khuyến nghị): an toàn kiểu dữ liệu, dễ maintain.
- **CSS qua Tailwind CSS**: phát triển UI nhanh và đồng nhất.

## 6.2 Framework chính
- **Next.js (React)**: SEO tốt, routing tốt, tối ưu ảnh, deploy dễ.

## 6.3 Thư viện đề xuất

### UI & Theme
- `tailwindcss`
- `next-themes`
- `clsx`, `tailwind-merge`

### Animation
- `framer-motion` (chính)
- `gsap` (+ `ScrollTrigger` nếu cần hiệu ứng cuộn nâng cao)

### Ảnh / Gallery
- `next/image`
- `yet-another-react-lightbox` **hoặc** `photoswipe`
- `react-compare-slider` (before/after)

### Form
- `react-hook-form`
- `zod` (validate)
- `resend` hoặc Formspree (gửi form)

### SEO
- Metadata API của Next.js (hoặc `next-seo`)
- `next-sitemap`

### CMS / Quản trị nội dung
- **Nhanh gọn**: MDX local (phù hợp giai đoạn đầu)
- **Chuyên nghiệp, dễ bàn giao**: Sanity

---

## 7) 2 phương án triển khai

## 7.1 Phương án A — Launch nhanh (1–2 tuần)
- Next.js + TypeScript + Tailwind
- Framer Motion
- Lightbox
- Nội dung MDX local

Phù hợp khi cần lên site nhanh, ngân sách vừa phải.

## 7.2 Phương án B — Chuyên nghiệp, mở rộng tốt (2–4 tuần)
- Next.js + TypeScript + Tailwind
- Framer Motion + GSAP
- Sanity CMS
- SEO đầy đủ, đa ngôn ngữ (nếu cần)

Phù hợp khi dùng lâu dài và cần cập nhật nội dung thường xuyên.

---

## 8) Cấu trúc dữ liệu dự án (gợi ý)
Mỗi project nên có:
- `slug`
- `title`
- `category`
- `year`
- `location`
- `area`
- `services`
- `coverImage`
- `gallery[]`
- `story` (problem/solution/result)
- `materials[]`
- `credits` (team, photographer)
- `featured` (boolean)

---

## 9) Checklist triển khai
- [ ] Chốt style visual (Minimal Light / Dark Luxury / Editorial)
- [ ] Chốt stack & phạm vi phase 1
- [ ] Dựng layout 5 trang chính
- [ ] Tích hợp gallery + lightbox
- [ ] Tích hợp animation + transition
- [ ] Thêm theme sáng/tối
- [ ] Tối ưu ảnh (WebP/AVIF, lazy load)
- [ ] Cấu hình SEO + sitemap
- [ ] Test mobile + accessibility + performance
- [ ] Go-live

---

## 10) Kết luận đề xuất
Để đạt cân bằng tốt giữa **thẩm mỹ, tốc độ phát triển và khả năng mở rộng**, stack khuyến nghị là:

**Next.js + TypeScript + Tailwind CSS + Framer Motion + next-themes + Lightbox + Sanity (tuỳ giai đoạn).**

---
## Phụ lục: Gói npm tham khảo

```bash
npm i framer-motion gsap next-themes clsx tailwind-merge react-hook-form zod yet-another-react-lightbox react-compare-slider
npm i next-sitemap
```