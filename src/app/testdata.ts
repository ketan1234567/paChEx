import{ InMemoryDbService } from 'angular-in-memory-web-api'

export class Testdata implements InMemoryDbService {
 createDb() {
    let BookDetails=[
        { id: 101, name: 'Angular by Sahosoft', category: 'python23',year:'2022' },
        { id: 102, name: 'net core by Sahosoft', category: 'Java123',year:'2026' },
        { id: 102, name: 'net core by Sahosoft', category: 'Java123',year:'2026' },
        { id: 103, name: 'NgRx by Sahosoft', category: 'Angular',year:'2023' } ,
        { id: 104, name: 'NgRx by Sahosoft', category: 'Angular',year:'2023' } 
    ];
       //Text data
       let welcomeMsg = "Welcome to the Angular world!";
    return { books: BookDetails, message: welcomeMsg};
    }

}
