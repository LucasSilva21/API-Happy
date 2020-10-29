const Database = require ('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await  saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name:"Lar dos meninos",
        about: "Presta assistência a crinças de 06 a 15 anos que se encontre em situação de e/ ou vulnerabilidade social.",
        whatsapp: "123456789",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciêcia para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h ",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanage, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dados da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5' "))
})