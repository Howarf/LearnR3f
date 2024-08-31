import { useState } from 'react';
import styles from '../css/menu.module.css'
import { Link } from 'react-router-dom';

export default function Menu(){
    const [menu_s, setMenu_s] = useState(false);
    const [btn_s, setBtn_s] = useState(false)

    function MenuClick(){
        const menu = document.getElementById('menu');
        if(!menu_s){
            menu.animate(
                [{transform:"translateX(0%)"},{transform:"translateX(100%)"}],
                { fill:"forwards", duration:300,}
            );
            setMenu_s(true);
            setBtn_s(true);
        }else{
            menu.animate(
                [{transform:"translateX(100%)"},{transform:"translateX(0%)"}],
                { fill:"forwards", duration:300,}
            );
            setMenu_s(false);
            setBtn_s(false);
        }
    }
    function MenuLeave(){
        const menu = document.getElementById('menu');
        if(menu_s){
            menu.animate(
                [{transform:"translateX(100%)"},{transform:"translateX(0%)"}],
                { fill:"forwards", duration:300,}
            );
            setMenu_s(false);
            setBtn_s(false);
        }
    }
    function MenuClick2(){
        const menu = document.getElementById('menu_1');
        if(window.getComputedStyle(menu).display === "none"){
            menu.setAttribute("style", "display:flex");
            menu.animate([{transform:'translateY(-100%)'}, {transform:'translateY(0%)'}], {fill:'forwards', duration:100});
        }else{
            menu.setAttribute("style", "display:none");
            menu.animate([{transform:'translateY(0%)'}, {transform:'translateY(-100%)'}], {fill:'forwards', duration:100});
        }
    }

    return(
        <div className={styles.menu} id='menu' onMouseLeave={MenuLeave}>
            <div className={styles.menuBtn} id={btn_s ? (styles.close) : (styles.opne)} onClick={MenuClick}>
                <span className={styles.btnDising} id={styles.btnDising1}></span>
                <span className={styles.btnDising} id={styles.btnDising2}></span>
                <span className={styles.btnDising} id={styles.btnDising3}></span>
            </div>
            <div className={styles.menuBox}>
                <Link to={'/'}><h1>Example</h1></Link>
                <span className={styles.subTitle1} onClick={MenuClick2}>시작 예제</span>
                <div className={styles.listBtn1}>
                    <ul className={styles.menuList1} id='menu_1'>
                        <Link to={'/Cube'}><li>기본 큐브</li></Link>
                        <Link to={'/UiPairing'}><li>Ui 연동하기</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}