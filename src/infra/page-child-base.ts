import {NavController, ViewController} from "ionic-angular";
import {AfterViewInit} from "@angular/core";
/**
 * Created by eu on 28/05/2017.
 */

export class PageChildBase implements AfterViewInit {

    constructor(public navCtrl: NavController,
                private viewCtrl: ViewController) {


    }

    ngAfterViewInit() {
        if (!!this.viewCtrl) {
            this.viewCtrl.setBackButtonText("");
        }

        this.childAfterViewInit();
    }

    protected childAfterViewInit() {
    }

}
