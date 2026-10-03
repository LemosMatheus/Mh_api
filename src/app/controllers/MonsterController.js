class MonsterController {
    index(request, response){
        // listar todos os resgistros
        response.send("Hello World");
    }

    show(){
        //obter um registro
    }

    store(){
        //criar um novo registro
    }

    update(){
        //Editar um registro
    }

    delete(){
        //deletar um registro
    }
}

module.exports = new MonsterController();