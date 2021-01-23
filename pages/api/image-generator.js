import { getScreenshot } from '../../lib/imageGenerator';

const getHTML = ({ title, number, description }) => `
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
    <style>
      html {
        font-size:62.5%;
      }
      body {
        position:relative;
        margin: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        background-size:cover;
        background-image:url('https://res.cloudinary.com/devocionalonline/image/upload/v1611326280/header_nxakra.webp');
      }
      body:before {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        content:'';
        background-color:rgba(0,0,0,.7);
        z-index:0;
      }
      h1 {
        font-family:'Merriweather', serif;
        position:relative;
        font-size:50px;
        color: #fff;
        text-align: center;
        margin-bottom:-10px;
        z-index:1;
      }
      h2 {
        max-width:80%;
        font-family:'Merriweather', serif;
        position:relative;
        font-size:22px;
        font-weight:normal;
        color: #fff;
        text-align: center;
        z-index:1;
      }
      span {
        font-family:'Merriweather', serif;
        position:relative;
        font-size:18px;
        color: #fff;
        text-align: center;
        text-transform:uppercase;
        margin-bottom:-20px;
      }
      footer {
        position:absolute;
        bottom:6rem;
        font-size:20px;
        letter-spacing:1px;
        color:#ffffff;
      }
    </style>
  </head>
  <body>
    <span>Sermão ${number}</span>
    <h1>
    ${title}
    </h1>
    <h2>
    ${description}
    </h2>
    <footer><strong>sermoesjohnwesley</strong>.com.br</footer>
  </body>
</html>
`;

export default async (req, res) => {
  const isHTMLDebugMode = false;
  const html = getHTML({
    title: req.query.title || 'Adicione na URL: /?title=Titulo',
    number: req.query.number,
    description: req.query.description
  })
  
  if (isHTMLDebugMode) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(html)
  }
  const file = await getScreenshot(html, { width: 1200, height: 627 })
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')
  res.end(file);
}