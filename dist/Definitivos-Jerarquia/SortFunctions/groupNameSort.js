"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupNameSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
class GroupNameSort extends abstractSort_1.GeneralSort {
    constructor(group) {
        super();
        this.group = group;
    }
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.group.length; i++) {
            auxiliary.push(this.group[i].getName());
        }
        auxiliary.sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].getName() === auxiliary[i]) {
                    result.push(this.group[j]);
                }
            }
        }
        console.log(auxiliary);
        return result;
    }
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.group.length; i++) {
            auxiliary.push(this.group[i].getName());
        }
        auxiliary.sort().reverse();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].getName() === auxiliary[i]) {
                    result.push(this.group[j]);
                }
            }
        }
        console.log(auxiliary);
        return result;
    }
}
exports.GroupNameSort = GroupNameSort;
