import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const IMAGES = [
  ['logo-cofercan', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA23HSCWqlo5PnIxG5tkb6XwB02ybXIKls6gulejR8d6Mclpis4dB0av9FNsmJ97cLJhb9CagSlI3_78n4hC4uYnRm7KI32OhcYRXDaiKwLJOKAhQZd2LIiRPBiZcfZaSOksojTlNbjbkSKqDpO_hQETezynJpvb3mzNMQ6LGP6VgUbxaY1uOHxbc2xZ-B1_GWDVdzIHG0iTh1DxlJj33Ofi3zLTMMuAORWppf34m_NoXxlYmj4gb4ilxqYCRuJnHc15ag'],
  ['hero-fachada', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKkl56NS_sBkaxXS_f-_lAN6a1okD5k44AeoLnYrwLioz4KUPzoHavmVDFilLJknRZviV5ZZsVHZiXwPStWTjiiNPjQuccbeXLa4Pq0x_ufXujxdyAhaLvSh-eBHEknIAhd0pt2MCCYxtJKwPXQafQXIyepUjTD5aIzjoI2I9AuhpmD0Pi4vdHJbYGvia6xN9UI7vs_cWSgnYmUz0Nuv6_m-f-Jtf18OeCPsaoI2u9zGuqFjRryUqVjA'],
  ['produto-telhas-metalicas', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Ra2iX4fhF1PZ97kftUFdq5svjkFAR_yslf3AgMktSli2Kn3jeuFiH3jEgWef_7DuPQGZkg0ddC9AAQjlAjPkd_KLTxi3cK7hywad1vOXRXz0X3LGO82wzjGHXE1Z5zjngHEAprQeDRxp-f9BDTLu9-UsMjTkO1OvDhtEgtTgRdqBHZUNTcMaKoATnR4dQTyoSEBv_HHzJxS5qcOTDG_8BQGZkdNT6Cq1W87EGHbKHTkvrVFWZ0mL2w'],
  ['produto-telhas-termoacusticas', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCi-hAcg5sMWTwypavUJ7YS7MPR8gcdg5lq9pN3ZDjWONM6VBPq5skxaSIv2jh6WapAsj6_KxULnhsdTSFU9S-x7WtNv8eyMUTQrCyVyXX2_cs9k4NG3e1AMc0CpXrkLANhX-F7SVQJdojwZVDfhzy7An6qItZDcmCy00Dr8OvC-lmDbAv-NxGFOvjfhzNUiicaQpCEYg6W856vQr4c19C0bqQv329XI2jaCzcqzcvX9EQWf-3J5HA_g'],
  ['produto-tubos-aco', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1yb1b1HxuxzGOIrDpoe1j64hxun-eeCY0eiDz9YvGzJ9dWonWPu7-ivudN1Y2bseDDkoadJQY4tLzn9FTkkP7wkmDX8soTXrt9YhaHJ_EQP2ZXmQM2uOgFAcgjOS8XNPho9WdOCyBG745G3qr8a60EOJNJh7T2ZSFHPDKcI0S3fk3CwT-S8hcCsg32hDU_wmkq0TP9wtoLDKlUQVwJPuxM1jaNPZNFQo_sHRT0kZfZQcwROkJoAQjEw'],
  ['produto-vigas-perfis', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3sYccqCyuBHu56rwLfft0nN-h-RjBI9I5gPOSVaMYqg-o0Egorapfw5EaDbeDhBxWSUmTqSPUa8ZZsjbrISWQEI3Za42WM9E3SlNmz5LO70J_Nvmu_Ikc8IPzlYziUWLpHgrK_OsBHOPIYUADbxtI3pjKUBDY2Sapwo3NonI6QZ7u9lLWKVKA08XqOK4N0NCnDv4KEpuzfEuvz9xSiPAcmhXOJ6d7exoYdDyUHklQi8MnK5Jc289c7g'],
  ['produto-chapas-aco', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBytZ4WS9jBkZIjqcbZqzxxUzTQs7MRFYgHwtrwuXaONv-E6-zhQLzht6lH8X2M5NvmMkQM1f3CBLGMDOouSjZNKyKt3sQJGC_PoHihlWtwNr0M22767UEh8PqkLWTkVMCdIyNoCU_TDaq1rcMt0clDZxsWkkkTlVX7RMkGbJshPeUd183thMPvR77iUPil4iKQkqpD-Xnzyj15NUym5eaRrGUbO7ZAhjTNMmxob1a5m8yjbMw3CMlOrg'],
  ['produto-cumeeiras-acessorios', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL0vrd3KZ6JyTqNyDoO8Iy9tQTJdrJ3_8eMIACp-NB8Iv_8Bl4Q7bvmsK5jm_aDtyzOVsXAa7j1ScZw-geKbwKt3qj-o2sylu03REfpO4r5_qtC7sgTAqvZoYUJFPnBg1lg4N1e468hT5y1iaN6C0496pzu7X6_Mx1dv9tiy3L0xZI0apap-LZWHC2YGCUdh6CzuOfdWkatuwy4bZdyRqVkVLgn9XtOySuuLeC9qhgbrWlGuq02DGtOQ'],
  ['instalacoes-canoas', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaITKqeoS4EiL5yrmRC9aSJ2GoyAPyBp3NLYxsIVE32frWi9OVfqUG3UwdA1Q9gB56KJS8v6PYNxOmetixhYtVLH-zLT3H0xv8jWLy6lN2NquxWYCZubpJWt9g7oK0siMKEkiwNbO9M2M6JKNK1ufYBEI92ZLqVWeJWV5eiQ5h2UY076JRwQsn_BKGuGIOVFGlFFe4Txx-BjHa4eZjxhRSwIeDcn-V0haRhXdttpej38hQCXlI6S1XjYvDprBA-HsszEk'],
  ['corte-aco-industria', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD65FwJqsvnec5MUyDMuCwWacLIREJjDE-oiTI4KTO0B4o-IjNZZlqQbcboRW5r4CkalVm2Ve5Op0txtfuJ3A2-tYnL_r2WUROl_L-X0Kx5uY8lufm8hQb26tqJdg68DbqPQJzj7bVWCJ10cvhGVRtOg-j3slIFrxE5zAY8Fjdpw9YUDHkehDtmMrr0kLee5c2upPMA5WUnU334qlczCLL_07Zq4LTNLudUOYgwLpVoAQ2BRY4Ks-virYw-w-DK3cJZIpw'],
  ['equipe-cofercan', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwZCnMX0ZRMXMbSN9Iki_pE98sYbqliBVg40M8_dYHn0cixLoAhARh80c1JjisBcjvoAgYvd5udK8vDegj6m_q4V2Q_XuAgiNQH5S_yKLODvrk4fW0ocX4cHZpFFlWGk_7GEMUOEjrDqB_ZpAwMXjORt4wBioXZfeDz3R1L8lMg7SCV24wok-414-w9aL9_2kVA1zFzmGaDyn49ndhfVQhvvFm-LHzXWz-8FZzwkkMJXr0LWRYZSnFTA'],
]

const EXTENSIONS = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/svg+xml': 'svg',
}

const targetDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/images')
await mkdir(targetDir, { recursive: true })

for (const [name, url] of IMAGES) {
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Falhou: ${name} (${response.status})`)
    continue
  }
  const type = (response.headers.get('content-type') || '').split(';')[0]
  const extension = EXTENSIONS[type] || 'jpg'
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(path.join(targetDir, `${name}.${extension}`), buffer)
  console.log(`OK: ${name}.${extension}`)
}
