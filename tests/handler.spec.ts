import { expect } from 'chai';
import 'mocha';

describe('Testing directory', () => {

    it('should return hello world', () => {
        const result = "Hello world!";
        expect(result).to.equal('Hello world!');
    });

});