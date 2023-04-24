import fs from 'fs';

fs.writeFile('salida.txt', 'crear archivo', function (err) {
  if (err) throw err;
  console.log('El archivo fue creado de manera exitosa');
});

copiar('entrada.txt', 'salida.txt')

function copiar(entrada, salida){
    fs.copyFile(entrada, salida, (err) => {
        if (err) throw err;
        console.log('El contenido del archivo original fue copiado');
      });
}
