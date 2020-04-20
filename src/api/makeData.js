import faker from 'faker';

faker.seed(125);

export const makeFaker= (indx) => {
    return {
        'id': 1+indx,
        'name': faker.name.findName(),
        'product': faker.commerce.productName(),
        'company': faker.company.companyName(),
        'country': faker.address.country(),
        'date': faker.date.past(),
        'price': faker.random.number(),
        'inStock': faker.random.boolean()
    }
}



export const newFakeData= (number=100) => {
    return new Promise((resolve) => { setTimeout(()=>{
        const data= [...new Array(number)].map((el, indx)=> makeFaker(indx))
        resolve({'data': data} );
    }, 0)
        
      });
//    const data = [...new Array(number)].map((el, indx)=> makeFaker(indx));
//    return {'data': data}
}

