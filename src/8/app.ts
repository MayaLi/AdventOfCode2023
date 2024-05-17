import { Network } from './types'
import { PART_1_NETWORK, PART_1_INSTRUCTIONS } from './part_1_input'
import {
    PART_2_INSTRUCTIONS_EXAMPLE,
    PART_2_NETWORK_EXAMPLE,
    PART_2_NETWORK,
    PART_2_INSTRUCTIONS,
} from './part_2_input'
import { boolean } from 'yargs'

/**
 * Find the number of steps that it takes to navigate from AAA to ZZZ in the network
 * following provided instructions
 *
 * @param network Network
 * @param instructions string
 * @returns number steps
 */
function part1(network: Network, instructions: string): number {
    const START = 'AAA'
    const TARGET = 'ZZZ'

    const instructionLength = instructions.length
    let numSteps = 0
    let curr = START

    while (curr !== TARGET) {
        console.log({ numSteps, curr })
        const currInstruction = instructions.charAt(
            numSteps % instructionLength
        )
        const nextStepIdx = directionIndex(currInstruction)
        curr = network[curr][nextStepIdx]
        numSteps++
    }

    return numSteps
}

function directionIndex(direction: string): number {
    if (direction === 'L') return 0
    else if (direction === 'R') return 1
    else throw new Error('unknown direction: ' + direction)
}

/**
 * Return the number of steps it takes to start with all nodes that end in "A", following instructions for nodes
 * and end up in "Z".
 *
 * @param network Network
 * @param instructions string
 * @returns number
 */
function part2(
    network: Network,
    instructions: string,
    numSteps: number = 0,
    startNodes: string[] = []
): number {
    const instructionLength = instructions.length
    let currNodes =
        startNodes.length === 0 ? getPart2StarterNodes(network) : startNodes
    const nodeCount = currNodes.length

    while (true) {
        const numReachedZ = numNodesReachedTarget(currNodes, nodeCount)
        if (numReachedZ === nodeCount) {
            break
        } else if (numReachedZ >= 3) {
            console.log({ numReachedZ, numSteps, currNodes })
        }

        const currInstruction = instructions.charAt(
            numSteps % instructionLength
        )
        const nextStepIdx = directionIndex(currInstruction)
        currNodes = currNodes.map((n) => {
            return network[n][nextStepIdx]
        })

        numSteps++
    }
    console.log('Finished!!', { numSteps, currNodes, nodeCount })
    return numSteps
}

function getPart2StarterNodes(network: Network): string[] {
    return Object.keys(network).filter((n) => n.charAt(2) === 'A')
}

function numNodesReachedTarget(nodes: string[], nodeCount: number): number {
    return nodes.filter((n) => n.charAt(2) === 'Z').length
}

export function runPart1() {
    console.log('part 1 start')
    const steps1 = part1(PART_1_NETWORK, PART_1_INSTRUCTIONS)
    console.log(steps1)
}

export function runPart2() {
    console.log('part 2 start')
    // const steps = part2(PART_2_NETWORK, PART_2_INSTRUCTIONS)
    const steps = part2(PART_2_NETWORK, PART_2_INSTRUCTIONS, 36752029607, [
        'PQZ',
        'HKP',
        'BKZ',
        'XNZ',
        'BGX',
        'BTT',
    ])
    console.log(steps)
}
