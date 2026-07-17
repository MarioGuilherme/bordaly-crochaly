const products = [
  {
    title: "Branca de Neve",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/branca-de-neve-rn5lo",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/13-099affbf44c1234f4e17819989889267-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/15-b4e267769878d80c4617819990426973-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/14-d0ce6348668e7a6b2017819990427456-1024-1024.webp"
    ]
  },
  {
    title: "Bela e a Fera",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/bela-e-a-fera-qwec3",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/16-d6f6425760797726bd17819991330904-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/19-810498e33134f37d4617819991378358-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/18-260e85936914871b7617819991378072-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/17-8c0d0def8b71f020eb17819991382444-1024-1024.webp"
    ]
  },
  {
    title: "Cinderela",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/cinderela-8aom9",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/1-0a8e4c1d78ce32b54117819991972269-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/3-c754af3ca41da0eac217819992079178-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/2-c876aa7f4e158721db17819992075936-1024-1024.webp"
    ]
  },
  {
    title: "Ariel",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/ariel-8ombh",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/10-18f51689cd7e4a5fa717819992212108-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/12-7f362f31736c31057417819992271272-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/11-d30cdb3bf780ad3cd017819992270357-1024-1024.webp"
    ]
  },
  {
    title: "Tinkerbell",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/tinkerbell-xfvso",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/7-bc92b17abee24e87a817819992757379-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/9-cc2c774d0081724d6617819992801754-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/8-ab05789876673dd03717819992804500-1024-1024.webp"
    ]
  },
  {
    title: "Aurora",
    category: "Pingente",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/aurora-1uxbo",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/10-18f51689cd7e4a5fa717819992212108-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/12-7f362f31736c31057417819992271272-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/11-d30cdb3bf780ad3cd017819992270357-1024-1024.webp"
    ]
  },
  {
    title: "Pibble",
    category: "Boneco",
    details: "Fio de algodão · ~6 cm",
    link: "https://bordalycrochaly.lojavirtualnuvem.com.br/produtos/pibble-owtl4",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/1111-408f1739d9c393ae2617820012128665-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/33333-aec2029b16143daaa817820012176480-1024-1024.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/703/941/products/2222-718be5dc7f90a9271217820012212172-1024-1024.webp"
    ]
  }
];

const renderProduct = product => `
  <article class="piece" data-cat="${product.category.toLowerCase()}">
    <div class="carousel">
      <div class="slides">
        ${product.images.map(i =>
          `<img src="${i}" alt="${product.title} — foto 1" loading="lazy">`
        )}
        </div>
      <button class="c-btn c-prev" aria-label="Foto anterior">‹</button>
      <button class="c-btn c-next" aria-label="Próxima foto">›</button>
      <div class="dots"></div>
    </div>
    <div class="info">
      <span class="tag">${product.category}</span>
      <h3>${product.title}</h3>
      <span class="detail">${product.details}</span>
      <a class="buy-btn" href="${product.link}" target="_blank" rel="noopener">🛒 Comprar na loja</a>
    </div>
  </article>
`;


document.querySelector("#galeria").innerHTML = products.map(p => renderProduct(p)).join("")
