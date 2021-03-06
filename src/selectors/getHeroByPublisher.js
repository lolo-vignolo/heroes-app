import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if( !validPublishers.includes( publisher ) ) {
        throw new Error( `${ publisher } is not a valid publisher` );
    }

    return heroes.filter( hero => hero.publisher === publisher );
}


// import { heroes } from "../data/heroes";



// export const getHeroByPublisher = (publisher) => {

//     const validPubishers = ["DC Comics", "Marvel Comics"];

//     //includes me sirve para comparar "publisher"(que es lo que el usuario envio como argumento)
//     //con lo que tengo en el validPunisher.

//     if(!validPubishers.includes(publisher)){
//         throw new Error(`${publisher} does not exist`)
//     }
//     //retorno los correctos
//     return heroes.filter( hero => hero.publisher === publisher);

  
// }
