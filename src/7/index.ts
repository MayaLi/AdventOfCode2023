type Card = string
type Hand = string[5]
enum HandType {
    FIVE_OF_A_KIND = 7,
    FOUR_OF_A_KIND = 6,
    FULL_HOUSE = 5,
    THREE_OF_A_KIND = 4,
    TWO_PAIR = 3,
    ONE_PAIR = 2,
    HIGH_CARD = 1,
}

const CARDS: Card[] = [
    'A',
    'K',
    'Q',
    'J',
    'T',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
].reverse()

type CamelCardHand = {
    hand: Hand
    bid: number
    handType?: HandType
}

const hands: CamelCardHand[] = [
    { hand: '32T3K', bid: 765 },
    { hand: 'T55J5', bid: 684 },
    { hand: 'KK677', bid: 28 },
    { hand: 'KTJJT', bid: 220 },
    { hand: 'QQQJA', bid: 483 },
]

function sortCamelHand(a: CamelCardHand, b: CamelCardHand): number {
    throw new Error('Function not implemented.')
}

const numHands = hands.length
const sortedHands = hands.sort(sortCamelHand)
const totalWinning = sortedHands
    .map((hand, idx) => (idx + 1) * hand.bid)
    .reduce((prev, curr) => {
        return prev + curr
    }, 0)

