// Blog data layer — reads from Supabase (same project as SBOS Application)
// Falls back to empty array if Supabase is unavailable
import { supabase } from '../lib/supabase'

// ── Fetch all published posts (used on /blog index) ─────────────────────────
export async function getPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, category, read_time, author, published_at, status')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('[SBOS Blog] Failed to fetch posts:', error.message)
    return []
  }
  return data || []
}

// ── Fetch a single post by slug (used on /blog/[slug]) ──────────────────────
export async function getPostBySlug(slug) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) {
    console.error('[SBOS Blog] Failed to fetch post:', error.message)
    return null
  }
  return data
}

// ── Fetch all slugs for generateStaticParams ─────────────────────────────────
export async function getAllSlugs() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')

  if (error) {
    console.error('[SBOS Blog] Failed to fetch slugs:', error.message)
    return []
  }
  return (data || []).map(r => r.slug)
}

// ── Category list derived from posts ────────────────────────────────────────
export async function getCategories() {
  const posts = await getPosts()
  const cats = [...new Set(posts.map(p => p.category).filter(Boolean))]
  return ['All', ...cats]
}

// Normalise DB row → shape expected by BlogPage / BlogPostPage components
export function normalisePost(row) {
  if (!row) return null
  return {
    slug:      row.slug,
    title:     row.title,
    excerpt:   row.excerpt || '',
    category:  row.category || 'Operations',
    readTime:  row.read_time || '5 min read',
    author:    row.author || 'SBOS Team',
    date:      row.published_at || row.created_at,
    body:      row.content || '',
    status:    row.status,
  }
}
