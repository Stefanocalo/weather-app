import {BsSunFill, BsFillMoonStarsFill, BsSnow2, BsDot} from 'react-icons/bs';
import {AiFillCloud, AiFillThunderbolt} from 'react-icons/ai';
import {ImDroplet} from 'react-icons/im'

export const renderStatic = (code, actual, sunsetH, dawn) => {
    switch(code) {
        case 1000: 
            if(actual < sunsetH && actual >= dawn) {
                return(
                    <div className="clear">
                        <BsSunFill className="staticSun"/>
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="clear">
                        <BsFillMoonStarsFill className="staticMoon" />
                    </div>
                )
            }
        break;
        case 1003:
            if(actual < sunsetH && actual >= dawn) {
                console.log(actual);
                console.log('ok');
                return(
                    <div className="cloudy">
                        <BsSunFill className="staticSun1"/>
                        <AiFillCloud className="staticCloud" />
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="cloudy">
                        <BsFillMoonStarsFill className="staticMoon1" />
                        <AiFillCloud className="staticCloud" />
                    </div>
                )
            }
        break;
        case 1006:
        case 1009:
            return(
                <div className="overCast">
                    <AiFillCloud className="staticCloud1" />
                    <AiFillCloud className="staticCloud2" />
                </div>
            )
        break;
        case 1030:
        case 1135:
            return(
                <div className="fog">
                    <AiFillCloud className="fogCloud" />
                    <div className="line"></div>
                    <div className="line1"></div>
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
                        <BsSunFill className="staticSun1"/>
                        <AiFillCloud className="staticCloud" />
                        <ImDroplet className="staticDrop" />
                    </div>
                )
            } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                return(
                    <div className="patchy">
                        <BsFillMoonStarsFill className="staticMoon1" />
                        <AiFillCloud className="staticCloud" />
                        <ImDroplet className="staticDrop" />
                    </div>
                )
            }
        break;
        case 1087:
        case 1276:
        case 1279:
            return(
                <div className="thunder">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <ImDroplet className="staticDrop2" />
                    <AiFillThunderbolt className="thunderLight"/>
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
                    <AiFillCloud className="staticCloud3" />
                    <BsSnow2 className="staticDrop1" />
                    <BsSnow2 className="staticDrop2" />
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
                <div className="rain">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <ImDroplet className="staticDrop2" />
                </div>
            );
        break;
        case 1204:
        case 1252:
        case 1207:
            return(
                <div className="sleet">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <BsSnow2 className="staticDrop2" />
                </div>
            );
        break;
        case 1237:
        case 1261:
        case 1264:
            return(
                <div className="ice">
                    <AiFillCloud className="staticCloud3" />
                    <BsDot className="staticIce1" />
                    <BsDot className="staticIce2" />
                </div>
            );
        break;
    }
}