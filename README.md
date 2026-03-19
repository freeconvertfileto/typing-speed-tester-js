# Typing Speed Tester

Measure typing speed (WPM) and accuracy with multilingual passages across 10 languages and 4 difficulty levels, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/text-tools/typing-speed-tester-online

## How It Works

A large `PASSAGES` object is keyed by language code and difficulty, each entry containing passage text and a length indicator. Languages supported: en, es, fr, de, tr, ar, zh, id, ru, hi. Difficulties: easy, medium, hard, code. `renderPassage()` wraps each character in a `<span>` with a class of `correct`, `wrong`, `current`, or `pending` based on the user's typed input compared character-by-character. The typing area is an `<input>` whose value is compared against the passage on each `input` event. WPM is calculated as `(wordCount / elapsedMinutes)` where elapsed time starts on the first keypress. Accuracy is `(correctChars / totalTyped) * 100`. Grade thresholds: Expert (>=80 wpm and >=95% accuracy), Advanced (>=60 wpm and >=90%), Intermediate (>=40 wpm), Beginner, Keep Practicing. Pressing Tab resets the test.

## Features

- 10 languages with difficulty-specific passage pools
- 4 difficulty levels: easy, medium, hard, code
- Character-by-character CSS class highlighting (correct/wrong/current/pending)
- Live WPM and accuracy display
- Grade result: Expert / Advanced / Intermediate / Beginner / Keep Practicing
- Tab key resets the test

## Browser APIs Used

- (No external APIs — pure DOM and timing)

## Code Structure

| File | Description |
|------|-------------|
| `typing-speed-tester.js` | `PASSAGES` pool (10 languages × 4 difficulties), `renderPassage` char-by-char span coloring, WPM = words/elapsed, accuracy %, grade threshold evaluation |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| Language selector | Chooses language for passages |
| Difficulty selector | Chooses easy/medium/hard/code |
| Passage display | Span-colored character-by-character target text |
| Typing input | User types here |
| WPM display | Live words per minute |
| Accuracy display | Live accuracy percentage |
| Grade display | Result grade after completion |
| Reset / Tab key | Reset passage and timer |

## License

MIT
