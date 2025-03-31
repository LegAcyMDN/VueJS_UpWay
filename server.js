import express from 'express'
import path from 'path'

const app = express()
const indexFile = path.resolve('dist', 'index.html')

app.get('/env.js', (req, res) => {
  let content = ''

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith('VITE_')) {
      content += `window.${key} = "${value}"\n`
    }
  })

  res.setHeader('Content-Type', 'text/javascript')
  res.send(content)
})

app.use(express.static(path.resolve('dist')))
app.get('*', (req, res) => {
  res.sendFile(indexFile)
})

app.listen(8080, (err) => {
  if (err) {
    console.log('Server setup failed: ' + err)
    return
  }

  console.log('Server listening on port 8080')
})
