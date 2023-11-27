import{ InMemoryDbService } from 'angular-in-memory-web-api'

export class Testdata implements InMemoryDbService {
 createDb() {
    let BookDetails=[
        { id: 101, name: 'Angular by Sahosoft', category: 'Angular' },
        { id: 102, name: 'net core by Sahosoft', category: 'Java' },
        { id: 103, name: 'NgRx by Sahosoft', category: 'Angular' } 
    ];
    return { books: BookDetails };
    }

}
