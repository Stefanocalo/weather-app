import {BsSunFill, BsFillMoonStarsFill, BsSnow2, BsDot} from 'react-icons/bs';
import {AiFillCloud, AiFillThunderbolt} from 'react-icons/ai';
import {ImDroplet} from 'react-icons/im'

export const renderStatic = (code, actual, sunsetH, dawn) => {
    switch(code) {
        case 1000: 
            if(actual < sunsetH && actual > dawn) {
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
            if(actual < sunsetH && actual > dawn) {
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
        case 1006, 1009:
            return(
                <div className="overCast">
                    <AiFillCloud className="staticCloud1" />
                    <AiFillCloud className="staticCloud2" />
                </div>
            );
        break;
        case 1030, 1135:
            return(
                <div className="fog">
                    <AiFillCloud className="staticCloud" />
                    <div className="line"></div>
                    <div className="line1"></div>
                </div>
            );
        break;
        case 1063, 1066, 1147, 1072, 1050:
            if(actual < sunsetH && actual > dawn) {
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
        case 1087, 1273, 1276, 1279:
            return(
                <div className="thunder">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <ImDroplet className="staticDrop2" />
                    <AiFillThunderbolt className="thunderLight"/>
                </div>
            );
        break;
        case 1114,1117,1210,1213,1216,1219,1222,1255,1225,1258,1282:
            return(
                <div className="snow">
                    <AiFillCloud className="staticCloud3" />
                    <BsSnow2 className="staticDrop1" />
                    <BsSnow2 className="staticDrop2" />
                </div>
            );
        break;
        case 1153,1168,1171,1180,1186,1192,1195,1198,1201,1240,1243,1246,1249:
            return(
                <div className="rain">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <ImDroplet className="staticDrop2" />
                </div>
            );
        break;
        case 1204,1252,1207:
            return(
                <div className="sleet">
                    <AiFillCloud className="staticCloud3" />
                    <ImDroplet className="staticDrop1" />
                    <BsSnow2 className="staticDrop2" />
                </div>
            );
        break;
        case 1237,1261,1264:
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