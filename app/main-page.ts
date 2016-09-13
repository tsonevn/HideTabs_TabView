import { EventData } from "data/observable";
import { Page } from "ui/page";
import {TabView} from "ui/tab-view";
import {isAndroid, isIOS} from "platform";
import {SwipeGestureEventData} from "ui/gestures";



export function tabviewLoaded(args:EventData){

    var tabview =<any> args.object;

     if(isAndroid){
        var tabViewgrid = tabview._grid;
        console.dump(tabViewgrid.removeViewAt(0));
     }

     if(isIOS){
        tabview._ios.tabBar.hidden = true;
        tabview.on("swipe", function(args:SwipeGestureEventData){
            console.log(args.direction);
            var tabViewSelectedIndex
            switch (args.direction) {
                case 1:
                    if(tabview.selectedIndex>0){
                        tabview.selectedIndex=tabview.selectedIndex-1;
                    }
                    else{
                        tabview.selectedIndex=0;
                    }
                    break;
                case 2:
                    if(tabview.selectedIndex < tabview.items.length-1){
                        tabview.selectedIndex=tabview.selectedIndex+1
                    }
                    else{
                        tabview.selectedIndex = tabview.items.length-1
                    }
                    break;
            
                default:
                    break;
            }
        })
     }
}