# Optiro Landing Page

Modern SaaS landing page for optiro.dk built with Next.js 16 and Mantine 8.

## 🎨 Features

- **High SEO Standard**: Optimized metadata, structured data (JSON-LD), semantic HTML, and Danish language support
- **Brand Color**: Custom theme with brand color #3c735b
- **Authentic Design**: Uses the same illustrations and content structure as optiro.dk
- **Danish Content**: All content in Danish for the target market
- **Responsive Design**: Mobile-first approach with fully responsive layouts
- **Modern Stack**: Built with Next.js 16, Mantine 8, and TypeScript

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📁 Project Structure

```
app/
  ├── layout.tsx          # Root layout with SEO metadata and structured data
  └── page.tsx            # Main landing page
components/
  ├── Header/             # Navigation header with CTA buttons
  ├── Hero/               # Hero section with main value proposition
  ├── ProjectFlow/        # Project phases section
  ├── Benefits/           # ERP benefits with features
  ├── CTA/                # Call-to-action section
  └── Footer/             # Footer with links and company info
public/
  ├── hero.png            # Hero illustration
  ├── benefit1.png        # Benefit section illustration
  └── benefit2.png        # Benefit section illustration
theme.ts                  # Mantine theme with brand colors
```

## 🎯 SEO Optimizations

- ✅ Semantic HTML structure
- ✅ Optimized meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data for search engines
- ✅ Danish language attribute
- ✅ Proper heading hierarchy (H1, H2)
- ✅ Alt text for all images
- ✅ Clean, descriptive URLs
- ✅ Mobile-responsive design

## 🎨 Brand Colors

The custom theme includes the Optiro brand color (#3c735b) with a full color palette:

- Primary color: `optiro`
- Main brand shade: #3c735b (index 5)
- Additional shades from light to dark for UI consistency

## 📝 Content Sections

1. **Header**: Sticky navigation with app login and signup CTAs
2. **Hero**: Main value proposition with free trial CTA
3. **Project Flow**: 5 project phases (Udbud, Planlægning, Aktiv, Afsluttet, Tabt)
4. **Benefits**: Two main benefit sections with feature lists
5. **CTA**: Final call-to-action for free trial
6. **Footer**: Company info and legal links

## 🛠️ Technologies

- **Next.js 16**: React framework with App Router and Turbopack
- **Mantine 8**: Component library for consistent UI
- **TypeScript**: Type-safe development
- **CSS Modules**: Scoped styling
- **Tabler Icons**: Icon library

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 External Links

- Free trial signup: https://app.optiro.dk/experiences/create-new-company/sign-up
- App login: https://app.optiro.dk/experiences/login

## 📄 License

See LICENCE file for details.

