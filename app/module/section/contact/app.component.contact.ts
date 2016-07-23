/**
 * Created by donghoon on 2016. 7. 11..
 */
import {
    Component,
    provide
} from '@angular/core';
import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent,
    GOOGLE_MAPS_PROVIDERS,
    GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
    selector: "contact",
    directives: [GOOGLE_MAPS_DIRECTIVES],
    styleUrls: ["app/module/section/contact/contact.css"],
    templateUrl: "app/module/section/contact/contact.html"
})
export class ContactComponent {

    private map_img = {
        "src": "bettercode_resources/korea_china_map.png"
    };

    private map = {
        "beijing": "bettercode_resources/Map_Beijing.png",
        "weihai": "bettercode_resources/Map_Weihai.png",
        "sanghai": "bettercode_resources/Map_Shanghai.png",
        "shunzhen": "bettercode_resources/Map_Shenzhen.png",
    };

    // google maps zoom level
    zoom:number = 4;

    // initial center position for the map
    lat:number = 34.27261;
    lng:number = 122.036225;

    clickedMarker(label:string, detail:string, index:number) {
        console.log(`clicked the marker: ${label || index}`);
        console.log(`clicked the marker: ${index}`);
        // alert(`${detail || index}`);

        if (index === 0) {
            document.getElementById("seoul_map").style.display = "block";
            document.getElementById("beijing_map").style.display = "none";
            document.getElementById("weihai_map").style.display = "none";
            document.getElementById("sanghai_map").style.display = "none";
            document.getElementById("shunzhen_map").style.display = "none";

            document.getElementById("seoul_text").style.display = "block";
            document.getElementById("beijing_text").style.display = "none";
            document.getElementById("weihai_text").style.display = "none";
            document.getElementById("sanghai_text").style.display = "none";
            document.getElementById("shunzhen_text").style.display = "none";
        } else if (index === 1) {
            document.getElementById("seoul_map").style.display = "none";
            document.getElementById("beijing_map").style.display = "none";
            document.getElementById("weihai_map").style.display = "none";
            document.getElementById("sanghai_map").style.display = "none";
            document.getElementById("shunzhen_map").style.display = "block";

            document.getElementById("seoul_text").style.display = "none";
            document.getElementById("beijing_text").style.display = "none";
            document.getElementById("weihai_text").style.display = "none";
            document.getElementById("sanghai_text").style.display = "none";
            document.getElementById("shunzhen_text").style.display = "block";
        } else if (index === 2) {
            document.getElementById("seoul_map").style.display = "none";
            document.getElementById("beijing_map").style.display = "none";
            document.getElementById("weihai_map").style.display = "none";
            document.getElementById("sanghai_map").style.display = "block";
            document.getElementById("shunzhen_map").style.display = "none";

            document.getElementById("seoul_text").style.display = "none";
            document.getElementById("beijing_text").style.display = "none";
            document.getElementById("weihai_text").style.display = "none";
            document.getElementById("sanghai_text").style.display = "block";
            document.getElementById("shunzhen_text").style.display = "none";
        } else if (index === 3) {
            document.getElementById("seoul_map").style.display = "none";
            document.getElementById("beijing_map").style.display = "block";
            document.getElementById("weihai_map").style.display = "none";
            document.getElementById("sanghai_map").style.display = "none";
            document.getElementById("shunzhen_map").style.display = "none";

            document.getElementById("seoul_text").style.display = "none";
            document.getElementById("beijing_text").style.display = "block";
            document.getElementById("weihai_text").style.display = "none";
            document.getElementById("sanghai_text").style.display = "none";
            document.getElementById("shunzhen_text").style.display = "none";
        } else if (index === 4) {
            document.getElementById("seoul_map").style.display = "none";
            document.getElementById("beijing_map").style.display = "none";
            document.getElementById("weihai_map").style.display = "block";
            document.getElementById("sanghai_map").style.display = "none";
            document.getElementById("shunzhen_map").style.display = "none";

            document.getElementById("seoul_text").style.display = "none";
            document.getElementById("beijing_text").style.display = "none";
            document.getElementById("weihai_text").style.display = "block";
            document.getElementById("sanghai_text").style.display = "none";
            document.getElementById("shunzhen_text").style.display = "none";
        }
    }


    mapClicked($event:MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            label: '',
            draggable: false,
            detail: ''
        });
    }

    markerDragEnd(m:marker, $event:MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers:marker[] = [
        {
            lat: 37.482083,
            lng: 126.884745,
            label: '서울',
            draggable: false,
            detail: '서울시 금천구 디지털로9길 99 (가산동, 스타밸리) 천재교육 에듀테크 센터 99, Digital-ro 9-gil, Geumcheon-gu, Seoul, 08510, Rep. of KOREA'
        },
        {
            lat: 22.537977,
            lng: 114.062111,
            label: '선전',
            draggable: false,
            detail: '中国广东省深圳市龙岗区梅坂大道雅南路1号 １Yanan Road, Meiban Avenue, Longgang, Shenzhen, Guangdong, China'
        },
        {
            lat: 31.244007,
            lng: 121.468485,
            label: '상하이',
            draggable: false,
            detail: '中国上海市黄浦区方斜路525弄 525 Fangxie Road, Huangpu, Shanghai, China'
        },
        {
            lat: 39.905624,
            lng: 116.404319,
            label: '베이징',
            draggable: false,
            detail: '中国北京市朝阳区酒仙桥路10号 10 Jiuxianqiao Road, Chaoyang, Beijing, China'
        },
        {
            lat: 37.515790,
            lng: 122.114409,
            label: '위해',
            draggable: false,
            detail: '高新技术开发区火炬路169-1 169-1 Huo Ju Road, Weihai, Shandong, China'
        }
    ];
}

// just an interface for type safety.
interface marker {
    lat:number;
    lng:number;
    label?:string;
    draggable:boolean;
    detail:string;
}