let btn1=document.querySelector("#previous");
let btn2=document.querySelector("#next");
let HTML=["h tags:","p tags:","inputs:","buttons:","div:"];
let detail1=["HTML (Hypertext Markup Language) <h> tags are used to define headings in a webpage. They range from <h1> to <h6>, with <h1> being the most important and <h6> being the least.These tags help to structure and organize the content of a webpage, with larger numbers indicating decreasing importance or hierarchy. They are important for both SEO (Search Engine Optimization) and accessibility, aiding users and search engines in understanding the structure and context of the content.",
"In HTML, the <p> tag is used to define a paragraph of text. It represents a block of text content typically separated from adjacent content by vertical space. When the browser renders the HTML page, text enclosed within <p> tags is displayed as a single paragraph with default margins and line breaks.",
"HTML input tags are used to collect data from users in various forms such as text, checkboxes, radio buttons, etc. They allow users to input data which can be submitted to a server or processed using client-side scripts. Input tags are defined using the `<input>` element in HTML and can have attributes like type, name, value, etc., defining the type of input and its properties.",
"In HTML, `<button>` tags are used to create clickable buttons on a webpage. They can be used to trigger actions, submit forms, or perform other interactive functions when clicked by users. Buttons can contain text, images, or both, and they are styled using CSS to enhance their appearance and functionality.",
"In HTML, `<div>` tags are used as block-level elements to group and structure content within a web page. They create divisions or sections in the document and are commonly used for layout purposes, allowing developers to organize and style content easily using CSS. `<div>` tags do not have any inherent semantic meaning, making them versatile for a wide range of purposes, such as grouping related elements or defining sections of a webpage."];
let video1=["https://www.youtube.com/embed/cri7vQ4aWfU?si=T0MSqHFG-3rwK8aj",
"https://www.youtube.com/embed/t21br3Ny9KM?si=QrjQZpE0BIY-ZNDz",
"https://www.youtube.com/embed/8asQvoFlfPU?si=79j0jPcpE9LFlWSM",
"https://www.youtube.com/embed/P-YhbqRVPvs?si=H6Cj56-2qvoFh_gt",
"https://www.youtube.com/embed/fW1-qgjFhpE?si=DDope7NuAw_jiQrT"];
let video2=["https://www.youtube.com/embed/LwbKb2J8iy8?si=ZZYcaOwgJKigZpIE",
"https://www.youtube.com/embed/EWnfDUQgArs?si=WMXZpGNWoj1qRM3c",
"https://www.youtube.com/embed/QctF-i4-GuM?si=8QYZ88gJO1-Csn8E",
"https://www.youtube.com/embed/QctF-i4-GuM?si=8QYZ88gJO1-Csn8E",
"https://www.youtube.com/embed/K74l26pE4YA?si=FfVeTkuLGz45mr3L"];
let video3=["https://www.youtube.com/embed/oe-VrENM_Oo?si=aKKL0lNHpJvJoqbX",
"https://www.youtube.com/embed/7xgJmIOG8GE?si=3l2vnx-0DRYerNWm",
"https://www.youtube.com/embed/5kY4Th53w70?si=rNQ91ZOGKMJvPXmZ",
"https://www.youtube.com/embed/hRaDYCHqFQQ?si=1JN0kp3ZLbMJWBs5",
"https://www.youtube.com/embed/DHvZLI7Db8E?si=-bxwnSRDyHz4z2pk"];
let video4=["https://www.youtube.com/embed/PBNg3kIZD5c?si=nYJjsQIz7tAmvs5l",
"https://www.youtube.com/embed/5NxYn0GiApg?si=7j7rCH9Wk50zCNqj",
"https://www.youtube.com/embed/gj-OOEtPnP4?si=yGpmZvqG32C0D8E6",
"https://www.youtube.com/embed/6SKRyMqNPZw?si=7eOvJpV3jlj4nEW7",
"https://www.youtube.com/embed/L_yllyFHeVo?si=IKkEHIoQIF44dZrY"];
let video5=["https://www.youtube.com/embed/SNugvUgHSkg?si=VsaQVWQCAf3R6TRV",
"https://www.youtube.com/embed/hA7IfPjXeoI?si=50jRBW7EgD7Gjx8U",
"https://www.youtube.com/embed/jrJbZYCyMZw?si=oBOjHeBKtz_uak5b",
"https://www.youtube.com/embed/1g4W2U-l350?si=Q-naW7A58gE2aDcB",
"https://www.youtube.com/embed/1g4W2U-l350?si=Q-naW7A58gE2aDcB"];
let CSS=["Color:","Background Color:","Width:","Height:","Flex Display:"];
let detail2=["In CSS, colors can be defined using various formats including predefined color names (e.g., 'red', 'blue'), hexadecimal codes (e.g., #FF0000 for red), RGB values (e.g., rgb(255, 0, 0) for red), RGBA values (e.g., rgba(255, 0, 0, 0.5) for red with 50% opacity), HSL values (e.g., hsl(0, 100%, 50%) for red), or HSLA values (e.g., hsla(0, 100%, 50%, 0.5) for red with 50% opacity). These color definitions can be applied to various CSS properties such as `color`, `background-color`, `border-color`, etc., allowing for flexible and visually appealing designs on web pages.",
"In CSS, the background-color property is used to define the background color of an element. It specifies a color value that fills the background area of an element. This property accepts various color formats such as hexadecimal, RGB, RGBA, HSL, HSLA, and predefined color names.",
"In CSS, the `width` property defines the horizontal dimension of an element. It specifies the width of the content area, padding, and border of an element, but excludes the margin. You can set the width using various units such as pixels, percentages, ems, or viewport-relative units like vw (viewport width).",
"In CSS, the `height` property defines the vertical dimension of an element. It specifies the height of the content area of an element. This property can be set using various units such as pixels (px), percentages (%), viewport height (vh), or even in relative units like ems (em). It determines how much vertical space an element occupies within its containing block.",
"Flexbox is a layout model in CSS designed to provide a more efficient way to design and align items within a container. It allows for flexible and dynamic positioning of elements along a single axis or both axes, enabling easier distribution of space, alignment, and control over the layout of a webpage. With properties like `display: flex` set on the container, and additional flex-related properties, developers can create responsive and adaptive layouts with less code."];
let JAVASCRIPT=["Variable:","Loops:","Function:","Document:","Promise:"];
let detail3=["JavaScript variables are used to store data values. You can declare variables using the var, let, or const keywords, followed by the variable name. var is function-scoped, let is block-scoped and allows reassignment, while const is also block-scoped but prohibits reassignment after initialization.",
"In JavaScript, loops are control structures that repeat a block of code multiple times until a specified condition is met. Common loop types include `for`, `while`, and `do-while`. `for` loops are typically used when the number of iterations is known beforehand, `while` loops are used when the condition for iteration is dynamic, and `do-while` loops are similar to `while` loops, but guarantee at least one execution of the loop body.",
"JavaScript functions are reusable blocks of code that perform a specific task when called. They encapsulate a set of instructions and can accept inputs (parameters) and return outputs. Functions in JavaScript can be declared using the `function` keyword or as arrow functions (introduced in ES6).",
"In JavaScript, the `document` object represents the entire HTML document within a web browser. It serves as an interface to interact with the content of a webpage, allowing manipulation and access to elements such as forms, images, and text. Through the `document` object, developers can dynamically modify the structure, content, and styling of a webpage using JavaScript.",
"A promise in JavaScript represents the eventual completion or failure of an asynchronous operation and its resulting value. It allows asynchronous operations to be handled in a more organized and manageable way, enabling chaining of multiple asynchronous tasks and handling of their results through methods like `.then()` and `.catch()`."];
let BOOTSTRAP=["Breakpoints:","Grid:","Backgroud:","Color:","Border:"];
let detail4=["Bootstrap defines several breakpoints which are used to create responsive layouts:Extra small (xs): Up to 576px. Intended for smartphones.Small (sm): 576px and up. Intended for tablets and small devices.Medium (md): 768px and up. Intended for medium-sized devices like tablets.Large (lg): 992px and up. Intended for desktops and large devices.Extra large (xl): 1200px and up. Intended for extra-large desktops and devices.",
"Bootstrap grid is a responsive, mobile-first grid system consisting of 12 columns, providing a flexible layout structure for building websites. It allows developers to create grid-based layouts by dividing a webpage's content into rows and columns, facilitating the alignment of content across various screen sizes and devices.",
"The background in Bootstrap refers to the visual canvas behind content, often styled using utility classes or custom CSS. It can include color, images, gradients, or patterns, providing visual context and enhancing the overall design aesthetic of web pages or components. Bootstrap offers various classes like `bg-primary`, `bg-secondary`, etc., allowing developers to easily apply predefined background styles to elements, ensuring consistency and flexibility in design across different sections of a website or web application.",
"Bootstrap is a popular front-end framework that provides a predefined color palette for consistent and visually appealing designs. It offers a range of contextual color classes such as primary, secondary, success, danger, warning, info, and light, which can be easily applied to elements to convey meaning and hierarchy in web interfaces. These colors are designed to ensure accessibility, readability, and aesthetic coherence across different components and layouts within a website or web application.",
"Bootstrap is a popular front-end framework that provides a predefined set of CSS classes for creating responsive and visually appealing web designs. The `border` class in Bootstrap allows developers to easily add borders to elements by applying specific border-related classes, such as `border`, `border-top`, `border-bottom`, etc. These classes can be combined with other utility classes to customize border styles, colors, and sizes, providing flexibility in designing UI elements with borders in Bootstrap-based projects."];
let TAILWIND=["Breakpoints:","Text:","Round:","Paddings:","Margins:"];
let detail5=["Tailwind CSS breakpoints are predefined screen size ranges used for responsive design. By default, Tailwind provides breakpoints for small screens (sm), medium screens (md), large screens (lg), extra large screens (xl), and extra extra large screens (2xl). These breakpoints allow developers to easily create responsive layouts by applying utility classes based on screen size.",
"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to quickly build custom designs without writing custom CSS. It enables developers to create responsive, modern web interfaces efficiently by applying classes directly in HTML markup, allowing for rapid prototyping and flexible styling with minimal overhead.",
"Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a comprehensive set of pre-designed utility classes. Its 'round' utility class is used to apply rounded corners to an element, allowing developers to easily create rounded shapes such as buttons or containers with just a single class. This class accepts numeric values to specify the roundness of the corners, offering flexibility in design.",
"Tailwind CSS is a utility-first CSS framework that provides predefined utility classes for styling elements. Padding utilities in Tailwind can be applied using classes like `p-`, `py-`, `px-`, `pt-`, `pb-`, and `pl-`, followed by a number or a size scale. These classes enable quick and responsive padding adjustments for top, bottom, left, and right sides of elements, facilitating efficient layout design.",
"In Tailwind CSS, margins are defined using utility classes like `m-{size}` for setting margins on all sides or specific sides using directional classes like `mt-{size}` for top margin, `mb-{size}` for bottom margin, `ml-{size}` for left margin, and `mr-{size}` for right margin, where `{size}` can be values like `0`, `1`, `2`, etc., representing spacing scales defined in the Tailwind configuration file. These utility classes enable developers to easily apply consistent and customizable margins to elements in their web projects without writing custom CSS."];
let i=0;
let selected="";
let drop=document.querySelector("select");
let video=document.querySelector("iframe");
drop.addEventListener("change",(evt)=>{
    req(evt.target.value);
});
function req(req){
    selected=req;
    i=0;
    data(req);
    document.querySelector("#previous").hidden=false;
    document.querySelector("#next").hidden=false;
}
btn1.addEventListener("click",()=>{
    if(i!=0){
        i--;
        data(selected);
    }
});
btn2.addEventListener("click",()=>{
    if(i!=5){
        i++;
        data(selected);
    }
});
function data(emt){
    if(emt=="HTML"){
        document.querySelector("#heading").innerText=HTML[i].toUpperCase();
        document.querySelector("#detail").innerText=detail1[i];
        video.src=video1[i];
    }else if(emt=="CSS"){
        document.querySelector("#heading").innerText=CSS[i].toUpperCase();
        document.querySelector("#detail").innerText=detail2[i];
        video.src=video2[i];
    }else if(emt=="JAVASCRIPT"){
        document.querySelector("#heading").innerText=JAVASCRIPT[i].toUpperCase();
        document.querySelector("#detail").innerText=detail3[i];
        video.src=video3[i];
    }else if(emt=="BOOTSTRAP"){
        document.querySelector("#heading").innerText=BOOTSTRAP[i].toUpperCase();
        document.querySelector("#detail").innerText=detail4[i];
        video.src=video4[i];
    }else if(emt=="TAILWIND"){
        document.querySelector("#heading").innerText=TAILWIND[i].toUpperCase();
        document.querySelector("#detail").innerText=detail5[i];
        video.src=video5[i];
    }
}


