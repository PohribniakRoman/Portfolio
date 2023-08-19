import mealCover from "../assets/meal-app.jpg";
import galleryCover from "../assets/gallery.jpg";
import colorPickerCover from "../assets/colorpicker.jpg";

import { ProjectItem } from "./ProjectItem"

const projects = [
{
    name:"Gallery 🏞️",
    description:"The web application is built without using third-party APIs. When a page is loaded, all media elements are loaded into the browser cache. All animations were written manually.",
    demo:"https://gallery-pohribniakroman.vercel.app/",
    git:"https://github.com/PohribniakRoman/Gallery",
    stack:["React","Redux","SCSS","TypeScript"],
    cover:galleryCover
},
{
    name:"Meal-App 🥩",
    description:"A web application with many interactions, such as a draggable border between the cart and store, ingredient hover effect, search and billing system.",
    demo:"https://delivery-app-pohribniakroman.vercel.app/",
    git:"https://github.com/PohribniakRoman/Meal-App",
    stack:["React","Redux","SCSS","API's","TypeScript"],
    cover:mealCover
},
{
    name:"Color Picker ✏️",
    description:"A service where you can upload your image via a link/file or just select a color on the screen to choose a color from it. You can also convert this color to any format and see shades & tints.",
    demo:"https://color-picker-tan.vercel.app/",
    git:"https://github.com/PohribniakRoman/Color-Picker",
    stack:["React","Redux","SCSS","TypeScript"],
    cover:colorPickerCover
},
]

export const Projects:React.FC = () => {
    return <section className="projects">
        <div className="projects--wrappper">
            <h3 className="projects--subtitle" data-aos="zoom-in-left">portfolio</h3>
            <h1 className="projects--title" data-aos="zoom-in-left">Each project is a unique piece of development 🧩</h1>
            {projects.map((data,index)=>{
                return <ProjectItem key={index} item={data} variant={index % 2 === 0?"straight":"reverse"}/>
            })}
        </div>
    </section>
}