import {BsSunFill, BsFillMoonStarsFill, BsSnow2, BsDot} from 'react-icons/bs';
import {AiFillCloud, AiFillThunderbolt} from 'react-icons/ai';
import {ImDroplet} from 'react-icons/im'

import './renderAnim.css';

export const renderAnim = (code, actual, sunsetH, dawn) => {
    switch(code) {
        case 1000: 
            if(actual < sunsetH && actual >= dawn) {
                return(
                    <div className="clear">
                        <BsSunFill className="animSun"/>
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="clear">
                        <BsFillMoonStarsFill className="animMoon" />
                    </div>
                )
            }
        break;
        case 1003:
            if(actual < sunsetH && actual >= dawn) {
                return(
                    <div className="cloudyA">
                        <BsSunFill className="animSun1"/>
                        <AiFillCloud className="animCloud" />
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="cloudyA">
                        <BsFillMoonStarsFill className="animMoon1" />
                        <AiFillCloud className="animCloud" />
                    </div>
                )
            }
        break;
        case 1006:
        case 1009:
            return(
                <div className="animoverCast">
                    <AiFillCloud className="animCloud1" />
                    <AiFillCloud className="animCloud2" />
                </div>
            )
        break;
        case 1030:
        case 1135:
            return(
                <div className="fogA">
                    <AiFillCloud className="animFogCloud" />
                    <div className="animline"></div>
                    <div className="animline1"></div>
                </div>
            );
        break;
        case 1063:
        case 1066:
        case 1147:
        case 1072: 
        case 1050:
            if(actual < sunsetH && actual >= dawn) {
                return(
                    <div className="patchy">
                        <BsSunFill className="animSun1"/>
                        <AiFillCloud className="animCloud" />
                        <ImDroplet className="animDrop" />
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="patchy">
                        <BsFillMoonStarsFill className="animMoon1" />
                        <AiFillCloud className="animCloud" />
                        <ImDroplet className="animDrop" />
                    </div>
                )
            }
        break;
        case 1087:
        case 1276:
        case 1279:
            return(
                <div className="thunder">
                    <AiFillCloud className="animCloud3" />
                    <ImDroplet className="animDrop1" />
                    <ImDroplet className="animDrop2" />
                    <AiFillThunderbolt className="animthunderLight"/>
                </div>
            );
        break;
        case 1114:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1255:
        case 1225:
        case 1258:
        case 1282:
            return(
                <div className="snow">
                    <AiFillCloud className="animCloud3" />
                    <BsSnow2 className="animDrop1" />
                    <BsSnow2 className="animDrop2" />
                </div>
            );
        break;
        case 1153:
        case 1171: 
        case 1180:
        case 1183:
        case 1186:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1189:
            return(
                <div className="rainA">
                    <AiFillCloud className="animCloud3" />
                    <ImDroplet className="animDrop1" />
                    <ImDroplet className="animDrop2" />
                </div>
            );
        break;
        case 1204:
        case 1252:
        case 1207:
            return(
                <div className="sleet">
                    <AiFillCloud className="animCloud3" />
                    <ImDroplet className="animDrop1" />
                    <BsSnow2 className="animDrop2" />
                </div>
            );
        break;
        case 1237:
        case 1261:
        case 1264:
            return(
                <div className="ice">
                    <AiFillCloud className="animCloud3" />
                    <BsDot className="animIce1" />
                    <BsDot className="animIce2" />
                </div>
            );
        break;
    }
}