import { HttpClient } from '@angular/common/http';
import { Pigeon } from './../interfaces/pigeon';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AviaryService {

    constructor(private http: HttpClient) { }

    getPigeons(orderBy: number): Promise<getPigeonsAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'pigeons?orderby=' + orderBy, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    deletePigeon(req: pigeonRequest,orderBy:number): Promise<getPigeonsAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/sell?orderby='+orderBy, req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    // feedPigeon(req: pigeonRequest): Promise<getPigeonsAPIReturn> {
    //     return new Promise((resolve, reject) => {
    //         this.http.post(environment.apiBaseUrl + 'pigeons/feed', req, {
    //             headers: {
    //                 'Authorization': 'Bearer ' + localStorage.getItem('token')
    //             }
    //         })
    //             .subscribe((res: getPigeonsAPIReturn) => {
    //                 resolve(res);
    //             }, err => {
    //                 reject(err);
    //             });
    //     });
    // }
    setAttacker(req: pigeonRequest,orderBy:number): Promise<getPigeonsAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/attacker?orderby='+orderBy, req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    setDefender(req: pigeonRequest,orderBy:number) : Promise<getPigeonsAPIReturn>{
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/defender?orderby='+orderBy, req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    getPigeonImage(pigeon: Pigeon): string {
        let imgName = "";
        switch (pigeon.type) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                imgName = "p1basic";
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                imgName = "p1baguette";
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                imgName = "p1bandeau";
                break;
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                imgName = "p1monocle";
                break;
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
                imgName = "p1beret";
                break;
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
                imgName = "p1banane";
                break;
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
                imgName = "p1extincteur";
                break;
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
                imgName = "p1bouclier";
                break;
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
                imgName = "p1batte";
                break;
            case 46:
            case 47:
            case 48:
            case 49:
            case 50:
                imgName = "p1chapeaumelon";
                break;
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
                imgName = "p1dague";
                break;
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
                imgName = "p1lance";
                break;
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
                imgName = "p1pistolet";
                break;
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
                imgName = "p1bouclierfer";
                break;
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
                imgName = "p1cape";
                break;
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
                imgName = "p1couronne";
                break;
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
                imgName = "p1fleurs";
                break;
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                imgName = "p1choppe";
                break;
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
                imgName = "p1echarpe";
                break;
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
                imgName = "p1the";
                break;
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                imgName = "p1sabre";
                break;
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
                imgName = "p1baguette";
                break;
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
                imgName = "p1bandeau";
                break;
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
                imgName = "p1monocle";
                break;
            case 121:
            case 122:
            case 123:
            case 124:
            case 125:
                imgName = "p1beret";
                break;
            case 126:
            case 127:
            case 128:
            case 129:
            case 130:
                imgName = "p1banane";
                break;
            case 131:
            case 132:
            case 133:
            case 134:
            case 135:
                imgName = "p1extincteur";
                break;
            case 136:
            case 137:
            case 138:
            case 139:
            case 140:
                imgName = "p1bouclier";
                break;
            case 141:
            case 142:
            case 143:
            case 144:
            case 145:
                imgName = "p1batte";
                break;
            case 146:
            case 147:
            case 148:
            case 149:
            case 150:
                imgName = "p1chapeaumelon";
                break;
            case 151:
            case 152:
            case 153:
            case 154:
            case 155:
                imgName = "p2basic";
                break;
            case 156:
            case 157:
            case 158:
            case 159:
            case 160:
                imgName = "p2baguette";
                break;
            case 161:
            case 162:
            case 163:
            case 164:
            case 165:
                imgName = "p2bandeau";
                break;
            case 166:
            case 167:
            case 168:
            case 169:
            case 170:
                imgName = "p2monocle";
                break;
            case 171:
            case 172:
            case 173:
            case 174:
            case 175:
                imgName = "p2beret";
                break;
            case 176:
            case 177:
            case 178:
            case 179:
            case 180:
                imgName = "p2banane";
                break;
            case 181:
            case 182:
            case 183:
            case 184:
            case 185:
                imgName = "p2extincteur";
                break;
            case 186:
            case 187:
            case 188:
            case 189:
            case 190:
                imgName = "p2bouclier";
                break;
            case 191:
            case 192:
            case 193:
            case 194:
            case 195:
                imgName = "p2batte";
                break;
            case 196:
            case 197:
            case 198:
            case 199:
            case 200:
                imgName = "p2chapeaumelon";
                break;
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
                imgName = "p2dague";
                break;
            case 206:
            case 207:
            case 208:
            case 209:
            case 210:
                imgName = "p2lance";
                break;
            case 211:
            case 212:
            case 213:
            case 214:
            case 215:
                imgName = "p2pistolet";
                break;
            case 216:
            case 217:
            case 218:
            case 219:
            case 220:
                imgName = "p2bouclierfer";
                break;
            case 221:
            case 222:
            case 223:
            case 224:
            case 225:
                imgName = "p2cape";
                break;
            case 226:
            case 227:
            case 228:
            case 229:
            case 230:
                imgName = "p2couronne";
                break;
            case 231:
            case 232:
            case 233:
            case 234:
            case 235:
                imgName = "p2fleurs";
                break;
            case 236:
            case 237:
            case 238:
            case 239:
            case 240:
                imgName = "p2choppe";
                break;
            case 241:
            case 242:
            case 243:
            case 244:
            case 245:
                imgName = "p2echarpe";
                break;
            case 246:
            case 247:
            case 248:
            case 249:
            case 250:
                imgName = "p2the";
                break;
            case 251:
            case 252:
            case 253:
            case 254:
            case 255:
                imgName = "p2sabre";
                break;
            case 256:
            case 257:
            case 258:
            case 259:
            case 260:
                imgName = "p2baguette";
                break;
            case 261:
            case 262:
            case 263:
            case 264:
            case 265:
                imgName = "p2bandeau";
                break;
            case 266:
            case 267:
            case 268:
            case 269:
            case 270:
                imgName = "p2monocle";
                break;
            case 271:
            case 272:
            case 273:
            case 274:
            case 275:
                imgName = "p2beret";
                break;
            case 276:
            case 277:
            case 278:
            case 279:
            case 280:
                imgName = "p2banane";
                break;
            case 281:
            case 282:
            case 283:
            case 284:
            case 285:
                imgName = "p2extincteur";
                break;
            case 286:
            case 287:
            case 288:
            case 289:
            case 290:
                imgName = "p2bouclier";
                break;
            case 291:
            case 292:
            case 293:
            case 294:
            case 295:
                imgName = "p2batte";
                break;
            case 296:
            case 297:
            case 298:
            case 299:
            case 300:
                imgName = "p2chapeaumelon";
                break;
            case -1:
                imgName = "p1_event_baguettes"
                break;
            default:
                imgName = "p1baguette";
        }
        return '../../assets/pigeons/' + imgName + '.png';
    }
}

export interface getPigeonsAPIReturn {
    message: string;
    data: {
        pigeons: Pigeon[],
        user: User
    }
}

export interface pigeonRequest {
    pigeonid: number
}