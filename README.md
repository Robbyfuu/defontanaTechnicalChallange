# DefontanaTechnicalChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Link de la aplicación

https://defontana-technical-challange.vercel.app/
## Motivo de la aplicación
Esta App se creo a solicitud de la empresa Defontana para el proceso de selección de personal, la aplicación se creo con el fin de mostrar mis conocimientos en Angular y Redux.

Ademas me gustaría destacar que me encantaría poder formar parte de su equipo de trabajo, ya que me gusta mucho el trabajo que realizan y me gustaría poder aportar mis conocimientos y experiencia en el desarrollo de aplicaciones web dado que Defontana es una gran empresa.

## Development server
Execute `npm install` to install all the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Funcionamiento de la aplicación
La aplicación consta con 4 componentes:
Header: Contiene un titulo y el nombre del pokemon seleccionado que lo obtenemos desde el Store del Redux.
pokemonTable: Que contiene una lista con todos los pokemons, en esta tabla se puede seleccionar un pokemon y esta selección se guardara en el Redux Store.
pokemonDetail: Contiene la información del pokemon seleccionado, esta información se obtiene desde el Store del Redux.
pokemonByLetter: Contiene una lista con la letra y el numero de pokemons que empiezan con esa letra.

## Redux
La aplicación se encuentra conectada con el Store de Redux, para el manejo de los estados de los componentes, en esta aplicación se manejan 1 estado, solo para el pokemon seleccionado.

