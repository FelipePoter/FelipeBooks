var listaLivros = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lpMVx1wxc7DSILNEm7G7923WuAUiwRzU_vqnLqc4g5OZ0NYir_NXZbmhXdPvi33jtkw&usqp=CAU.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopyPCEiS-C4Iy0hseiQ_4xQI32zvCyTIw4w&usqp=CAU.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2ktKxuVEdMyB3-EFTVQI21lQn_gRxf1eFA&usqp=CAU.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiICTtQsdGPGXBGWqIVVVUlpxeZ8aS2EaBFw&usqp=CAU.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yQz-qijYBNoCsUaYantlJJfSGJeII5riPxSFKAGmhoUTMasvJvjZhsSJmCWI49B1H-0&usqp=CAU.jpg",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXK3Y_9C-MeQOqM5yMp94fvQc-CwDN7QBqVMgtrQibOjuv-gpS3vjW5nelgbokzOr7Xg&usqp=CAU.jpg"
];

var nomeLivros = [
  "Sherlock Holmes: Um estudo em vermelho",
  "Harry Potter: Prisioneiro de Azkaban",
  "Harry Potter e a Ordem da Fenix",
  "Harry Potter e as reliquias da morte",
  "A quinta disciplina",
  "Os olhos do cão siberiano",
];

var i = 0;

while (i < listaLivros.length) {
  document.write("<div style='display: inline-block; margin-right: 20px; text-align: center;'>")
  document.write("<img src=" + listaLivros[i] + ">");
  document.write("<p style='color: #ffffff; font-family: Roboto Mono, monospace; text-align: center;'>" + nomeLivros[i] + "</p>");
  document.write("</div>")
  i++;
}
