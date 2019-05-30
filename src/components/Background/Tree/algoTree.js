/*

    Algorithmic Tree - 1.0.0
    drawing trees algorithmically on the HTML5 canvas

    License       : GPL
    Developer     : Sameer Borate: http://codediesel.com
    Web Site      : http://codediesel.com

    taken from here: https://www.codediesel.com/javascript/drawing-trees-in-canvas/
    * added a third branch to the first few layers
    * made it animate
    * made colors params
    * added fruit
    * tweaked branch placement to remove rough joints

 */

import tinycolor from 'tinycolor2';

const devicePixelRatio = process.browser ? window.devicePixelRatio : 1;

export default class Tree {
    constructor(options) {
        for (const key in options) {
            this[key] = options[key];
        }

        this.width = +this.ctx.canvas.width;
        this.height = +this.ctx.canvas.height;

        this.leafColor = tinycolor(this.leafColorString);
        this.fruitColor = tinycolor(this.fruitColorString);
        this.branchColor = tinycolor(this.branchColorString);
    }

    frames = [];

    canvas = '';
    ctx = '';
    height = 0;
    width = 0;
    spread = 0.7;
    drawLeaves = true;
    hasFruit = true;
    leafColorString = '#55cc55';
    fruitColorString = '#cc2222';
    leafType = Tree.MEDIUM_LEAVES;
    branchColorString = '#553300';
    branchThickness = 13 * devicePixelRatio;

    static SMALL_LEAVES = 10 * devicePixelRatio;
    static MEDIUM_LEAVES = 200 * devicePixelRatio;
    static BIG_LEAVES = 500 * devicePixelRatio;
    static THIN_LEAVES = 900 * devicePixelRatio;
    static DRAWS_PER_FRAME = 60;

    animating = false;

    frameStart = undefined;
    frameFilled = false;
    drawsThisFrame = 0;
    async addFrame(cb) {
        if (this.frameStart === undefined) {
            this.frameStart = new Date();
        }
        if (this.frameFilled === false) {
            await cb();
            const timeSoFar = new Date() - this.frameStart;
            this.drawsThisFrame++;
            if (timeSoFar > 8 || this.drawsThisFrame > Tree.DRAWS_PER_FRAME) {
                this.frameFilled = true;
                requestAnimationFrame(() => {
                    this.frameFilled = false;
                    this.frameStart = undefined;
                    this.drawsThisFrame = 0;
                });
            }
        } else {
            return new Promise(resolve => {
                requestAnimationFrame(async () => {
                    await cb();
                    resolve();
                });
            });
        }
    }

    playFrame = () => {
        const frame = this.frames.shift();
        frame();
        if (this.frames.length === 0) {
            this.animating = false;
        } else {
            requestAnimationFrame(this.playFrame);
        }
    };

    /**
     * @member draw
     * tree.draw() initializes tthe tree structure
     *
     * @param {object} ctx      the canvas context
     * @param {integer} h       height of the canvas
     * @param {integer} w       width of the canvas
     * @param {float} spread    how much the tree branches are spread
     *                          Ranges from 0.3 - 1.
     * @param {boolean} leaves  draw leaves if set to true
     *
     */
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        // Center the tree in the window
        this.ctx.translate(this.width / 2, this.height);
        // Set branch thickness
        this.ctx.lineWidth = this.branchThickness;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.save();

        this.branch(0);
    }

    async branch(depth, countAtThisDepth = 0) {
        countAtThisDepth++;
        if (depth < 12) {
            await this.addFrame(() => {
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.lineTo(0, -this.height / 9 / (countAtThisDepth * 1.1));
                this.ctx.strokeStyle = this.branchColorString;
                this.ctx.stroke();

                this.ctx.translate(0, -this.height / 10 / (countAtThisDepth * 1.1));
                // Random integer from -0.1 to 0.1
                var randomN = depth > 1 ? -(Math.random() * 0.1) + 0.1 : 0;

                this.ctx.rotate(randomN);
            });
            const random = Math.random();

            if (random < this.spread || depth === 0 || countAtThisDepth > 2) {
                // Draw the left branches
                await this.addFrame(async () => {
                    this.ctx.rotate(-0.5);
                    this.ctx.scale(0.7, 0.7);
                    this.ctx.save();
                    await this.branch(depth + 1);
                    this.ctx.restore();
                });
                // Draw the right branches
                await this.addFrame(async () => {
                    this.ctx.rotate(1);
                    this.ctx.save();
                    await this.branch(depth + 1);
                    this.ctx.restore();
                });
                if (depth < 3) {
                    await this.addFrame(async () => {
                        this.ctx.save();
                        this.ctx.rotate(-0.5);
                        this.ctx.scale(0.6, 0.6);
                        await this.branch(depth + 2);
                        this.ctx.restore();
                    });
                }
            } else {
                await this.branch(depth, countAtThisDepth);
            }
        } else if (this.drawLeaves) {
            // Now that we have done drawing branches, draw the leaves
            var lengthFactor = 300 * devicePixelRatio;
            if (this.leafType === Tree.THIN_LEAVES) {
                lengthFactor = 10 * devicePixelRatio;
            }
            if (this.hasFruit && Math.random() < 0.05) {
                this.ctx.fillStyle = this.tweakColor(this.fruitColor);
                lengthFactor = this.leafType;
            } else {
                this.ctx.fillStyle = this.tweakColor(this.leafColor);
            }
            this.ctx.fillRect(0, 0, this.leafType, lengthFactor);
            //this.ctx.stroke();
        }
    }

    tweakColor(color) {
        const brightness = Math.random() * 15 - 7.5;
        const spin = Math.random() * 30 - 15;
        return (
            '#' +
            color
                .clone()
                .brighten(brightness)
                .spin(spin)
                .toHex()
        );
    }
}