import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-leetcode',
    templateUrl: './leetcode.component.html',
    styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log(this.twoSum([2, 7, 11, 15], 26));
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
}