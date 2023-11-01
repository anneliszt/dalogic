import {Node2D, Circle2D, Rectangle2D, GameBoard, Tile, Vector2D, Sprite} from './classes/index.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("game-canvas");

    if (canvas.getContext) {
        const context = canvas.getContext("2d");

        const rootNode = new Node2D();
        // const circle = new Circle2D(new Vector2D(10, 10), "red", 100)
        // const circle2 = new Circle2D(100, 200, "yellow", 100, false)
        // const square = new Rectangle2D(new Vector2D(), 100, 100);
        //

        const board = new GameBoard(new Vector2D(), 600, 64)
        // const tile = new Tile(0, 0, 64, 64, true)
        const image = document.getElementById("source");
        const sprite = new Sprite(image)
        rootNode.addChildren([board, sprite])
        // rootNode.addChild(tile)
        // rootNode.addChild(circle)
        // rootNode.addChild(circle2)
        // rootNode.addChild(square)

        let previousTime = 0.0
        let deltaTime = 0.0
        function gameLoop(currentTime) {
            currentTime *= 0.001;
            deltaTime = currentTime - previousTime;

            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            if (!isNaN(deltaTime)){
                rootNode.updateAll(deltaTime);
            }
            rootNode.renderAll(context);

            previousTime = currentTime;
            // Request the next frame
            requestAnimationFrame(gameLoop);
        }

        gameLoop();


    } 

})