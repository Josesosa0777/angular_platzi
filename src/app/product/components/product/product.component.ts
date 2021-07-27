import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    // OnChanges, 
    // SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy 
} from "@angular/core";
import { Product } from '../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); // inicializamos con un valor en este caso inicializamos sin ningun valor
    today = new Date ();
    // para ver los componentes de tipo porducto que tenemos
    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // para ver lo que se ejecuta, detecta los cambios, el estado anterior y el nuevo
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes)
    // }

    ngOnInit() {
        console.log('3. ngOnInit')
    }

    // ngDoCheck() {
    //     console.log('4. ngDoCheck')
    //     console.log()
    // }

    ngOnDestroy() {
        console.log('5. ngOnDestroy')
    }

    addCart() {
        console.log('añadir al carrito')
        this.cartService.addCart(this.product)
        // this.productClicked.emit(this.product.id);
    }

}