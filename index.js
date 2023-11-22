const mod = require('fix-esm').require('deep-eql')

const defExport = mod.default

for (const [k, v] of Object.entries(mod)) {
  if (k === 'default') continue
  defExport[k] = v
}

module.exports = defExport
