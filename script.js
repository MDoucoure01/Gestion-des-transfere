let btn_next = document.querySelector('.next')
let btn_plus = document.querySelector('.btn-detail')
let card = document.querySelector('.card')
let btn_enregistre = document.querySelector('.btn_enregistre')
let input_montant = document.querySelector('.form-control')
let notification = document.querySelector('.notification')

let a = 0
let argent = 0
let valeur = 0
let number = 0
let indice = -1
let ver = 0


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const client = [
    { nom: 'Doucoure', prenom: 'Mohamed', email: 'mouhamed12@gmail.com', phone: '785444510', transaction: [[1, 2, 3, 4], ['10-01-2023', '01-02-2023', '01-10-2023', '12-16-2023'], [-1, 1, 1, -1], [12000, 12000, 12500, 1300]], src: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', solde: 10000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Ndiaye', prenom: 'Diogual', email: 'diogalSA12@gmail.com', phone: '781943098', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [12000, 12000]], src: 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', solde: 2000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Diop', prenom: 'Babacar', email: 'diopSA12@gmail.com', phone: '781254434', transaction: [[1, 2, 3], ['10-01-2023', '01-02-2023', '01-05-20023'], [-1, 1, -1], [12000, 12000, 12000]], src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80', solde: 3000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Ndiaye', prenom: 'Mar', email: 'MarSA12@gmail.com', phone: '783321099', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [1200, 1200]], src: 'https://plus.unsplash.com/premium_photo-1664355811228-3baa53f4b179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', solde: 4000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Ndiaye', prenom: 'Maimouma', email: 'NdiayeSA12@gmail.com', phone: '771234567', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [13000, 13000]], src: 'https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', solde: 5000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Fall', prenom: 'babacar', email: 'FallSA12@gmail.com', phone: '789789988', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [1000, 1000]], src: 'https://images.unsplash.com/photo-1483193722442-5422d99849bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', solde: 6000, envoyer: 1, soldeTranfere: 0 },
    { nom: 'Sene', prenom: 'Aly', email: 'AlySA12@gmail.com', phone: '778900990', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [12000, 12000]], src: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', solde: 7000, envoyer: 1 },
    { nom: 'Wann', prenom: 'Birane', email: 'WaneSA12@gmail.com', phone: '761234566', transaction: [[1, 2], ['10-01-2023', '01-02-2023'], [-1, 1], [120, 120]], src: 'https://plus.unsplash.com/premium_photo-1664100478116-0d43d1ba44c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', solde: 8000, envoyer: 1, soldeTranfere: 0 }
]

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bouton_plus = document.querySelector('.plus')
let modal = document.querySelector('.modal')
let ajouter = document.querySelector('.Ajouter')
let annuler = document.querySelector('.Annuler')
let Nom = document.querySelector('.nom')
let Prenom = document.querySelector('.Prenom')
let Email = document.querySelector('.email')
let Phone = document.querySelector('.phone')
let imag = document.querySelector('.image')
let name = 0
let lastName = 0
let mail = 0
let phoneNumber = 0
let img

let longueur = client.length

bouton_plus.addEventListener('click', () => {
    Nom.addEventListener('change', () => {
        name = Nom.value
    })
    Prenom.addEventListener('change', () => {
        lastName = Prenom.value
    })
    Email.addEventListener('change', () => {
        mail = Email.value
    })
    Phone.addEventListener('change', () => {
        phoneNumber = Phone.value
    })
    imag.addEventListener('change', () => {
        img = imag.value
    })
    card.style.display = 'none'
    modal.style.display = 'flex'

})

annuler.addEventListener('click', () => {
    card.style.display = 'block'
    modal.style.display = 'none'
})
let object = {
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    transaction: [[], [], [], []],
    src: '',
    solde: 0
}
ajouter.addEventListener('click', () => {
    if (name == 0 || lastName == 0 || mail == 0 || phoneNumber == 0) {
        alert("veiller saisir toute les cases")
    } else {
        object.nom = name
        object.prenom = lastName
        object.email = mail
        object.phone = phoneNumber
        object.src = img
        client.push(object)
        card.style.display = 'block'
        modal.style.display = 'none'
        longueur++
    }
    console.log(client);
})
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const nom = document.querySelector('#lastname');
const prenom = document.querySelector('#firstname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const solde = document.querySelector('#Solde');
const image = document.getElementsByTagName('img');
let entete = document.getElementsByTagName('tbody')
let nbr_transaction = document.getElementsByTagName('code')
let dpt_rtr = document.querySelector('#trans')
let montants = document.querySelector('#mnt')
let num = document.querySelector('#num')
let cre = document.querySelector('.cre')


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

btn_plus.addEventListener('click', () => {
    dpt_rtr.addEventListener('change', () => {
        valeur = dpt_rtr.value;
        // console.log(valeur);
    })
    card.style.overflow = 'visible'
})



nom.textContent = `${client[a].nom}`;
prenom.textContent = `${client[a].prenom}`;
email.textContent = `${client[a].email}`;
phone.textContent = `${client[a].phone}`
image[0].src = `${client[a].src}`
solde.textContent = `${client[a].solde}`
nbr_transaction[0].innerHTML = client[0].transaction[0].length
entete[0].innerHTML = ''
for (let i = 0; i < client[a].transaction[0].length; i++) {
    let tr = document.createElement('tr');
    for (let index = 0; index < 4; index++) {
        td = document.createElement('td');
        td.innerHTML = client[a].transaction[index][i]
        tr.appendChild(td)
    }
    entete[0].appendChild(tr);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

btn_next.addEventListener('click', () => {
    console.log(longueur);
    notification.innerHTML = ''
    entete[0].innerHTML = ''
    a++
    if (a == longueur) {
        a = 0;
    }
    nbr_transaction[0].innerHTML = client[a].transaction[0].length
    nom.textContent = `${client[a].nom}`;
    prenom.textContent = `${client[a].prenom}`;
    email.textContent = `${client[a].email}`;
    phone.textContent = `${client[a].phone}`
    image[0].src = `${client[a].src}`
    solde.textContent = `${client[a].solde}`


    for (let i = 0; i < client[a].transaction[0].length; i++) {
        let tr = document.createElement('tr');
        for (let index = 0; index < 4; index++) {
            td = document.createElement('td');
            td.innerHTML = client[a].transaction[index][i]
            tr.appendChild(td)
        }
        entete[0].appendChild(tr);
    }

})

btn_plus.addEventListener('click', () => {
    dpt_rtr.addEventListener('change', () => {
        valeur = dpt_rtr.value;
        if (valeur == 'e') {
            cre.style.display = 'block'
            annule_transaction.style.display = 'block'
            num.addEventListener('change', () => {
                number = num.value;
            })
        }
    })
    montants.addEventListener('change', () => {
        argent = montants.value;
    })
    card.style.overflow = 'visible'
})
btn_enregistre.addEventListener('click', () => {
    ver++
    if (valeur == 's') {
        notification.innerHTML = 'AUCUN TRANSACTION faite'
    } else if (valeur == 'r') {
        if (argent <= 499) {
            notification.innerHTML = 'Somme RITIRER non autoriser'
            setTimeout(() => {
                notification.style.display = 'none'
            }, 2000);
        }
        else if (argent > client[a].solde) {
            notification.innerHTML = 'Solde insuffisant pour RETIRER'
        }
        else {
            let val = (+client[a].transaction[2].length) + (+1)
            client[a].solde = (+client[a].solde) - (+argent)
            solde.textContent = `${client[a].solde}`
            client[a].transaction[2].push(-1)
            client[a].transaction[3].push(argent)
            client[a].transaction[0].push(val)
            nbr_transaction[0].innerHTML = client[a].transaction[0].length
            let date1 = new Date();
            let jour_mois = date1.getDate()
            let mois = date1.getMonth()
            mois = mois + 1;
            let annee = date1.getFullYear();
            let date2 = `${jour_mois}-${mois}-${annee}`;
            client[a].transaction[1].push(date2)
            let tr = document.createElement('tr')
            for (let index = 0; index < 4; index++) {
                td = document.createElement('td');
                td.innerHTML = client[a].transaction[index][val - 1]
                tr.appendChild(td)
            }
            entete[0].appendChild(tr);
        }
    }
    else if (valeur == 'e') {
        number_existe(number, client)
        console.log(indice);
        if (argent > client[a].solde) {
            notification.innerHTML = 'Solde insuffisant pour ENVOYER'
            setTimeout(() => {
                notification.style.display = 'none'
            }, 2000);
        }
        else {
            if (indice == -1) {
                let val = (+client[a].transaction[2].length) + (+1)
                client[a].solde = (+client[a].solde) - (+argent)
                solde.textContent = `${client[a].solde}`
                // client[a].transaction[2].push(0)
                // client[a].transaction[3].push(argent)
                // client[a].transaction[0].push(val)
                // nbr_transaction[0].innerHTML = client[a].transaction[0].length
                // let date1=new Date();
                // let jour_mois = date1.getDate()
                // let mois = date1.getMonth()
                // mois=mois+1;
                // let annee = date1.getFullYear();
                // let date2 = `${jour_mois}-${mois}-${annee}`;
                // client[a].transaction[1].push(date2)
                // let tr = document.createElement('tr')
                // for (let index = 0; index < 4; index++) {
                //     td=document.createElement('td');
                //     td.innerHTML=client[a].transaction[index][val-1]
                //     tr.appendChild(td)
                // }
                // entete[0].appendChild(tr);
                setTimeout(() => {
                    // client[a].transaction[0].pop()
                    // client[a].transaction[1].pop()
                    // client[a].transaction[2].pop()
                    // client[a].transaction[3].pop()
                    notification.innerHTML = 'numero no existant'
                    client[a].solde = (+client[a].solde) + (+argent)
                    solde.textContent = `${client[a].solde}`
                    client[a].transaction[2].push(0)
                    client[a].transaction[3].push(argent)
                    client[a].transaction[0].push(val)
                    nbr_transaction[0].innerHTML = client[a].transaction[0].length
                    let date1 = new Date();
                    let jour_mois = date1.getDate()
                    let mois = date1.getMonth()
                    mois = mois + 1;
                    let annee = date1.getFullYear();
                    let date2 = `${jour_mois}-${mois}-${annee}`;
                    client[a].transaction[1].push(date2)
                    let tr = document.createElement('tr')
                    for (let index = 0; index < 4; index++) {
                        td = document.createElement('td');
                        td.innerHTML = `<s>${client[a].transaction[index][val - 1]}</s>`
                        tr.appendChild(td)
                    }
                    entete[0].appendChild(tr);
                }, 2000);

            } else {
                notification.innerHTML = 'ENVOYER avec succes'
                console.log(argent);
                client[a].soldeTranfere = argent
                console.log(client[a].soldeTranfere);
                setTimeout(() => {
                    notification.style.display = 'none'
                }, 2000);
                let val = (+client[a].transaction[2].length) + (+1)
                client[a].solde = (+client[a].solde) - (+argent)
                solde.textContent = `${client[a].solde}`
                client[a].transaction[2].push(0)
                client[a].transaction[3].push(argent)
                client[a].transaction[0].push(val)
                nbr_transaction[0].innerHTML = client[a].transaction[0].length
                let date1 = new Date();
                let jour_mois = date1.getDate()
                let mois = date1.getMonth()
                mois = mois + 1;
                let annee = date1.getFullYear();
                let date2 = `${jour_mois}-${mois}-${annee}`;
                client[a].transaction[1].push(date2)
                let tr = document.createElement('tr')
                for (let index = 0; index < 4; index++) {
                    td = document.createElement('td');
                    td.innerHTML = client[a].transaction[index][val - 1]
                    tr.appendChild(td)
                }
                entete[0].appendChild(tr);

                // console.log(indice);
                client[indice].solde = (+client[indice].solde) + (+argent)
                client[indice].transaction[2].push(3)
                client[indice].transaction[3].push(argent)
                client[indice].transaction[0].push(val)
                client[indice].transaction[1].push(date2)
                // console.log(client[indice]);
                client[a].envoyer = 0
            }


        }
    }
    else {
        if (argent <= 499) {
            notification.innerHTML = 'DEPOT no autoriser'
            setTimeout(() => {
                notification.style.display = 'none'
            }, 2000);
        }
        else {
            let val = (+client[a].transaction[2].length) + (+1)
            client[a].solde = (+client[a].solde) + (+argent)
            solde.textContent = `${client[a].solde}`
            client[a].transaction[2].push(1)
            client[a].transaction[3].push(argent)
            client[a].transaction[0].push(val)
            nbr_transaction[0].innerHTML = client[a].transaction[0].length
            let date1 = new Date();
            let jour_mois = date1.getDate()
            let mois = date1.getMonth()
            mois = mois + 1;
            let annee = date1.getFullYear();
            let date2 = `${jour_mois}-${mois}-${annee}`;
            client[a].transaction[1].push(date2)
            let tr = document.createElement('tr')
            for (let index = 0; index < 4; index++) {
                td = document.createElement('td');
                td.innerHTML = client[a].transaction[index][val - 1]
                tr.appendChild(td)
            }
            entete[0].appendChild(tr);
            notification.innerHTML = `Nouveau Solde ${client[a].solde}`
            setTimeout(() => {
                notification.style.display = 'none'
            }, 2000);
        }
    }
    // card.style.overflow = 'hidden'
})

function number_existe(number, client) {
    for (let i = 0; i < client.length; i++) {
        if (client[i].phone == number) {
            indice = i
        }
    }
}

const clientList = document.querySelector('#search-results');
const searchInput = document.querySelector('.Rechercher');
const clientList2 = document.querySelector('.results')

function displayClients(searchValue) {
    clientList.innerHTML = '';

    const filteredClients = client.filter(client => client.nom.toLowerCase().startsWith(searchValue.toLowerCase()) || client.prenom.toLowerCase().startsWith(searchValue.toLowerCase()) || client.phone.toLowerCase().startsWith(searchValue.toLowerCase()));

    filteredClients.forEach(C => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<div class="couleur">${C.prenom} ${C.nom}-${C.phone}</div>`;
        clientList.appendChild(listItem);
        const couleur = document.querySelector('.couleur')
        couleur.addEventListener('click', () => {
            searchInput.value = `${C.prenom} ${C.nom} ${C.phone}`
            console.log(listItem.textContent);
            let coupe = listItem.textContent.split("-")
            number_existe(coupe[1], client)
            nom.textContent = `${client[indice].nom}`;
            prenom.textContent = `${client[indice].prenom}`;
            email.textContent = `${client[indice].email}`;
            phone.textContent = `${client[indice].phone}`
            image[0].src = `${client[indice].src}`
            solde.textContent = `${client[indice].solde}`
            nbr_transaction[0].innerHTML = client[indice].transaction[0].length
            entete[0].innerHTML = ''
            for (let i = 0; i < client[indice].transaction[0].length; i++) {
                let tr = document.createElement('tr');
                for (let index = 0; index < 4; index++) {
                    td = document.createElement('td');
                    td.innerHTML = client[indice].transaction[index][i]
                    tr.appendChild(td)
                }
                entete[0].appendChild(tr);
            }
        })
    });
}

function displayClients2(searchValue) {
    clientList2.innerHTML = '';
    const filteredClients = client.filter(client => client.nom.toLowerCase().startsWith(searchValue.toLowerCase()) || client.prenom.toLowerCase().startsWith(searchValue.toLowerCase()) || client.phone.toLowerCase().startsWith(searchValue.toLowerCase()));

    filteredClients.forEach(client => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<div class="couleur2">${client.phone}</div>`;
        clientList2.appendChild(listItem);
        const couleur2 = document.querySelector('.couleur2')
        couleur2.addEventListener('click', () => {
            num.value = `${client.phone}`
            number = num.value;
        })
    });
}

searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;
    if (searchValue.length >= 3) {
        displayClients(searchValue);
    } else {
        clientList.innerHTML = '';
    }
});

num.addEventListener('input', (e) => {
    const search = e.target.value
    displayClients2(search)
})

const annule_transaction = document.querySelector('.Annule_transaction')
const oui = document.querySelector('.Oui')
const Non = document.querySelector('.Non')



oui.addEventListener('click', () => {
    if (client[a].envoyer == 1) {
        alert('Ce client n\'a pas fait d\'envoie')
        notification.innerHTML = "'Ce client n\'a pas fait d\'envoie'"
    } else {
        if (ver == 0) {
            notification.innerHTML = 'annulation impossible'
        } else {
            number_existe(number, client)
            if (client[indice].solde < client[a].soldeTranfere) {
                alert(`Argent Retirer par ${client[indice].prenom} `)
                notification.innerHTML = 'Argent Retirer vous etes payer par le service'
            } else {
                let val = (+client[a].transaction[2].length) + (+1)
                client[a].solde = (+client[a].solde) + (+client[a].soldeTranfere)
                solde.textContent = `${client[a].solde}`
                client[a].transaction[2].push(3)
                client[a].transaction[3].push(argent)
                client[a].transaction[0].push(val)
                console.log(client[a].transaction[2]);
                nbr_transaction[0].innerHTML = client[a].transaction[0].length
                let date1 = new Date();
                let jour_mois = date1.getDate()
                let mois = date1.getMonth()
                mois = mois + 1;
                let annee = date1.getFullYear();
                let date2 = `${jour_mois}-${mois}-${annee}`;
                client[a].transaction[1].push(date2)
                let tr = document.createElement('tr')
                for (let index = 0; index < 4; index++) {
                    td = document.createElement('td');
                    td.innerHTML = `${client[a].transaction[index][val - 1]}`
                    tr.appendChild(td)
                }
                entete[0].appendChild(tr);



                client[indice].solde = (+client[indice].solde) - (+client[a].soldeTranfere)
                client[indice].transaction[2].push(2)
                client[indice].transaction[3].push(argent)
                client[indice].transaction[0].push(val)
                client[indice].transaction[1].push(date2)
                client[a].envoyer = 1
            }
        }
    }
    annule_transaction.style.display = 'none'
})
Non.addEventListener('click', () => {
    annule_transaction.style.display = 'none'
})