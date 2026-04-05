# Hotel Job Service - Color Palette & Design Guide

## 🎨 Color Palette

### Primary Colors
```
Dark Blue (Primary)
Hex: #0B1E33
RGB: 11, 30, 51
Usage: Headers, main text, dark backgrounds, primary buttons when active
```

```
Sky Blue (Accent)
Hex: #0EA5E9
RGB: 14, 165, 233
Usage: Buttons, highlights, accent text, hover states, borders
```

```
Light Sky Blue (Background)
Hex: #F0F9FF
RGB: 240, 249, 255
Usage: Primary page background, creates airy feel
```

### Secondary Colors (Dark Shades)
```
Blue-900: #111827 - Hero sections, dark cards
Blue-800: #1F2937 - Hover states, alternative backgrounds
Blue-700: #1E40AF - Links, secondary buttons
Blue-600: #2563EB - Interactive elements
```

### Accent Colors (Light Shades)
```
Sky-400: #0EA5E9 - Main accent throughout
Sky-300: #06B6D4 - Lighter accents, text overlays
Sky-100: #E0F7FF - Light backgrounds, input fields
Sky-50:  #F0F9FF - Lightest backgrounds
```

### Neutral Colors
```
White: #FFFFFF - Cards, modals, text on dark
Gray-600: #4B5563 - Secondary text
Gray-700: #374153 - Body text
White/80: rgba(255,255,255,0.8) - Muted white text
```

---

## 📐 Layout System

### Container & Padding
```
Container max-width: 7xl (mx-auto max-w-7xl)
Default padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
Grid gap: gap-6, gap-8, gap-10 (depending on section)
```

### Spacing Scale
```
xs: 0.25rem (1px)
sm: 0.5rem (2px)
md: 1rem (4px)
lg: 1.5rem (6px)
xl: 2rem (8px)
2xl: 2.5rem (10px)
3xl: 3rem (12px)
```

### Grid Layouts
```
Mobile:   grid-cols-1
Tablet:   md:grid-cols-2
Desktop:  lg:grid-cols-3 or lg:grid-cols-4
```

---

## 🎭 Component Patterns

### Hero Section
```
Background: bg-blue-900 (gradient-to-br)
Text: text-white
Accent: text-sky-400
Gradient Text: bg-clip-text text-transparent
             bg-gradient-to-r from-sky-300 to-blue-300
```

### Card Component
```
Background: bg-white
Border: border border-sky-200/50
Shadow: shadow-lg hover:shadow-2xl
Hover: scale-105, -translate-y-2
Rounded: rounded-2xl or rounded-3xl
```

### Button Styles

#### Primary Button
```
Class: bg-blue-600 hover:bg-blue-700 text-white
Padding: px-8 py-3 or px-10 py-5
Rounded: rounded-xl or rounded-full
Shadow: shadow-lg shadow-blue-600/30
Hover: scale-105, -translate-y-1
```

#### Gradient Button
```
Class: bg-gradient-to-r from-sky-400 to-blue-400
       hover:opacity-90 text-white
Shadow: shadow-xl shadow-sky-600/30
```

#### Ghost Button
```
Class: bg-white/10 backdrop-blur-md text-white
       border-2 border-white/30
Hover: bg-white/20, scale-105
```

### Input Fields
```
Background: bg-sky-100
Border: border-2 border-sky-200
Focus: focus:ring-4 focus:ring-blue-600/20
Text: text-blue-900
Placeholder: text-blue-700
Height: py-3 or py-5
```

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```
xs:  360px    (mobile first)
sm:  640px    (large phones)
md:  768px    (tablets)
lg:  1024px   (desktops)
xl:  1280px   (large desktops)
2xl: 1536px   (extra large)
```

### Responsive Examples
```
Text: text-base md:text-lg lg:text-xl
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Flex: flex-col md:flex-row
Padding: px-4 md:px-6 lg:px-8
Height: h-screen md:h-[600px] lg:h-[800px]
```

---

## ✨ Visual Effects

### Gradients
```
Background: from-sky-50 via-blue-50 to-sky-100
Dark: from-blue-900 to-blue-800
Text: from-sky-300 to-blue-300
Direction: to-r (right), to-b (bottom), to-br (bottom-right)
```

### Shadows
```
Card: shadow-lg hover:shadow-2xl
Button: shadow-xl shadow-blue-600/30
Text: drop-shadow-sm
Glow: shadow-[0_0_30px_rgba(56,189,248,0.4)]
```

### Animations
```
Hover Scale: group-hover:scale-110
Hover Translate: hover:-translate-y-2
Hover Rotate: group-hover:rotate-3
Transition: transition-all duration-300
Opacity: opacity-0 group-hover:opacity-100
```

### Borders & Outlines
```
Standard: border border-sky-200/50
Thick: border-2 border-sky-200
Rounded: rounded-2xl (16px), rounded-3xl (24px)
Radius Large: rounded-[3rem] (48px), rounded-full
```

---

## 🎯 Usage Guide by Section

### Navigation Bar
```
Background: from-sky-100 via-blue-50 to-sky-100
Active link: text-blue-900 bg-white shadow-md
Hover: text-blue-900 bg-white/70
Buttons: bg-blue-900 text-white hover:shadow-xl
```

### Hero Section
```
Background: bg-blue-900 with overlay
Text: text-white
Badges: bg-white/10 border-white/30 text-white
CTA: from-sky-400 to-blue-400 text-gray-900
```

### Statistics Cards
```
Background: bg-white border-sky-200/50
Icons: text variations (blue-500, amber-500, green-500)
Numbers: text-3xl font-bold text-gray-900
Labels: text-sm text-gray-600
```

### Department Cards
```
Image Container: h-56 overflow-hidden
Gradient Overlay: opacity-60
Content: p-8 bg-white
Badge: bg-white/90 text-gray-900 text-sm font-bold
Border on hover: border-blue-500/20
```

### Forms
```
Labels: text-blue-900 font-semibold
Inputs: bg-sky-100 border-sky-200
Focus: ring-blue-600/20
Error: border-red-500 text-red-600
Success: border-green-500 text-green-600
```

### Footer
```
Background: from-blue-950 via-blue-900 to-blue-950
Text: text-white/80
Links: hover:text-white transition-colors
Icons: text-sky-400 hover:text-white
Dividers: border-blue-800
```

---

## 🔤 Typography Scale

### Headings
```
H1: text-5xl md:text-7xl font-bold (Hero)
H2: text-4xl md:text-5xl font-bold (Sections)
H3: text-2xl font-bold (Cards)
H4: text-xl font-bold (Subsections)
H5: text-lg font-semibold (Labels)
H6: text-base font-semibold
```

### Body Text
```
Large: text-xl (introductions)
Normal: text-base (body content)
Small: text-sm (secondary)
Tiny: text-xs (captions)
```

### Font Weights
```
thin: 100
light: 300
normal: 400
medium: 500
semibold: 600
bold: 700
extrabold: 800
black: 900
```

---

## 🎨 Visual States

### Default
```
Opacity: 100%
Scale: 1
Shadow: shadow-md or shadow-lg
```

### Hover
```
Opacity: 90-100%
Scale: 105%
Shadow: shadow-lg or shadow-2xl
Translate: -translate-y-1 (lift effect)
Color: lighter shade or brighter
```

### Focus
```
Ring: ring-2 or ring-4 with color
Ring color: ring-blue-600/20 or ring-blue-500
Outline: outline-none (removed)
```

### Active
```
Background: darker shade
Shadow: more pronounced
Color: white or bright accent
Border: colored border indicator
```

### Disabled
```
Opacity: opacity-50
Cursor: cursor-not-allowed
Pointer: pointer-events-none
Color: gray-400
```

---

## 🔄 Dark Mode Compatibility (Future)

When implementing dark mode, maintain:
```
Light theme: Light skyblue base, dark blue text/accents
Dark theme: Dark blue base, light skyblue accents
Switch: Use Tailwind's dark: prefix
Contrast: Maintain WCAG AA standards (4.5:1 ratio)
```

---

## 📋 Component Checklists

### Card Component
- [ ] White background
- [ ] Sky-blue border
- [ ] Hover shadow expanded
- [ ] Content padding adequate
- [ ] Icons have proper sizing
- [ ] Text hierarchy clear
- [ ] Touch-friendly on mobile

### Form Component
- [ ] Labels visible and associated
- [ ] Inputs have visible focus state
- [ ] Error states clearly marked
- [ ] Placeholder text visible
- [ ] Button is distinct and actionable
- [ ] Mobile-friendly spacing
- [ ] Keyboard navigable

### Button Component
- [ ] Adequate padding for touch
- [ ] Clear visual hierarchy
- [ ] Hover/focus/active states
- [ ] Icon aligned properly
- [ ] Text readable on background
- [ ] Loading state if needed
- [ ] Disabled state clear

---

## 🚀 Performance Tips

1. **Use CSS instead of images**: Gradients, shadows
2. **Optimize animations**: Use `transition-all duration-300`
3. **Leverage Tailwind**: Pre-compiled utilities minimize CSS
4. **Lazy load images**: Use next-gen image formats
5. **Mobile-first**: Write CSS for mobile, expand for larger screens
6. **Remove unused styles**: Tree-shake Tailwind in production

---

## 📚 Resources Used

- **Tailwind CSS**: Utility-first framework
- **Lucide React**: Icon library
- **React Router**: Navigation
- **Context API**: State management

---

## 🔗 Quick Color Reference

```
Dark Blue (#0B1E33):     Primary text, dark backgrounds
Sky Blue (#0EA5E9):      Buttons, accents, highlights
Light Sky (#F0F9FF):     Page backgrounds
Blue-900 (#111827):      Dark sections, hero backgrounds
Gray-600 (#4B5563):      Secondary text
White (#FFFFFF):         Cards, modals

Use in Tailwind:
text-blue-900, bg-sky-50, border-sky-200, 
from-blue-900, to-blue-800, shadow-blue-600,
hover:text-sky-400, focus:ring-blue-600
```

---

This design maintains **consistency**, **accessibility**, and **professional appearance** while being fully **responsive** and **performant**.
