/* IMAGE DATA */

// const images = [

//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
//     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
//     "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
//     "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
//     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
//     "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600",
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
//     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
//     "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
//     "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600",
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
//     "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
//     "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
//     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
//     "https://images.unsplash.com/photo-1511497584788-876760111969?w=600",
//     "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600",
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
//     "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600",
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
//     "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600",
//     "https://images.unsplash.com/photo-1511497584788-876760111969?w=600",
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600",
//     "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
//     "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600"

// ];

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80"
];


/* ELEMENTS */

const sphere = document.getElementById("sphere");
const experience = document.getElementById("experience");


/* SETTINGS */

const RADIUS = 520;

const COUNT = images.length;

const FOV = 850;


/* SPHERE STATE */

let rotationX = 0;
let rotationY = 0;

let targetRotationX = 0;
let targetRotationY = 0;


/* CREATE IMAGES */

const objects = [];


/* Fibonacci sphere distribution */

images.forEach((src, index) => {

    const img = document.createElement("img");

    img.className = "photo";

    img.src = src;

    img.draggable = false;

    sphere.appendChild(img);


    /* Fibonacci positioning */

    const y = 1 - (index / (COUNT - 1)) * 2;

    const radiusAtY = Math.sqrt(1 - y * y);

    const theta =
        Math.PI *
        (3 - Math.sqrt(5)) *
        index;


    const x =
        Math.cos(theta) *
        radiusAtY;

    const z =
        Math.sin(theta) *
        radiusAtY;


    objects.push({

        element: img,

        x: x * RADIUS,

        y: y * RADIUS,

        z: z * RADIUS

    });

});


/* ROTATION */

function rotatePoint(point) {

    /* Rotate Y */

    let cosY = Math.cos(rotationY);
    let sinY = Math.sin(rotationY);

    let x =
        point.x * cosY -
        point.z * sinY;

    let z =
        point.x * sinY +
        point.z * cosY;


    /* Rotate X */

    let cosX = Math.cos(rotationX);
    let sinX = Math.sin(rotationX);

    let y =
        point.y * cosX -
        z * sinX;

    z =
        point.y * sinX +
        z * cosX;


    return {
        x,
        y,
        z
    };

}


/* RENDER */

function render() {

    /* Smooth movement */

    rotationX +=
        (targetRotationX - rotationX) * 0.08;

    rotationY +=
        (targetRotationY - rotationY) * 0.08;


    objects.forEach(object => {

        const p =
            rotatePoint(object);


        /* Perspective */

        const depth =
            FOV /
            (FOV - p.z);


        const screenX =
            p.x * depth;

        const screenY =
            p.y * depth;


        /* Depth */

        const normalizedDepth =
            (p.z + RADIUS) /
            (RADIUS * 2);


        /* Size */

        const scale =
            0.25 +
            normalizedDepth * 0.95;


        /* Opacity */

        let opacity =
            0.12 +
            normalizedDepth * 0.88;


        /* Hide behind camera */

        if (p.z < -RADIUS * 0.45) {

            opacity = 0;

        }


        /* Blur distant images */

        const blur =
            Math.max(
                0,
                (0.5 - normalizedDepth) * 3
            );


        object.element.style.transform = `
            translate3d(
                ${screenX}px,
                ${screenY}px,
                ${p.z}px
            )
            scale(${scale})
        `;


        object.element.style.opacity =
            opacity;


        object.element.style.filter =
            `blur(${blur}px)`;


        /* Depth sorting */

        object.element.style.zIndex =
            Math.round(p.z + RADIUS);

    });


    requestAnimationFrame(render);

}


render();


/* MOUSE WHEEL */

window.addEventListener(
    "wheel",
    event => {

        /* Scroll rotates sphere */

        targetRotationX +=
            event.deltaY * 0.0025;

        targetRotationY +=
            event.deltaX * 0.0025;

    },
    {
        passive: true
    }
);


/* MOUSE MOVEMENT */

let mouseX = 0;
let mouseY = 0;

experience.addEventListener(
    "mousemove",
    event => {

        /* Mouse position */

        const x =
            (event.clientX / window.innerWidth) * 2 - 1;

        const y =
            (event.clientY / window.innerHeight) * 2 - 1;


        mouseX = x;
        mouseY = y;


        /* Subtle camera movement */

        targetRotationY +=
            x * 0.0008;

        targetRotationX +=
            y * 0.0005;

    }
);


/* DRAG CONTROL */

let dragging = false;

let lastX = 0;
let lastY = 0;


experience.addEventListener(
    "pointerdown",
    event => {

        dragging = true;

        document.body.classList.add("dragging");

        lastX = event.clientX;
        lastY = event.clientY;

    }
);


window.addEventListener(
    "pointermove",
    event => {

        if (!dragging) return;


        const dx =
            event.clientX - lastX;

        const dy =
            event.clientY - lastY;


        /* Horizontal rotation */

        targetRotationY +=
            dx * 0.006;


        /* Vertical rotation */

        targetRotationX +=
            dy * 0.006;


        lastX = event.clientX;
        lastY = event.clientY;

    }
);


window.addEventListener(
    "pointerup",
    () => {

        dragging = false;

        document.body.classList.remove("dragging");

    }
);


/* CLICK DIRECTION */

experience.addEventListener(
    "click",
    event => {

        if (dragging) return;


        /* Find click direction */

        const centerX =
            window.innerWidth / 2;

        const centerY =
            window.innerHeight / 2;


        const dx =
            event.clientX - centerX;

        const dy =
            event.clientY - centerY;


        /* Click right/left */

        targetRotationY +=
            dx * 0.002;


        /* Click up/down */

        targetRotationX +=
            dy * 0.002;

    }
);


/* KEYBOARD CONTROL */

window.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowLeft") {

            targetRotationY -= 0.4;

        }

        if (event.key === "ArrowRight") {

            targetRotationY += 0.4;

        }

        if (event.key === "ArrowUp") {

            targetRotationX -= 0.4;

        }

        if (event.key === "ArrowDown") {

            targetRotationX += 0.4;

        }

    }
);