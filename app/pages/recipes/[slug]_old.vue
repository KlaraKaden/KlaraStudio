<template>
  <div id="body-recipes">
    <a class="back-button" href="javascript:history.back()"><span><i class="fa-solid fa-arrow-left"></i></span></a>

    <main class="main-recipes" v-if="recipe">
      <div class="image-time">
  <img id="recipe-image" :src="resolveImage(recipe.image)" :alt="recipe.title" @error="onImgError" />
        <div class="amount">
          <i class="fa-solid fa-utensils" style="font-size: 24px"></i>
          <p class="amount-number">{{ recipe.amount || '' }}</p>
        </div>
        <div class="time">
          <i class="fa-regular fa-clock" style="font-size: 24px"></i>
          <p class="timerecipe">{{ recipe.time || '' }}</p>
        </div>
      </div>

      <div id="head-text">
        <h1>{{ recipe.title }}</h1>
        <a v-if="recipe.pdf" :href="recipe.pdf" target="_blank" class="printPDF">PDF Drucken <i class="fa fa-print"></i></a>
        <div v-if="recipe.description" v-html="renderMarkdown(recipe.description)"></div>
      </div>

      <div id="ingredients">
        <div id="main-ingredients">
          <h2>Zutaten</h2>
          <div v-for="(block, bi) in groupedIngredients" :key="bi">
            <template v-if="block.type === 'heading'">
              <h3 v-html="renderInline(block.text)"></h3>
            </template>
            <template v-else>
              <ul>
                <li v-for="(it, ii) in block.items" :key="ii" v-html="renderInline(it)"></li>
              </ul>
            </template>
          </div>
        </div>
      </div>

      <div id="preparation">
        <h2>Zubereitung</h2>
        <div v-for="(step, i) in recipe.steps" :key="i">
          <template v-if="isHeading(step)">
            <h3>{{ getHeadingText(step) }}</h3>
          </template>
          <template v-else>
            <div v-html="renderMarkdown(step)"></div>
          </template>
        </div>
      </div>
    </main>

    <div v-else>
      <p>Rezept nicht gefunden.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import fallbackImg from '~/assets/images/Bild_folgt.png'

function resolveImage(src) {
  if (!src) return fallbackImg
  try {
    const s = String(src)
    if (/^https?:\/\//.test(s)) return s
    if (s.startsWith('/uploads') || s.startsWith('/_nuxt') || s.startsWith('/public/')) return s
    if (s.startsWith('/assets') || s.startsWith('assets/')) return fallbackImg
    return s
  } catch (e) {
    return fallbackImg
  }
}

definePageMeta({ layout: 'recipe' })

const route = useRoute()

function normalizeSlug(s) {
  if (!s) return ''
  let v = String(s)
  try { v = decodeURIComponent(v) } catch (e) { /* ignore */ }
  v = v.replace(/\.[a-z0-9]+$/i, '')
  return v.toLowerCase()
    .replace(/[äÄ]/g, 'ae')
    .replace(/[öÖ]/g, 'oe')
    .replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\-]/g, '')
}

const slugParam = computed(() => normalizeSlug(route.params.slug || ''))

// Fetch the recipe list from server and pick the matching recipe by slug/title.
const { data: recipeData, pending, error } = useAsyncData(() => `recipe-${slugParam.value}`, async () => {
  const list = await $fetch('/api/recipes')
  if (!Array.isArray(list)) return null
  let found = list.find(r => normalizeSlug(r.slug) === slugParam.value)
  if (!found) {
    found = list.find(r => normalizeSlug(r.title) === slugParam.value || normalizeSlug(r.title).includes(slugParam.value))
  }
  return found || null
})

const recipe = recipeData

function isHeading(s) {
  if (!s) return false
  // markdown-style heading (# Heading) or lines ending with ':'
  return /^#{1,6}\s+/.test(s) || /:\s*$/.test(s)
}

function getHeadingText(s) {
  if (!s) return ''
  const m = s.match(/^#{1,6}\s+(.*)$/)
  if (m) return m[1]
  return s.replace(/:\s*$/, '')
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderInline(text) {
  if (!text) return ''
  let t = escapeHtml(text)
  // code
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>')
  // bold **text**
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  // italic *text*
  t = t.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  // links [text](url)
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  return t
}

function renderMarkdown(md) {
  if (!md) return ''
  const lines = md.split(/\r?\n/)
  let out = ''
  let inList = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === '') {
      if (inList) { out += '</ul>'; inList = false }
      out += '<p></p>'
      continue
    }
    if (/^[-*]\s+/.test(trimmed)) {
      if (!inList) { out += '<ul>'; inList = true }
      out += '<li>' + renderInline(trimmed.replace(/^[-*]\s+/, '')) + '</li>'
      continue
    }
    if (inList) { out += '</ul>'; inList = false }
    // headings
    const m = trimmed.match(/^(#{1,6})\s+(.*)$/)
    if (m) {
      const level = Math.min(3, m[1].length) // map to h1-h3
      out += `<h${level}>${renderInline(m[2])}</h${level}>`
      continue
    }
    // ending with ':' -> treat as subheading
    if (/:$/.test(trimmed)) {
      out += `<h3>${renderInline(trimmed.replace(/:$/, ''))}</h3>`
      continue
    }
    out += `<p>${renderInline(trimmed)}</p>`
  }
  if (inList) out += '</ul>'
  return out
}

function groupLinesToBlocks(lines) {
  const groups = []
  let current = []
  for (const raw of (lines || [])) {
    const line = String(raw || '').trim()
    if (line === '') continue
    if (isHeading(line)) {
      if (current.length) { groups.push({ type: 'list', items: current }); current = [] }
      groups.push({ type: 'heading', text: getHeadingText(line) })
    } else {
      current.push(line)
    }
  }
  if (current.length) groups.push({ type: 'list', items: current })
  return groups
}

const groupedIngredients = computed(() => {
  const r = recipe && recipe.value ? recipe.value.ingredients || [] : []
  return groupLinesToBlocks(r)
})

function onImgError(ev) {
  try { ev && ev.target && (ev.target.src = fallbackImg) } catch (e) { }
}
</script>

<style scoped>
/* small scoped adjustments for layout inside the layout's imported CSS */
/* .back-button { text-decoration: none; color: #36401f } */
</style>
