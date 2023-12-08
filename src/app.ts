import yargs from 'yargs';
import {runPart1 as day8part1, runPart2 as day8part2} from './8/app';

const args = yargs.options({
  'day': { type: 'number', demandOption: true, alias: 'd' },
  'part': { type: 'number', default: 0, alias: 'p' },
}).parseSync();

const day = args.day;
const part = args.part;

console.log("Day " + day)
switch (day) {
    case 8:
        if (part === 1) { 
            day8part1();
            break;
         } else if (part === 2) {
            day8part2() 
            break;
         }
    default: 
        console.log("Not implemented"); 
        break;
}