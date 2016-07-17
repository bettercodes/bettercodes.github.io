"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by donghoon on 2016. 7. 11..
 */
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var ContactComponent = (function () {
    function ContactComponent() {
        this.map_img = {
            "src": "bettercode_resources/korea_china_map.png"
        };
        this.lat = 37.335887;
        this.lng = 126.584063;
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: "contact",
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            styleUrls: ["app/module/section/contact/contact.css"],
            templateUrl: "app/module/section/contact/contact.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=app.component.contact.js.map