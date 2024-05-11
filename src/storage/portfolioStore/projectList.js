import image2 from "../../img/projects/02.jpg"
import image2Big from "../../img/projects/02-big.jpg"
import image3 from "../../img/projects/03.jpg"
import image3Big from "../../img/projects/03-big.jpg"
import fin from '../../img/projects/fin.jpg'
import {FIN_ACC_HOME_ROUTE} from "../../utils/consts";
const projects = [
    {
        id: 1,
        title:'financial',
        description: 'some description1...later',
        image: fin,
        imageBig: fin,
        gitHub: 'https://github.com/MaksimIvanovBlr/portfolio',
        projectLink: FIN_ACC_HOME_ROUTE
    },
    {
        id: 2,
        title:'project2',
        description: 'some description2',
        image: image2,
        imageBig: image2Big,
        gitHub: 'https://github.com/MaksimIvanovBlr',
    },
    {
        id: 3,
        title:'project3',
        description: 'some description3',
        image: image3,
        imageBig: image3Big,
        gitHub: 'https://github.com/MaksimIvanovBlr',
    },
]

export {projects}