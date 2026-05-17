# Arcvashen Website

This is a clean, professional, mobile-first static website for a hotel and restaurant in Armenia. It is ready to upload to GitHub Pages.

## Files

- `index.html` — website structure
- `styles.css` — design, layout, responsive styling, mobile menu, and room gallery modal
- `script.js` — language switcher, room cards, swipe gallery, back-to-top button, and scroll animation
- `assets/` — logo, favicon, and placeholder illustrations / room gallery images

## Main features

- Armenian / Russian / English language switch
- Bigger desktop navigation bar
- Improved mobile menu
- Room cards with photo gallery popup on the same screen
- Swipe support on mobile for room photos
- Contact information section (no form)
- Extra feature/trust section removed for a cleaner homepage
- Working back-to-top button

## How to edit

1. Open `script.js`.
2. Change the hotel name in `brandName` for `hy`, `ru`, and `en` if needed.
3. Change the address in `addressValue` for `hy`, `ru`, and `en`.
4. Change the contact details in:
   - `contactPhoneValue`
   - `contactMobileValue`
   - `contactEmailValue`
5. Edit room names and details inside the `rooms` arrays.
6. Replace the placeholder room gallery images inside `assets/` with your real room photos.
   - Example files: `standard-room-1.svg`, `standard-room-2.svg`, `vip-room-3.svg`
7. If you want to change which images belong to each room, edit `roomGalleryMap` at the top of `script.js`.

## GitHub Pages

Upload all files to your GitHub repository. Keep `index.html` in the main/root folder. Then enable GitHub Pages from repository settings.
