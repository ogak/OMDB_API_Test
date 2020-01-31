const expect = require('chai').expect;
const request = require('request');
const baseUrl =  "http://www.omdbapi.com";


describe('OMDB API Test ', function(){
    this.timeout(500);
    it('Positive Test where user can search movie with example keyword "lord"', function(done){
     request.get({
            url: baseUrl+"/?apikey=f98bcc44&s=lord"
        }, function (err, res, body){
            expect(res.statusCode).to.equal(200);
            setTimeout(done,300);
            console.log(body);
            
        });
    });


    it('Negative Test when the user have an invalid API Key', function(done) {
          request.get({
            url: baseUrl+"/?apikey=abcdef&s=lord"
        }, function(err, res, body){
            expect(res.statusCode).to.equal(401);
            expect(body={"Response":"False","Error":"Invalid API key!"}).to.deep.equal({"Response":"False","Error":"Invalid API key!"});
            setTimeout(done,100);
            console.log(body);
            
        });

    });

    it('Negative Test when user has no search keyword', function(done) {
          request.get({
            url: baseUrl+"/?apikey=f98bcc44&s="
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200);
            expect(body={"Response":"False","Error":"Something went wrong."}).to.deep.equal({"Response":"False","Error":"Something went wrong."});
            setTimeout(done,100);
            console.log(body);
            
        });

    });
    
});


