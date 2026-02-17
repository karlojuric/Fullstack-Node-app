import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(req, res, baseDir) {
    // Ignoriraj /api routes - NE obrađuj ih ovdje!
    if (req.url.startsWith('/api')) {
        return false
    }
    
    // Ignoriraj favicon
    if (req.url === '/favicon.ico') {
        res.statusCode = 204
        res.end()
        return true
    }
    
    const publicDir = path.join(baseDir, 'public')
    const filePath = path.join(
        publicDir,
        req.url === '/' ? 'index.html' : req.url
    )
    
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
        return true
    } catch (err) {
        if (err.code === 'ENOENT') {
            try {
                const content = await fs.readFile(path.join(publicDir, '404.html'))
                sendResponse(res, 404, 'text/html', content)
            } catch {
                sendResponse(res, 404, 'text/html', '<h1>404 Not Found</h1>')
            }
        } else {
            sendResponse(res, 500, 'text/html', '<h1>Server Error</h1>')
        }
        return true
    }
}