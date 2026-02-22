# Previous Boxes Page

This page displays a list of previous SnackVerse subscription boxes with details and animations.

## Created Files

1. **`src/data/previousBoxes.ts`** - Data file containing box information
2. **`components/snackverse/PreviousBoxItem.tsx`** - Component to render individual box items
3. **`src/app/previous-boxes/page.tsx`** - Main page component

## Page URL

Access the page at: `/previous-boxes`

## Adding New Boxes

To add a new box to the list, edit `src/data/previousBoxes.ts` and add a new entry to the `previousBoxes` array:

```typescript
{
  country: "Italy",        // Country name
  date: "Apr'24",         // Month and year
  description: "Discover the authentic taste of Italy with our handpicked selection!",
  boxImage: "/images/italy-box.png",           // Main box image
  boxImageMobile: "/images/italy-box.webp",    // Mobile optimized image
  specs: [
    {
      title: "Most Popular",    // Spec title
      text: "Pizza Chips",       // Spec description
      image: "/images/pizza.png" // Spec icon/image
    },
    {
      title: "Strangest",
      text: "Espresso Candy",
      image: "/images/espresso.png"
    },
    {
      title: "Healthiest",       // Optional third spec
      text: "Grissini Sticks",
      image: "/images/grissini.png"
    }
  ]
}
```

## Features

### Visual Design
- Alternating left/right layout for each box
- Purple hero section with background pattern
- Animated SVG curved paths connecting boxes
- Hover effects on specification bubbles
- Responsive design for mobile, tablet, and desktop

### Animations
- **Fade-in animations** - Content fades in as you scroll
- **SVG path animations** - Paths draw as boxes come into view
- **Intersection Observer** - Triggers animations when boxes enter viewport
- **Hover effects** - Scale transform on specification bubbles

### Responsive Behavior
- Mobile: Stacked layout with box images centered
- Tablet: Two-column layout with side-by-side content
- Desktop: Full alternating layout with curved paths

## Customization

### Styling
All styles are contained in the page component. Key CSS classes:
- `.hero` - Background hero section
- `.fadeIn` - Fade-in animation
- `.previous_boxes_thumb--path` - SVG path animation
- `.box-spec-bubble` - Specification bubble styling

### Colors
- Purple background: `#560299`
- Purple variant: `#9b4dff`
- Light background: `#f5f1ff`
- Text: `#333`

### Images Required
- Box images (main product photos)
- Box mask overlays (`/images/box_mask.png`, `/images/box_mask_2.png`)
- Specification icons (snack/product images)
- Background pattern (`/images/bg_bars_alternative.png`)

## Box Specifications

Each box can have up to 3 specifications with:
- Title (e.g., "2nd Best", "Strangest", "Most Popular")
- Description text (e.g., "Fried Noodle Chips")
- Icon/image (product photo)

Leave title and text empty for unused specification slots.
