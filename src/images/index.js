const modules = import.meta.glob('./*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const images = {}

for (const [filePath, url] of Object.entries(modules)) {
  const name = filePath.replace('./', '').replace(/\.[^.]+$/, '')
  images[name] = url
}

export default images
