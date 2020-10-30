var expect = require('chai').expect;


function titleCase(title){
    var word = title.split(' ');
    var titleCasedWords = word.map((word)=>{
        return word[0].toUpperCase() + word.substring(1);
    })
    return titleCasedWords.join(' ')
}
expect(titleCase('raiders of the Lost Ark')).to.be.a('string');
expect(titleCase('a')).to.equal('A')
expect(titleCase('blade runner')).to.equal('Blade Runner')
expect(titleCase('raiders of the lost ark')).to.equal('Raiders of the Lost Ark');