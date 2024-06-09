import BaseController from "./BaseController";


class CartaController extends BaseController {

    constructor() {
        super('mpf6of6eisdinps', 'cartaCompleta');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la image, només agafem la primera
        carta = carta.map(e => {
            let image = (e.image && e.image[0].signedUrl) ?  e.image[0].signedUrl : '';
            delete e.image;
            e.image = image;
            return e;
        });
        return carta;
    }

    async getMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.isOnMenu); 
    }

}


export default CartaController;