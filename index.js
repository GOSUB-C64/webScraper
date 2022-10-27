const PORT = 8000

import axios from 'axios'
import express from 'express'
import cheerio from 'cheerio'
import { append } from 'cheerio/lib/api/manipulation'

const app = express()
app.listen(PORT, () => console.log('server running on PORT $(PORT)'))