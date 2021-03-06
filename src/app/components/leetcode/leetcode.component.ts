import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
    selector: 'app-leetcode',
    templateUrl: './leetcode.component.html',
    styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent implements OnInit {

    @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

    @ViewChild('audio', { static: true })
    public audio: ElementRef<HTMLAudioElement>;

    constructor(public translationService: TranslationService) { }

    ngOnInit(): void {
        console.log(this.twoSum([2, 7, 11, 15], 26));

    }
    fileChange(file: FileList) {
        this.audio.nativeElement.src = URL.createObjectURL(file[0]);
        this.audio.nativeElement.load();
        this.audio.nativeElement.play();
        this.play();
    }

    play() {
        let context = new AudioContext();
        let source = context.createMediaElementSource(this.audio.nativeElement);
        let analyser = context.createAnalyser();
        source.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 1024;
        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);
        let ctx = this.canvas.nativeElement.getContext('2d');
        const WIDTH = 1200;
        const HEIGHT = 600;
        this.canvas.nativeElement.width = WIDTH;
        this.canvas.nativeElement.height = HEIGHT;
        let barWidth = WIDTH / bufferLength * 1.5;
        let barHeight;
        function renderFrame() {
            requestAnimationFrame(renderFrame);

            analyser.getByteFrequencyData(dataArray);
            console.log(dataArray);
            
            ctx.clearRect(0, 0, WIDTH, HEIGHT);

            for (var i = 0, x = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];

                var r = barHeight + 25 * (i / bufferLength);
                var g = 250 * (i / bufferLength);
                var b = 50;

                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                x += barWidth + 2;
            }
        }
        renderFrame();
    }

    /**
     * 数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
     */
    twoSum(nums: number[], target: number) {
        for (let i = 1; i <= nums.length; i++) {
            const elementI = nums[i - 1];
            for (let j = 1; j <= nums.length; j++) {
                const elementJ = nums[j - 1];
                if (elementI + elementJ === target && i !== j) {
                    return [i - 1, j - 1];
                }
            }
        }

        // 更好的解法
        // Map对象官方文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map
        // Map，Set对象阮一峰：https://es6.ruanyifeng.com/#docs/set-map

        // let targetMap = new Map();
        // for (let i = 0; i < nums.length; i++) {
        //     const element = nums[i];
        //     let key = target - element;
        //     if (targetMap.has(key)) {
        //         return [targetMap.get(key), i]
        //     }
        //     targetMap.set(element, i)
        // }
    };
    getAB<T>(a: A<string>, b: B, ab: A<string> & B, c: T) {
        console.log(a, b);
        console.log(ab.id);
        console.log(c);
    }

    test() {
        this.getAB({ id: 'a' }, { name: 'b' }, { id: 'aa', name: 'bb' }, 123);
    }
}
export type Container<T> = { value: T };
export interface A<T> {
    id: string;
    value?: T;
}
export interface B {
    name: string;
}