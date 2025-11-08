window.addEventListener('load', (event) => {
    document.querySelector('#idActionA1').addEventListener('click', actionA1);
    document.querySelector('#idActionA2').addEventListener('click', actionA2);
    document.querySelector('#idActionA3').addEventListener('click', actionA3);
    document.querySelector('#idActionA4').addEventListener('click', actionA4);
    document.querySelector('#idActionA5').addEventListener('click', actionA5);
    document.querySelector('#idActionA6').addEventListener('click', actionA6);
    document.querySelector('#idActionA7').addEventListener('click', actionA7);
    document.querySelector('#idActionA8').addEventListener('click', actionA8);
    document.querySelector('#idActionA9').addEventListener('click', actionA9);
    document.querySelector('#idActionA10').addEventListener('click', actionA10);
    document.querySelector('#idActionA11').addEventListener('click', actionA11);
    document.querySelector('#idActionA12').addEventListener('click', actionA12);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById('output');
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionA1() {
    const utilisationVehiculesDeTypeMoyenne = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(utilisationVehiculesDeTypeMoyenne);
}

function actionA2() {
    const types = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(types);
}

function actionA3() {
    const vehiculesParTypes = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(vehiculesParTypes);
}

function actionA4() {
    const clientsParAge = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(clientsParAge);
}

function actionA5() {
    const resultatGlobal = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(resultatGlobal);
}

function actionA6() {
    const utilisationDesVehiculesTrie = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(utilisationDesVehiculesTrie);
}

function actionA7() {
    const idClientFourni = 'IDC-32CE80';
    const dureeMinJoursLocation = 12;

    // Pour un client spécifique fourni (id) la liste triée de ses locations
    const utilisationDesVehicules = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(utilisationDesVehicules);
}

function actionA8() {
    // La liste des incidents survenus et leur détail
    const incidents = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(incidents);
}

function actionA9() {
    const TOP = 5;

    const clientsTries = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(clientsTries);
}

function actionA10() {
    const statsConducteursParVehicule = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(statsConducteursParVehicule);
}

function actionA11() {
    const caParMois = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(caParMois);
}

function actionA12() {
    const wantedType = 'Petite citadine';
    const wantedNom = 'Kia Picanto';

    const statsVehiculeFiltre = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(statsVehiculeFiltre);
}
