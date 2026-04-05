# 🎨 Quick Color Reference Card

## Color Codes at a Glance

### Primary Colors (Most Used)
```
Dark Blue Primary
  Name: Blue-900 / Dark Navy
  Hex: #0B1E33 (as custom primary)
  Tailwind: text-blue-900, bg-blue-900
  Usage: Headers, main text, dark backgrounds
  
Light Skyblue
  Name: Sky-50
  Hex: #F0F9FF
  Tailwind: bg-sky-50
  Usage: Page backgrounds, breathing room
  
Accent Skyblue
  Name: Sky-400
  Hex: #0EA5E9
  Tailwind: text-sky-400, bg-sky-400, from-sky-400
  Usage: Buttons, highlights, accents
```

---

## 🎯 Component Quick Styles

### Navigation Bar
```css
Background: from-sky-100 via-blue-50 to-sky-100
Active Link: text-blue-900 bg-white shadow-md
Button: bg-blue-900 text-white hover:shadow-xl
```

### Hero Section
```css
Background: bg-blue-900
Text: text-white
Accent: text-sky-400
CTA Button: from-sky-400 to-blue-400 text-gray-900
```

### Cards
```css
Background: bg-white
Border: border border-sky-200/50
Shadow: shadow-lg hover:shadow-2xl
Hover: -translate-y-2 scale-105
```

### Buttons
```css
Primary: bg-blue-600 hover:bg-blue-700 text-white
CTA: from-sky-400 to-blue-400 hover:opacity-90
Ghost: bg-white/10 border-white/30 text-white
```

### Forms
```css
Input: bg-sky-100 border-2 border-sky-200
Focus: ring-4 ring-blue-600/20
Text: text-blue-900
```

### Footer
```css
Background: from-blue-950 via-blue-900 to-blue-950
Text: text-white
Icons: text-sky-400
```

---

## 📏 Common Tailwind Classes

### Colors
```
text-blue-900      (dark text)
text-sky-400       (bright accent)
text-white/80      (muted white)
text-gray-600      (secondary text)

bg-blue-900        (dark background)
bg-sky-50          (light background)
bg-white           (card background)
bg-sky-100         (input background)

border-sky-200     (light border)
border-blue-800    (dark border)
border-white/30    (semi-transparent)
```

### Gradients
```
from-sky-50 via-blue-50 to-sky-100   (page bg)
from-blue-900 to-blue-800             (dark sections)
from-sky-400 to-blue-400              (buttons)
to-r / to-b / to-br                   (directions)
```

### Shadows
```
shadow-lg           (small shadow)
shadow-2xl          (larger shadow)
shadow-blue-600/30  (tinted shadow)
hover:shadow-2xl    (hover state)
```

### Sizing
```
px-4 md:px-6 lg:px-8   (responsive padding)
py-3 md:py-4 lg:py-5   (responsive height)
p-6 md:p-8 lg:p-10     (responsive padding all)
rounded-2xl            (16px border radius)
rounded-full           (circle/pill shape)
```

### Spacing
```
gap-6              (space between grid items)
space-y-6          (vertical space between children)
mb-6               (margin bottom)
mt-4               (margin top)
px-4 py-3          (padding)
```

### Display
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
flex flex-col md:flex-row
hidden md:flex
```

---

## 🔄 Common Patterns

### Navigation Link (Active)
```html
<Link className="text-blue-900 bg-white shadow-md rounded-xl px-4 py-2">
  Active Link
</Link>
```

### Button (Primary)
```html
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 
         rounded-xl shadow-lg shadow-blue-600/30 transform 
         hover:-translate-y-1 transition-all">
  Click Me
</button>
```

### Card Element
```html
<div className="bg-white rounded-2xl p-8 border border-sky-200/50 
     shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
  Content
</div>
```

### Hero Section
```html
<section className="bg-blue-900 text-white py-24">
  <h1 className="text-white mb-6">
    Title <span className="text-sky-400">Accent</span>
  </h1>
  <button className="from-sky-400 to-blue-400">CTA</button>
</section>
```

### Form Input
```html
<input className="w-full bg-sky-100 border-2 border-sky-200 
       text-blue-900 rounded-2xl px-4 py-3 
       focus:ring-4 focus:ring-blue-600/20 outline-none" 
       placeholder="Enter text..." />
```

---

## 💡 Design Rules

### Always Use:
✅ Dark blue (`#0B1E33`, `text-blue-900`) for primary text
✅ Sky blue (`#0EA5E9`, `text-sky-400`) for accents  
✅ Light sky (`#F0F9FF`, `bg-sky-50`) for backgrounds
✅ White for card backgrounds
✅ Blue-900 for hero/footer backgrounds

### Never Use:
❌ Gray backgrounds (use sky-50 instead)
❌ Amber/Orange accent colors (use sky-400 instead)
❌ Gold/Yellow for primary elements
❌ Conflicting color gradients
❌ Inconsistent blue shades

### Contrast Rules:
✅ Dark text on light backgrounds
✅ Light text on dark backgrounds
✅ Minimum 4.5:1 contrast ratio
✅ Clear visual hierarchy

### Spacing Rules:
✅ Consistent padding within sections
✅ Gaps between grid items
✅ Breathing room around text
✅ Responsive spacing scales

---

## 🎪 Interactive States

### Hover
```
text-blue-900 → text-sky-600 (bright)
shadow-lg → shadow-2xl (lift)
scale-100 → scale-105 (grow)
-translate-y-0 → -translate-y-2 (rise)
opacity-100 → opacity-90 (fade)
```

### Focus
```
outline-none
ring-4 ring-blue-600/20
border-blue-600
```

### Active
```
bg-white shadow-md
text-blue-900
border visible
```

### Disabled
```
opacity-50
cursor-not-allowed
pointer-events-none
text-gray-400
```

---

## 📱 Responsive Grid Guide

### Mobile (< 640px)
```
grid-cols-1      (single column)
px-4             (small padding)
gap-4            (small gaps)
text-base        (base text)
h-screen         (full height)
```

### Tablet (640-1024px)
```
md:grid-cols-2   (2 columns)
md:px-6          (medium padding)
md:gap-6         (medium gaps)
md:text-lg       (larger text)
md:py-12         (medium vertical)
```

### Desktop (> 1024px)
```
lg:grid-cols-3   (3 columns)
lg:px-8          (large padding)
lg:gap-8         (large gaps)
lg:text-xl       (large text)
lg:py-20         (large vertical)
```

---

## 🎨 Example Color Combinations

### For Headings
```
Dark blue text on light skyblue background
text-blue-900 on bg-sky-50
High contrast, professional
```

### For Buttons
```
Sky blue gradient on white
from-sky-400 to-blue-400
Bright, actionable, stands out
```

### For Cards
```
White card with sky-blue border
bg-white border-sky-200/50
Clean, organized, cohesive
```

### For Links
```
Blue text with sky hover
text-blue-600 hover:text-sky-400
Clear navigation cues
```

### For Sections
```
Light skyblue gradient background
from-sky-50 via-blue-50 to-sky-100
Airy, modern, welcoming
```

---

## 🔍 Accessibility Checklist

- [x] Contrast ratio ≥ 4.5:1 for text
- [x] Color not only indicator (also use text/icons)
- [x] Focus states visible and clear
- [x] Hover states provide feedback
- [x] Text readable on all backgrounds
- [x] Buttons clearly distinguishable
- [x] Sufficient spacing for touch targets
- [x] Consistent color usage

---

## 📊 Quick Lookup Table

| Element | Color Class | Hex | Usage |
|---------|-------------|-----|-------|
| Main Text | text-blue-900 | #111827 | Headers, Primary |
| Accent Text | text-sky-400 | #0EA5E9 | Highlights |
| Dark Background | bg-blue-900 | #111827 | Hero/Footer |
| Light Background | bg-sky-50 | #F0F9FF | Pages |
| Card | bg-white | #FFFFFF | Content |
| Border | border-sky-200 | #BAE6FD | Dividers |
| Input | bg-sky-100 | #E0F7FF | Forms |
| Shadow | shadow-blue-600 | - | Depth |
| Button Text | text-white | #FFFFFF | On blue |
| Link | text-blue-600 | #2563EB | Navigation |

---

## ⚡ Performance Tips

1. **Use CSS instead of images**: Gradients, shadows, borders
2. **Limit color variations**: Stick to main palette
3. **Leverage Tailwind caching**: Pre-compiled utilities
4. **Mobile first**: Write base styles for mobile
5. **Optimize images**: Use modern formats (WebP)
6. **Minimize overrides**: Use class combinations

---

## 🎓 Principle Summary

```
CONSISTENCY IS KEY:
→ Same colors across pages
→ Same shadows throughout
→ Same spacing patterns
→ Same button styles
→ Same typography

VISUAL HIERARCHY:
→ Dark blue: Most important (headers)
→ Sky blue: Secondary importance (accents)
→ White: Content area
→ Light sky: Background breathing room

USER EXPERIENCE:
→ Clear, recognizable color scheme
→ Professional appearance
→ Accessible to all users
→ Responsive on all devices
→ Fast loading performance
```

---

**COLOR PALETTE REFERENCE**

Primary:     #0B1E33 (Dark Blue)
Accent:      #0EA5E9 (Sky Blue)  
Background:  #F0F9FF (Light Sky)
Text:        #111827 (Nearly Black)
White:       #FFFFFF (Pure White)

**Ready to use!** 🎨
