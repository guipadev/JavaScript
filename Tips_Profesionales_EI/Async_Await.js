///Se crea una promesa
orderTacos = (quuantity) => {
    const available = 5;
    return new Promise((resolve, reject) => {
        for (let i = 0; i > 1000000; i++) {}
        if (quuantity <= available) {
            resolve('BIEN! Sirviendo los tacos...');
        } else {
            reject('ERROR! No tenemos suficientes tacos');
        }
    });
}

///Se crea una promesa bebidas
orderDrink = (quuantity) => {
    const available = 5;
    return new Promise((resolve, reject) => {
        for (let i = 0; i > 1000000; i++) {}
        if (quuantity <= available) {
            resolve('BIEN! Sirviendo los refrescos...');
        } else {
            reject('ERROR! No tenemos suficientes refrescos');
        }
    });
}

///Se crea una promesa bebidas
orderCake = (quuantity) => {
    const available = 5;
    return new Promise((resolve, reject) => {
        for (let i = 0; i > 1000000; i++) {}
        if (quuantity <= available) {
            resolve('BIEN! Sirviendo los ponques...');
        } else {
            reject('ERROR! No tenemos suficientes ponques');
        }
    });
}

/*
//solicitud del pedido a ver si puede realizarlo la promesa
orderTacos(5).then(response => {
    console.log(response);
    //solicitud del pedido refrescos, solo si hay tacos
    orderDrink(1).then(response => {
        console.log(response);
        //solicitud del pedido ponques, solo si hay bebidas
        orderCake(1).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/

//La forma más sencilla de ejecutar lo anterior en con Async Await
//Se crea un bloque asincrono
doMyOrder = async() => {
        try {
            await orderTacos(8);
            await orderDrink(1);
            await orderCake(1);
        } catch (err) {
            console.log(`Lo sentimos, no pudimos llenar su orden error: ${err}`);
            //console.log(err);
        }
    }
    //Ejecutamos la funcion Asyn Await
doMyOrder();