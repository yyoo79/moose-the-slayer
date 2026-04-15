import type { Card } from '../types'

/**
 * Card portrait images sourced from sts2json.untapped.gg via the STS2 Untapped CDN.
 *
 * CDN availability note:
 *   Direct CDN requests (sts2json.untapped.gg) return 404. The images are only
 *   accessible via the untapped.gg Next.js image optimizer, which requires a
 *   Referer header from their domain — impossible from a third-party browser app.
 *
 *   Therefore, card images must be downloaded locally into public/cards/{character}/{slug}.png.
 *   This set is the pilot: 2 images to validate the display pipeline.
 *
 * Full rollout plan:
 *   Run a download script to fetch all ~566 card images at low resolution (w=64)
 *   using the Next.js optimizer URL with a Referer header, then commit to public/cards/.
 */

// Cards with locally downloaded images in public/cards/
const LOCAL_IMAGES = new Set<string>([
  'ic_bash',     // public/cards/ironclad/bash.png
  'sl_abrasive', // public/cards/silent/abrasive.png
])

/** Convert a card name to the CDN slug (lowercase, spaces → underscores, strip special chars) */
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s]+/g, '_')
}

/**
 * Returns the local image path for a card, or null if not yet downloaded.
 * Images live in public/cards/{character}/{slug}.png (served at /cards/...).
 */
export function getCardImageUrl(card: Card): string | null {
  if (!LOCAL_IMAGES.has(card.id)) return null
  const slug = nameToSlug(card.name)
  return `/cards/${card.character}/${slug}.png`
}
