let indumentaria= [
    {
        "id": 111,
        "name": "Camiseta local nike 2004",
        "price": "$99.999",
        "image": "images/local-2024.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste estándar para una sensación relajada y cómoda. 100% poliéster. Lavar a máquina. Producto importado"
        
    },
    {
        "id": 222,
        "name": "Camiseta alt. nike 2004",
        "price": "$99.999",
        "image": "images/alternativa-2024-stadium.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste estándar para una sensación relajada y cómoda. 100% poliéster. Lavar a máquina. Producto importado"
    },
    {
        "id": 333,
        "name": "Camiseta tercera nike 2004",
        "price": "$99.999",
        "image": "images/sanlorenzo-cuarta-stadium.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste estándar para una sensación relajada y cómoda. 100% poliéster. Lavar a máquina. Producto importado"
    },
    {
        "id": 444,
        "name": "Camiseta precal. nike 2004",
        "price": "$90.000",
        "image":"images/precalentamiento.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste estándar para una sensación relajada y cómoda. 100% poliéster. Lavar a máquina. Producto importado"
    },
    {
        "id": 555,
        "name": "Pantalon estandar nike 2004",
        "price": "$105.000",
        "image":"images/pantalon.jpg",
        "description": "Con detalles de diseño específicamente pensados para fanáticos de San Lorenzo, el ajuste entallado y estilizado garantiza que nada se interponga en tu camino. La tecnología absorbente de transpiración te ayuda a mantener la frescura y la compostura mientras perfeccionás tus habilidades. Tecnología Dri-FIT. Lavar a máquina. Producto importado."
    },
    {
        "id": 666,
        "name": "Pantalon ent. nike 2004",
        "price": "$75.000",
        "image":"images/pantalon-entrenamiento.jpg",
        "description": "Con detalles de diseño específicamente pensados para fanáticos de San Lorenzo, el ajuste entallado y estilizado garantiza que nada se interponga en tu camino. La tecnología absorbente de transpiración te ayuda a mantener la frescura y la compostura mientras perfeccionás tus habilidades. Tecnología Dri-FIT. Lavar a máquina. Producto importado."
    },
    {
        "id": 777,
        "name": "Short local nike 2004",
        "price": "$50.000",
        "image":"images/short-2024.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste slim que ofrece una sensación personalizada. Pretina elástica con cordón de ajuste interno. 100% poliéster. Lavar a máquina. Producto importado"
    },
    {
        "id": 888,
        "name": "Short suplente nike 2004",
        "price": "$50.000",
        "image":"images/short-sup.jpg",
        "description": "La tecnología Nike Dri-FIT absorbe la transpiración de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad. El diseño tipo réplica está inspirado en el que usan los profesionales en el campo. Ajuste slim que ofrece una sensación personalizada. Pretina elástica con cordón de ajuste interno. 100% poliéster. Lavar a máquina. Producto importado"
    }

]

for(let i=0; i<indumentaria.length; i++){
    console.log(indumentaria[i].name);
}

let contenedorIndumentaria=document.getElementById("Indumentaria");
let contenedorIndividual= document.createElement("div");
contenedorIndividual.classList.add('card_container');


document.addEventListener("DOMContentLoaded", (event) => {
    indumentaria.forEach(producto => {
      contenedorIndividual.innerHTML += `
        <div class="card">
        
        <form id="my_form${producto.id}">
          <div>
          <img src="${producto.image}">
            <output id="nombre" name="nombre">${producto.name}</output>
            <br>
            <output id="precio" class="margin" name="precio">${producto.price}</output>
            <br>
            <button id="btnMasInfo${producto.id}" class="button margin" onclick="masInfo(${producto.id})">+ info</button>
            <div>
              <output id="description${producto.id}" class="description">
                ${producto.description}
              </output>
            </div>
          </div>
        </div>
      `;
      contenedorIndumentaria.append(contenedorIndividual);
    });
  });

  function masInfo(id) {
    event.preventDefault();
    let idx = id.toString();
    let desc = 'description' + idx;
    let btnMasInfo = 'btnMasInfo' + idx;
    document.getElementById(desc).style.display = "block";
    document.getElementById(btnMasInfo).style.display = "none";
  }


    
    


