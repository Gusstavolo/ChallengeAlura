import { createElement } from 'react';





export function clickInfo(){
    const Header = document.getElementById('Headeri');
    const Foot = document.getElementById('FootId');
    const overlayInfo = document.getElementById('overlayInfo');
    
    if (overlayInfo) { 

        if (Foot){
            Foot.style.animation = 'closeFooter 2s forwards';
        }
       if(Header){
            Header.style.animation = 'closeHeader 2s forwards';
        }
       
    
    overlayInfo.style.display = 'flex';
    overlayInfo.style.animation = 'placeRight 2s forwards'
    }
     
}


export function clickCloseInfo() {
    const overlayInfo = document.getElementById('overlayInfo');
    const Header = document.getElementById('Headeri');
    const Foot = document.getElementById('FootId');
    if (overlayInfo) {

        overlayInfo.style.animation = 'placeRightClose 2s forwards'

        setTimeout(() => {

            if (Foot){
                Foot.style.animation = 'moveFooterClose 2s infinite';
            }
                 if(Header){
                Header.style.animation = 'moveHeaderClose 2s infinite';
            }


        


        }, 100);

        setTimeout(() => {
                overlayInfo.style.display = 'none';
                if (Foot){
                Foot.style.animation = 'moveFooter 2s alternate infinite';
            }
                 if(Header){
                Header.style.animation = 'moveHeader 2s alternate infinite';
            }
            }, 2000);
    }
}
/*
<div onClick={clickCloseInfo} id='overlayInfo' className='overlay'></div>
*/
