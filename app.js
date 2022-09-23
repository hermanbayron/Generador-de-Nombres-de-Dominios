var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];

for (var i = 0; i <= pronoun.length - 1; i++) {
    for (var j = 0; j <= adj.length - 1; j++) {
        for (var k = 0; k <= noun.length - 1; k++) {
            for (var l = 0; l <= ext.length - 1; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
            }
        }
    }
}