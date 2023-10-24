import {Node2D, Circle2D, Rectangle2D} from './classes/index.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("game-canvas");

    if (canvas.getContext) {
        const context = canvas.getContext("2d");

        const rootNode = new Node2D(100, 100);
        const circle = new Circle2D(100, 100, "red", 100)
        const circle2 = new Circle2D(100, 200, "yellow", 100, false)
        const square = new Rectangle2D(300, 300, 100, 100);
        rootNode.addChildren([circle, circle2, square])
        

        function gameLoop() {
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Update and render the nodes
            rootNode.update();
            rootNode.renderAll(context);

            // Request the next frame
            requestAnimationFrame(gameLoop);
        }

        gameLoop();


    } 

})