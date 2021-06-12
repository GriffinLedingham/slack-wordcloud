# slack-wordcloud

Simple script to parse Slack conversation log exports into JSON for use with [amueller/word_cloud](https://github.com/amueller/word_cloud).

## Requirements

- Node.js 9.4.x+ (lower than this likely works too)

## Usage

- `node parse.js <output JSON file> <channel name> [team member name]`

## Example

Run the following CLI command to generate an output JSON file:

- `node parse.js general_griffin.json general Griffin`

This will generate the file `general_griffin.json` of all messages posted by `Griffin` in the Slack channel `#general`.

## Usage with Word Cloud

Using the output .json generate by this script, you can run `amueller/word_cloud` like so:

- `wordcloud_cli --text general_griffin.json --imagefile general_griffin.png --stopwords stop --width 2000 --height 2000`

This will generate a word cloud image for the input JSON selected. The stopwords file can be found in this repo [here](https://github.com/GriffinLedingham/slack-wordcloud/blob/master/stop). These words will be excluded when generating the word cloud.
