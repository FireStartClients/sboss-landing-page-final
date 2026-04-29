import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Guard: during Vercel builds without env vars, return a safe no-op client
// so pages that call Supabase at build time return empty data instead of crashing.
if (!supabaseUrl || !supabaseKey) {
  console.warn('[SBOS Landing] Supabase env vars missing — check .env.local or Vercel Environment Variables')
}

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : {
      // Minimal no-op stub — all query chains resolve to { data: [], error: null }
      from: () => ({
        select: () => ({
          eq:          function() { return this },
          order:       function() { return this },
          maybeSingle: () => Promise.resolve({ data: null,  error: null }),
          then:        (fn) => Promise.resolve({ data: [],  error: null }).then(fn),
        }),
      }),
    }
