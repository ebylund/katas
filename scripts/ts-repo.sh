#!/bin/zsh
CURR_DATE="$(date +'%Y-%m-%d')";
NEW_DIR=$CURR_DATE-$1;
FULL_PATH=src/typescript/$NEW_DIR
mkdir $FULL_PATH;
cd $FULL_PATH;

mkdir src;
mkdir src/test;

MAIN_FUNC="export const main = (): string => {
  return 'Santa Vaca'
}";

MAIN_TEST="import { expect } from 'chai'
import { main } from '../'

describe('Describe', () => {
  it('should return a string', () => {
    expect(main()).to.eq('Santa Vaca')
  })
})";

echo $MAIN_FUNC > src/index.ts;
echo $MAIN_TEST > src/test/index.test.ts;

cp ../../../scripts/static/tsconfig.json .;

echo '
{
  "name": "'${NEW_DIR}'",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "ts-mocha src/**/*.test.ts --exit",
    "start:dev": "nodemon --watch \"src/**\" --ext \"ts,json\" --ignore \"src/**/*.test.ts\" --exec \"ts-node src/index.ts\""
  }
}
' > package.json

yarn add dotenv;
yarn add -D typescript ts-node mocha chai ts-mocha nodemon @types/mocha @types/chai @types/node;

echo "added kata: ./$FULL_PATH";

